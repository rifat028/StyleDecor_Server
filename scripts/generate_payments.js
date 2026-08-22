const fs = require('fs');
const path = require('path');
const { bookingsData } = require('../data/bookingsData');

const paymentGateways = [
  { gateway: "bKash", method: "bkash", prefix: "BKASH", feePercent: 0.015 },
  { gateway: "Nagad", method: "nagad", prefix: "NAGAD", feePercent: 0.012 },
  { gateway: "SSLCommerz", method: "card", prefix: "SSL", feePercent: 0.025 },
  { gateway: "Stripe", method: "card", prefix: "STRIPE", feePercent: 0.029 }
];

function generateTrxId(i) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let res = "TRX";
  for (let c = 0; c < 9; c++) {
    res += chars[(i * 7 + c * 13) % chars.length];
  }
  return res;
}

const payments = [];

bookingsData.forEach((booking, i) => {
  const hex = (i + 1).toString(16).padStart(2, '0');
  const paymentId = `66be18a6f2c4a91b880000${hex}`;
  const paymentCode = `PAY-2026-0814-${(i + 1).toString().padStart(3, '0')}`;

  const gw = paymentGateways[i % paymentGateways.length];
  const trxId = generateTrxId(i + 1);
  const valId = `VAL_${gw.prefix}_${(90000 + i * 37)}`;

  let amount = 0;
  let paymentType = "advance_deposit";
  let status = "completed";
  let isRefunded = false;
  let refundAmount = 0;
  let refundReason = null;
  let refundedAt = null;
  let paidAt = `new Date("2026-08-14T${10 + (i % 8)}:${(10 + (i * 7) % 50).toString().padStart(2, '0')}:00.000Z")`;

  if (booking.paymentStatus === 'paid') {
    amount = booking.pricingBreakdown.grandTotal;
    paymentType = "full_payment";
    status = "completed";
  } else if (booking.paymentStatus === 'partially_paid') {
    amount = booking.pricingBreakdown.paidAmount || Math.round(booking.pricingBreakdown.grandTotal * 0.4);
    paymentType = "advance_deposit";
    status = "completed";
  } else if (booking.paymentStatus === 'unpaid') {
    amount = booking.pricingBreakdown.grandTotal;
    paymentType = "advance_deposit";
    status = "pending";
    paidAt = "null";
  } else if (booking.paymentStatus === 'refunded') {
    amount = booking.pricingBreakdown.grandTotal;
    paymentType = "full_payment";
    status = "refunded";
    isRefunded = true;
    refundAmount = amount;
    refundReason = booking.cancellationReason || "Booking cancelled by customer";
    refundedAt = `new Date("2026-08-14T15:00:00.000Z")`;
  }

  const baseAmount = amount;
  const gatewayFee = status === 'completed' || status === 'refunded' ? Math.round(baseAmount * gw.feePercent) : 0;
  const platformCommission = status === 'completed' || status === 'refunded' ? Math.round(baseAmount * 0.10) : 0;
  const vendorReceivable = status === 'completed' || status === 'refunded' ? (baseAmount - gatewayFee - platformCommission) : 0;

  payments.push(`  {
    _id: new ObjectId("${paymentId}"),
    paymentCode: "${paymentCode}",
    bookingId: new ObjectId("${booking._id}"),
    customerId: new ObjectId("${booking.customerId}"),
    decoratorId: new ObjectId("${booking.decoratorId}"),
    amount: ${amount},
    currency: "BDT",
    paymentType: "${paymentType}",
    paymentMethod: "${gw.method}",
    gatewayDetails: {
      gateway: "${gw.gateway}",
      transactionId: "${status === 'pending' ? '' : trxId}",
      gatewayResponseCode: "${status === 'pending' ? 'PENDING' : '0000'}",
      valId: "${status === 'pending' ? '' : valId}"
    },
    breakdown: {
      baseAmount: ${baseAmount},
      gatewayFee: ${gatewayFee},
      platformCommission: ${platformCommission},
      vendorReceivable: ${vendorReceivable}
    },
    status: "${status}",
    paidAt: ${paidAt},
    refundDetails: {
      isRefunded: ${isRefunded},
      refundAmount: ${refundAmount},
      refundReason: ${refundReason ? `"${refundReason}"` : 'null'},
      refundedAt: ${refundedAt}
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }`);
});

const fileContent = `const { ObjectId } = require('mongodb');

const paymentsData = [
${payments.join(',\n')}
];

module.exports = { paymentsData };
`;

fs.writeFileSync(path.join(__dirname, '../data/paymentsData.js'), fileContent);
console.log(`paymentsData.js generated successfully with exactly ${payments.length} payments!`);
