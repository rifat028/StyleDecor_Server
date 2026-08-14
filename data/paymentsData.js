const { ObjectId } = require('mongodb');

const paymentsData = [
  {
    _id: new ObjectId("66be18a6f2c4a91b88000001"),
    paymentCode: "PAY-2026-0814-001",
    bookingId: new ObjectId("66be18a5f2c4a91b88000001"),
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 38640,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXHWBQ5JXCR",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_90000"
    },
    breakdown: {
      baseAmount: 38640,
      gatewayFee: 580,
      platformCommission: 3864,
      vendorReceivable: 34196
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:10:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000002"),
    paymentCode: "PAY-2026-0814-002",
    bookingId: new ObjectId("66be18a5f2c4a91b88000002"),
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 18900,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXQ5JXCR6KY",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_90037"
    },
    breakdown: {
      baseAmount: 18900,
      gatewayFee: 227,
      platformCommission: 1890,
      vendorReceivable: 16783
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:17:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000003"),
    paymentCode: "PAY-2026-0814-003",
    bookingId: new ObjectId("66be18a5f2c4a91b88000003"),
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 23100,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXXCR6KYDS7",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_90074"
    },
    breakdown: {
      baseAmount: 23100,
      gatewayFee: 578,
      platformCommission: 2310,
      vendorReceivable: 20212
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:24:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000004"),
    paymentCode: "PAY-2026-0814-004",
    bookingId: new ObjectId("66be18a5f2c4a91b88000004"),
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 6955,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRX6KYDS7LZE",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_90111"
    },
    breakdown: {
      baseAmount: 6955,
      gatewayFee: 202,
      platformCommission: 696,
      vendorReceivable: 6057
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:31:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000005"),
    paymentCode: "PAY-2026-0814-005",
    bookingId: new ObjectId("66be18a5f2c4a91b88000005"),
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 15750,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 15750,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000006"),
    paymentCode: "PAY-2026-0814-006",
    bookingId: new ObjectId("66be18a5f2c4a91b88000006"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    amount: 65100,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXLZET8M2FU",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_90185"
    },
    breakdown: {
      baseAmount: 65100,
      gatewayFee: 781,
      platformCommission: 6510,
      vendorReceivable: 57809
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T15:45:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 65100,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000007"),
    paymentCode: "PAY-2026-0814-007",
    bookingId: new ObjectId("66be18a5f2c4a91b88000007"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    amount: 21252,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXT8M2FU9N3",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_90222"
    },
    breakdown: {
      baseAmount: 21252,
      gatewayFee: 531,
      platformCommission: 2125,
      vendorReceivable: 18596
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:52:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000008"),
    paymentCode: "PAY-2026-0814-008",
    bookingId: new ObjectId("66be18a5f2c4a91b88000008"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    amount: 15960,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRX2FU9N3GVA",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_90259"
    },
    breakdown: {
      baseAmount: 15960,
      gatewayFee: 463,
      platformCommission: 1596,
      vendorReceivable: 13901
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:59:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000009"),
    paymentCode: "PAY-2026-0814-009",
    bookingId: new ObjectId("66be18a5f2c4a91b88000009"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    amount: 38850,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRX9N3GVAP4H",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_90296"
    },
    breakdown: {
      baseAmount: 38850,
      gatewayFee: 583,
      platformCommission: 3885,
      vendorReceivable: 34382
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:16:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800000a"),
    paymentCode: "PAY-2026-0814-010",
    bookingId: new ObjectId("66be18a5f2c4a91b8800000a"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000002"),
    amount: 17388,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXGVAP4HWBQ",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_90333"
    },
    breakdown: {
      baseAmount: 17388,
      gatewayFee: 209,
      platformCommission: 1739,
      vendorReceivable: 15440
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:23:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800000b"),
    paymentCode: "PAY-2026-0814-011",
    bookingId: new ObjectId("66be18a5f2c4a91b8800000b"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    amount: 38850,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 38850,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800000c"),
    paymentCode: "PAY-2026-0814-012",
    bookingId: new ObjectId("66be18a5f2c4a91b8800000c"),
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    amount: 47250,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXWBQ5JXCR6",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_90407"
    },
    breakdown: {
      baseAmount: 47250,
      gatewayFee: 1370,
      platformCommission: 4725,
      vendorReceivable: 41155
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T13:37:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 47250,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800000d"),
    paymentCode: "PAY-2026-0814-013",
    bookingId: new ObjectId("66be18a5f2c4a91b8800000d"),
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    amount: 16422,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRX5JXCR6KYD",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_90444"
    },
    breakdown: {
      baseAmount: 16422,
      gatewayFee: 246,
      platformCommission: 1642,
      vendorReceivable: 14534
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:44:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800000e"),
    paymentCode: "PAY-2026-0814-014",
    bookingId: new ObjectId("66be18a5f2c4a91b8800000e"),
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000003"),
    amount: 9240,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXCR6KYDS7L",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_90481"
    },
    breakdown: {
      baseAmount: 9240,
      gatewayFee: 111,
      platformCommission: 924,
      vendorReceivable: 8205
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:51:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800000f"),
    paymentCode: "PAY-2026-0814-015",
    bookingId: new ObjectId("66be18a5f2c4a91b8800000f"),
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    amount: 15750,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXKYDS7LZET",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_90518"
    },
    breakdown: {
      baseAmount: 15750,
      gatewayFee: 394,
      platformCommission: 1575,
      vendorReceivable: 13781
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:58:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000010"),
    paymentCode: "PAY-2026-0814-016",
    bookingId: new ObjectId("66be18a5f2c4a91b88000010"),
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    amount: 11206,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXS7LZET8M2",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_90555"
    },
    breakdown: {
      baseAmount: 11206,
      gatewayFee: 325,
      platformCommission: 1121,
      vendorReceivable: 9760
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:15:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000011"),
    paymentCode: "PAY-2026-0814-017",
    bookingId: new ObjectId("66be18a5f2c4a91b88000011"),
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    amount: 17850,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 17850,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000012"),
    paymentCode: "PAY-2026-0814-018",
    bookingId: new ObjectId("66be18a5f2c4a91b88000012"),
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000004"),
    amount: 34650,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRX8M2FU9N3G",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_90629"
    },
    breakdown: {
      baseAmount: 34650,
      gatewayFee: 416,
      platformCommission: 3465,
      vendorReceivable: 30769
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T11:29:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 34650,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000013"),
    paymentCode: "PAY-2026-0814-019",
    bookingId: new ObjectId("66be18a5f2c4a91b88000013"),
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    amount: 31878,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXFU9N3GVAP",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_90666"
    },
    breakdown: {
      baseAmount: 31878,
      gatewayFee: 797,
      platformCommission: 3188,
      vendorReceivable: 27893
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:36:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000014"),
    paymentCode: "PAY-2026-0814-020",
    bookingId: new ObjectId("66be18a5f2c4a91b88000014"),
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    amount: 28560,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXN3GVAP4HW",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_90703"
    },
    breakdown: {
      baseAmount: 28560,
      gatewayFee: 828,
      platformCommission: 2856,
      vendorReceivable: 24876
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:43:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000015"),
    paymentCode: "PAY-2026-0814-021",
    bookingId: new ObjectId("66be18a5f2c4a91b88000015"),
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    amount: 40950,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXVAP4HWBQ5",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_90740"
    },
    breakdown: {
      baseAmount: 40950,
      gatewayFee: 614,
      platformCommission: 4095,
      vendorReceivable: 36241
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:50:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000016"),
    paymentCode: "PAY-2026-0814-022",
    bookingId: new ObjectId("66be18a5f2c4a91b88000016"),
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    amount: 6955,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRX4HWBQ5JXC",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_90777"
    },
    breakdown: {
      baseAmount: 6955,
      gatewayFee: 83,
      platformCommission: 696,
      vendorReceivable: 6176
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:57:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000017"),
    paymentCode: "PAY-2026-0814-023",
    bookingId: new ObjectId("66be18a5f2c4a91b88000017"),
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000005"),
    amount: 14700,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 14700,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000018"),
    paymentCode: "PAY-2026-0814-024",
    bookingId: new ObjectId("66be18a5f2c4a91b88000018"),
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    amount: 35700,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXJXCR6KYDS",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_90851"
    },
    breakdown: {
      baseAmount: 35700,
      gatewayFee: 1035,
      platformCommission: 3570,
      vendorReceivable: 31095
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T17:21:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 35700,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000019"),
    paymentCode: "PAY-2026-0814-025",
    bookingId: new ObjectId("66be18a5f2c4a91b88000019"),
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    amount: 9660,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXR6KYDS7LZ",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_90888"
    },
    breakdown: {
      baseAmount: 9660,
      gatewayFee: 145,
      platformCommission: 966,
      vendorReceivable: 8549
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:28:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800001a"),
    paymentCode: "PAY-2026-0814-026",
    bookingId: new ObjectId("66be18a5f2c4a91b8800001a"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    amount: 7140,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXYDS7LZET8",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_90925"
    },
    breakdown: {
      baseAmount: 7140,
      gatewayFee: 86,
      platformCommission: 714,
      vendorReceivable: 6340
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:35:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800001b"),
    paymentCode: "PAY-2026-0814-027",
    bookingId: new ObjectId("66be18a5f2c4a91b8800001b"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    amount: 19950,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRX7LZET8M2F",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_90962"
    },
    breakdown: {
      baseAmount: 19950,
      gatewayFee: 499,
      platformCommission: 1995,
      vendorReceivable: 17456
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:42:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800001c"),
    paymentCode: "PAY-2026-0814-028",
    bookingId: new ObjectId("66be18a5f2c4a91b8800001c"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000006"),
    amount: 9660,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXET8M2FU9N",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_90999"
    },
    breakdown: {
      baseAmount: 9660,
      gatewayFee: 280,
      platformCommission: 966,
      vendorReceivable: 8414
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:49:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800001d"),
    paymentCode: "PAY-2026-0814-029",
    bookingId: new ObjectId("66be18a5f2c4a91b8800001d"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    amount: 8925,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 8925,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800001e"),
    paymentCode: "PAY-2026-0814-030",
    bookingId: new ObjectId("66be18a5f2c4a91b8800001e"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    amount: 27300,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXU9N3GVAP4",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_91073"
    },
    breakdown: {
      baseAmount: 27300,
      gatewayFee: 328,
      platformCommission: 2730,
      vendorReceivable: 24242
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T15:13:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 27300,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800001f"),
    paymentCode: "PAY-2026-0814-031",
    bookingId: new ObjectId("66be18a5f2c4a91b8800001f"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    amount: 14490,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRX3GVAP4HWB",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_91110"
    },
    breakdown: {
      baseAmount: 14490,
      gatewayFee: 362,
      platformCommission: 1449,
      vendorReceivable: 12679
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:20:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000020"),
    paymentCode: "PAY-2026-0814-032",
    bookingId: new ObjectId("66be18a5f2c4a91b88000020"),
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    amount: 14280,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXAP4HWBQ5J",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_91147"
    },
    breakdown: {
      baseAmount: 14280,
      gatewayFee: 414,
      platformCommission: 1428,
      vendorReceivable: 12438
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:27:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000021"),
    paymentCode: "PAY-2026-0814-033",
    bookingId: new ObjectId("66be18a5f2c4a91b88000021"),
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    amount: 34650,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXHWBQ5JXCR",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_91184"
    },
    breakdown: {
      baseAmount: 34650,
      gatewayFee: 520,
      platformCommission: 3465,
      vendorReceivable: 30665
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:34:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000022"),
    paymentCode: "PAY-2026-0814-034",
    bookingId: new ObjectId("66be18a5f2c4a91b88000022"),
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000007"),
    amount: 26275,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXQ5JXCR6KY",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_91221"
    },
    breakdown: {
      baseAmount: 26275,
      gatewayFee: 315,
      platformCommission: 2628,
      vendorReceivable: 23332
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:41:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000023"),
    paymentCode: "PAY-2026-0814-035",
    bookingId: new ObjectId("66be18a5f2c4a91b88000023"),
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    amount: 42000,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 42000,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000024"),
    paymentCode: "PAY-2026-0814-036",
    bookingId: new ObjectId("66be18a5f2c4a91b88000024"),
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    amount: 44100,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRX6KYDS7LZE",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_91295"
    },
    breakdown: {
      baseAmount: 44100,
      gatewayFee: 1279,
      platformCommission: 4410,
      vendorReceivable: 38411
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T13:55:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 44100,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000025"),
    paymentCode: "PAY-2026-0814-037",
    bookingId: new ObjectId("66be18a5f2c4a91b88000025"),
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    amount: 23184,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXDS7LZET8M",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_91332"
    },
    breakdown: {
      baseAmount: 23184,
      gatewayFee: 348,
      platformCommission: 2318,
      vendorReceivable: 20518
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:12:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000026"),
    paymentCode: "PAY-2026-0814-038",
    bookingId: new ObjectId("66be18a5f2c4a91b88000026"),
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    amount: 13860,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXLZET8M2FU",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_91369"
    },
    breakdown: {
      baseAmount: 13860,
      gatewayFee: 166,
      platformCommission: 1386,
      vendorReceivable: 12308
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:19:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000027"),
    paymentCode: "PAY-2026-0814-039",
    bookingId: new ObjectId("66be18a5f2c4a91b88000027"),
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000008"),
    amount: 31500,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXT8M2FU9N3",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_91406"
    },
    breakdown: {
      baseAmount: 31500,
      gatewayFee: 788,
      platformCommission: 3150,
      vendorReceivable: 27562
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:26:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000028"),
    paymentCode: "PAY-2026-0814-040",
    bookingId: new ObjectId("66be18a5f2c4a91b88000028"),
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    amount: 10046,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRX2FU9N3GVA",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_91443"
    },
    breakdown: {
      baseAmount: 10046,
      gatewayFee: 291,
      platformCommission: 1005,
      vendorReceivable: 8750
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:33:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000029"),
    paymentCode: "PAY-2026-0814-041",
    bookingId: new ObjectId("66be18a5f2c4a91b88000029"),
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    amount: 11550,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 11550,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800002a"),
    paymentCode: "PAY-2026-0814-042",
    bookingId: new ObjectId("66be18a5f2c4a91b8800002a"),
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    amount: 31500,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXGVAP4HWBQ",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_91517"
    },
    breakdown: {
      baseAmount: 31500,
      gatewayFee: 378,
      platformCommission: 3150,
      vendorReceivable: 27972
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T11:47:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 31500,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800002b"),
    paymentCode: "PAY-2026-0814-043",
    bookingId: new ObjectId("66be18a5f2c4a91b8800002b"),
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    amount: 18354,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXP4HWBQ5JX",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_91554"
    },
    breakdown: {
      baseAmount: 18354,
      gatewayFee: 459,
      platformCommission: 1835,
      vendorReceivable: 16060
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:54:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800002c"),
    paymentCode: "PAY-2026-0814-044",
    bookingId: new ObjectId("66be18a5f2c4a91b8800002c"),
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000009"),
    amount: 14280,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXWBQ5JXCR6",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_91591"
    },
    breakdown: {
      baseAmount: 14280,
      gatewayFee: 414,
      platformCommission: 1428,
      vendorReceivable: 12438
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:11:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800002d"),
    paymentCode: "PAY-2026-0814-045",
    bookingId: new ObjectId("66be18a5f2c4a91b8800002d"),
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    amount: 42000,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRX5JXCR6KYD",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_91628"
    },
    breakdown: {
      baseAmount: 42000,
      gatewayFee: 630,
      platformCommission: 4200,
      vendorReceivable: 37170
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:18:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800002e"),
    paymentCode: "PAY-2026-0814-046",
    bookingId: new ObjectId("66be18a5f2c4a91b8800002e"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    amount: 17388,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXCR6KYDS7L",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_91665"
    },
    breakdown: {
      baseAmount: 17388,
      gatewayFee: 209,
      platformCommission: 1739,
      vendorReceivable: 15440
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:25:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800002f"),
    paymentCode: "PAY-2026-0814-047",
    bookingId: new ObjectId("66be18a5f2c4a91b8800002f"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    amount: 34650,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 34650,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000030"),
    paymentCode: "PAY-2026-0814-048",
    bookingId: new ObjectId("66be18a5f2c4a91b88000030"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000a"),
    amount: 47250,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXS7LZET8M2",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_91739"
    },
    breakdown: {
      baseAmount: 47250,
      gatewayFee: 1370,
      platformCommission: 4725,
      vendorReceivable: 41155
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T17:39:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 47250,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000031"),
    paymentCode: "PAY-2026-0814-049",
    bookingId: new ObjectId("66be18a5f2c4a91b88000031"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    amount: 38640,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXZET8M2FU9",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_91776"
    },
    breakdown: {
      baseAmount: 38640,
      gatewayFee: 580,
      platformCommission: 3864,
      vendorReceivable: 34196
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:46:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000032"),
    paymentCode: "PAY-2026-0814-050",
    bookingId: new ObjectId("66be18a5f2c4a91b88000032"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    amount: 15960,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRX8M2FU9N3G",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_91813"
    },
    breakdown: {
      baseAmount: 15960,
      gatewayFee: 192,
      platformCommission: 1596,
      vendorReceivable: 14172
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:53:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000033"),
    paymentCode: "PAY-2026-0814-051",
    bookingId: new ObjectId("66be18a5f2c4a91b88000033"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    amount: 16800,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXFU9N3GVAP",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_91850"
    },
    breakdown: {
      baseAmount: 16800,
      gatewayFee: 420,
      platformCommission: 1680,
      vendorReceivable: 14700
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:10:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000034"),
    paymentCode: "PAY-2026-0814-052",
    bookingId: new ObjectId("66be18a5f2c4a91b88000034"),
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000b"),
    amount: 9660,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXN3GVAP4HW",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_91887"
    },
    breakdown: {
      baseAmount: 9660,
      gatewayFee: 280,
      platformCommission: 966,
      vendorReceivable: 8414
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:17:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000035"),
    paymentCode: "PAY-2026-0814-053",
    bookingId: new ObjectId("66be18a5f2c4a91b88000035"),
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    amount: 42000,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 42000,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000036"),
    paymentCode: "PAY-2026-0814-054",
    bookingId: new ObjectId("66be18a5f2c4a91b88000036"),
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    amount: 47250,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRX4HWBQ5JXC",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_91961"
    },
    breakdown: {
      baseAmount: 47250,
      gatewayFee: 567,
      platformCommission: 4725,
      vendorReceivable: 41958
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T15:31:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 47250,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000037"),
    paymentCode: "PAY-2026-0814-055",
    bookingId: new ObjectId("66be18a5f2c4a91b88000037"),
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    amount: 18354,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXBQ5JXCR6K",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_91998"
    },
    breakdown: {
      baseAmount: 18354,
      gatewayFee: 459,
      platformCommission: 1835,
      vendorReceivable: 16060
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:38:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000038"),
    paymentCode: "PAY-2026-0814-056",
    bookingId: new ObjectId("66be18a5f2c4a91b88000038"),
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000c"),
    amount: 7980,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXJXCR6KYDS",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_92035"
    },
    breakdown: {
      baseAmount: 7980,
      gatewayFee: 231,
      platformCommission: 798,
      vendorReceivable: 6951
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:45:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000039"),
    paymentCode: "PAY-2026-0814-057",
    bookingId: new ObjectId("66be18a5f2c4a91b88000039"),
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    amount: 29400,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXR6KYDS7LZ",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_92072"
    },
    breakdown: {
      baseAmount: 29400,
      gatewayFee: 441,
      platformCommission: 2940,
      vendorReceivable: 26019
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:52:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800003a"),
    paymentCode: "PAY-2026-0814-058",
    bookingId: new ObjectId("66be18a5f2c4a91b8800003a"),
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    amount: 14683,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXYDS7LZET8",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_92109"
    },
    breakdown: {
      baseAmount: 14683,
      gatewayFee: 176,
      platformCommission: 1468,
      vendorReceivable: 13039
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:59:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800003b"),
    paymentCode: "PAY-2026-0814-059",
    bookingId: new ObjectId("66be18a5f2c4a91b8800003b"),
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    amount: 44100,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 44100,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800003c"),
    paymentCode: "PAY-2026-0814-060",
    bookingId: new ObjectId("66be18a5f2c4a91b8800003c"),
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000d"),
    amount: 47250,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXET8M2FU9N",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_92183"
    },
    breakdown: {
      baseAmount: 47250,
      gatewayFee: 1370,
      platformCommission: 4725,
      vendorReceivable: 41155
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T13:23:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 47250,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800003d"),
    paymentCode: "PAY-2026-0814-061",
    bookingId: new ObjectId("66be18a5f2c4a91b8800003d"),
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    amount: 16422,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXM2FU9N3GV",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_92220"
    },
    breakdown: {
      baseAmount: 16422,
      gatewayFee: 246,
      platformCommission: 1642,
      vendorReceivable: 14534
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:30:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800003e"),
    paymentCode: "PAY-2026-0814-062",
    bookingId: new ObjectId("66be18a5f2c4a91b8800003e"),
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    amount: 13860,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXU9N3GVAP4",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_92257"
    },
    breakdown: {
      baseAmount: 13860,
      gatewayFee: 166,
      platformCommission: 1386,
      vendorReceivable: 12308
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:37:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800003f"),
    paymentCode: "PAY-2026-0814-063",
    bookingId: new ObjectId("66be18a5f2c4a91b8800003f"),
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    amount: 31500,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRX3GVAP4HWB",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_92294"
    },
    breakdown: {
      baseAmount: 31500,
      gatewayFee: 788,
      platformCommission: 3150,
      vendorReceivable: 27562
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:44:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000040"),
    paymentCode: "PAY-2026-0814-064",
    bookingId: new ObjectId("66be18a5f2c4a91b88000040"),
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    amount: 13138,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXAP4HWBQ5J",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_92331"
    },
    breakdown: {
      baseAmount: 13138,
      gatewayFee: 381,
      platformCommission: 1314,
      vendorReceivable: 11443
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:51:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000041"),
    paymentCode: "PAY-2026-0814-065",
    bookingId: new ObjectId("66be18a5f2c4a91b88000041"),
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000e"),
    amount: 10500,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 10500,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000042"),
    paymentCode: "PAY-2026-0814-066",
    bookingId: new ObjectId("66be18a5f2c4a91b88000042"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    amount: 65100,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXQ5JXCR6KY",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_92405"
    },
    breakdown: {
      baseAmount: 65100,
      gatewayFee: 781,
      platformCommission: 6510,
      vendorReceivable: 57809
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T11:15:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 65100,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000043"),
    paymentCode: "PAY-2026-0814-067",
    bookingId: new ObjectId("66be18a5f2c4a91b88000043"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    amount: 21252,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXXCR6KYDS7",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_92442"
    },
    breakdown: {
      baseAmount: 21252,
      gatewayFee: 531,
      platformCommission: 2125,
      vendorReceivable: 18596
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:22:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000044"),
    paymentCode: "PAY-2026-0814-068",
    bookingId: new ObjectId("66be18a5f2c4a91b88000044"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    amount: 15960,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRX6KYDS7LZE",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_92479"
    },
    breakdown: {
      baseAmount: 15960,
      gatewayFee: 463,
      platformCommission: 1596,
      vendorReceivable: 13901
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:29:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000045"),
    paymentCode: "PAY-2026-0814-069",
    bookingId: new ObjectId("66be18a5f2c4a91b88000045"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    amount: 8925,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXDS7LZET8M",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_92516"
    },
    breakdown: {
      baseAmount: 8925,
      gatewayFee: 134,
      platformCommission: 893,
      vendorReceivable: 7898
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:36:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000046"),
    paymentCode: "PAY-2026-0814-070",
    bookingId: new ObjectId("66be18a5f2c4a91b88000046"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b8800000f"),
    amount: 10819,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXLZET8M2FU",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_92553"
    },
    breakdown: {
      baseAmount: 10819,
      gatewayFee: 130,
      platformCommission: 1082,
      vendorReceivable: 9607
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:43:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000047"),
    paymentCode: "PAY-2026-0814-071",
    bookingId: new ObjectId("66be18a5f2c4a91b88000047"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    amount: 31500,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 31500,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000048"),
    paymentCode: "PAY-2026-0814-072",
    bookingId: new ObjectId("66be18a5f2c4a91b88000048"),
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    amount: 71400,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRX2FU9N3GVA",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_92627"
    },
    breakdown: {
      baseAmount: 71400,
      gatewayFee: 2071,
      platformCommission: 7140,
      vendorReceivable: 62189
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T17:57:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 71400,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000049"),
    paymentCode: "PAY-2026-0814-073",
    bookingId: new ObjectId("66be18a5f2c4a91b88000049"),
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    amount: 40572,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRX9N3GVAP4H",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_92664"
    },
    breakdown: {
      baseAmount: 40572,
      gatewayFee: 609,
      platformCommission: 4057,
      vendorReceivable: 35906
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:14:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800004a"),
    paymentCode: "PAY-2026-0814-074",
    bookingId: new ObjectId("66be18a5f2c4a91b8800004a"),
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    amount: 10920,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXGVAP4HWBQ",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_92701"
    },
    breakdown: {
      baseAmount: 10920,
      gatewayFee: 131,
      platformCommission: 1092,
      vendorReceivable: 9697
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:21:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800004b"),
    paymentCode: "PAY-2026-0814-075",
    bookingId: new ObjectId("66be18a5f2c4a91b8800004b"),
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000010"),
    amount: 19950,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXP4HWBQ5JX",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_92738"
    },
    breakdown: {
      baseAmount: 19950,
      gatewayFee: 499,
      platformCommission: 1995,
      vendorReceivable: 17456
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:28:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800004c"),
    paymentCode: "PAY-2026-0814-076",
    bookingId: new ObjectId("66be18a5f2c4a91b8800004c"),
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    amount: 25116,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXWBQ5JXCR6",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_92775"
    },
    breakdown: {
      baseAmount: 25116,
      gatewayFee: 728,
      platformCommission: 2512,
      vendorReceivable: 21876
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:35:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800004d"),
    paymentCode: "PAY-2026-0814-077",
    bookingId: new ObjectId("66be18a5f2c4a91b8800004d"),
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    amount: 29400,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 29400,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800004e"),
    paymentCode: "PAY-2026-0814-078",
    bookingId: new ObjectId("66be18a5f2c4a91b8800004e"),
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    amount: 39900,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXCR6KYDS7L",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_92849"
    },
    breakdown: {
      baseAmount: 39900,
      gatewayFee: 479,
      platformCommission: 3990,
      vendorReceivable: 35431
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T15:49:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 39900,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800004f"),
    paymentCode: "PAY-2026-0814-079",
    bookingId: new ObjectId("66be18a5f2c4a91b8800004f"),
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    amount: 8211,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXKYDS7LZET",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_92886"
    },
    breakdown: {
      baseAmount: 8211,
      gatewayFee: 205,
      platformCommission: 821,
      vendorReceivable: 7185
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:56:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000050"),
    paymentCode: "PAY-2026-0814-080",
    bookingId: new ObjectId("66be18a5f2c4a91b88000050"),
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    amount: 10920,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXS7LZET8M2",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_92923"
    },
    breakdown: {
      baseAmount: 10920,
      gatewayFee: 317,
      platformCommission: 1092,
      vendorReceivable: 9511
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:13:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000051"),
    paymentCode: "PAY-2026-0814-081",
    bookingId: new ObjectId("66be18a5f2c4a91b88000051"),
    customerId: new ObjectId("66be18a1f2c4a91b88000065"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000011"),
    amount: 35700,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXZET8M2FU9",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_92960"
    },
    breakdown: {
      baseAmount: 35700,
      gatewayFee: 536,
      platformCommission: 3570,
      vendorReceivable: 31594
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:20:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000052"),
    paymentCode: "PAY-2026-0814-082",
    bookingId: new ObjectId("66be18a5f2c4a91b88000052"),
    customerId: new ObjectId("66be18a1f2c4a91b88000066"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    amount: 10046,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRX8M2FU9N3G",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_92997"
    },
    breakdown: {
      baseAmount: 10046,
      gatewayFee: 121,
      platformCommission: 1005,
      vendorReceivable: 8920
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:27:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000053"),
    paymentCode: "PAY-2026-0814-083",
    bookingId: new ObjectId("66be18a5f2c4a91b88000053"),
    customerId: new ObjectId("66be18a1f2c4a91b88000067"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    amount: 19950,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 19950,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000054"),
    paymentCode: "PAY-2026-0814-084",
    bookingId: new ObjectId("66be18a5f2c4a91b88000054"),
    customerId: new ObjectId("66be18a1f2c4a91b88000068"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    amount: 30450,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXN3GVAP4HW",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_93071"
    },
    breakdown: {
      baseAmount: 30450,
      gatewayFee: 883,
      platformCommission: 3045,
      vendorReceivable: 26522
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T13:41:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 30450,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000055"),
    paymentCode: "PAY-2026-0814-085",
    bookingId: new ObjectId("66be18a5f2c4a91b88000055"),
    customerId: new ObjectId("66be18a1f2c4a91b88000069"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    amount: 9660,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXVAP4HWBQ5",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_93108"
    },
    breakdown: {
      baseAmount: 9660,
      gatewayFee: 145,
      platformCommission: 966,
      vendorReceivable: 8549
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:48:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000056"),
    paymentCode: "PAY-2026-0814-086",
    bookingId: new ObjectId("66be18a5f2c4a91b88000056"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006a"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000012"),
    amount: 7140,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRX4HWBQ5JXC",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_93145"
    },
    breakdown: {
      baseAmount: 7140,
      gatewayFee: 86,
      platformCommission: 714,
      vendorReceivable: 6340
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:55:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000057"),
    paymentCode: "PAY-2026-0814-087",
    bookingId: new ObjectId("66be18a5f2c4a91b88000057"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006b"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    amount: 8925,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXBQ5JXCR6K",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_93182"
    },
    breakdown: {
      baseAmount: 8925,
      gatewayFee: 223,
      platformCommission: 893,
      vendorReceivable: 7809
    },
    status: "completed",
    paidAt: new Date("2026-08-14T16:12:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000058"),
    paymentCode: "PAY-2026-0814-088",
    bookingId: new ObjectId("66be18a5f2c4a91b88000058"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006c"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    amount: 10046,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXJXCR6KYDS",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_93219"
    },
    breakdown: {
      baseAmount: 10046,
      gatewayFee: 291,
      platformCommission: 1005,
      vendorReceivable: 8750
    },
    status: "completed",
    paidAt: new Date("2026-08-14T17:19:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000059"),
    paymentCode: "PAY-2026-0814-089",
    bookingId: new ObjectId("66be18a5f2c4a91b88000059"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006d"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    amount: 15750,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 15750,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800005a"),
    paymentCode: "PAY-2026-0814-090",
    bookingId: new ObjectId("66be18a5f2c4a91b8800005a"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006e"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    amount: 35700,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXYDS7LZET8",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_93293"
    },
    breakdown: {
      baseAmount: 35700,
      gatewayFee: 428,
      platformCommission: 3570,
      vendorReceivable: 31702
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T11:33:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 35700,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800005b"),
    paymentCode: "PAY-2026-0814-091",
    bookingId: new ObjectId("66be18a5f2c4a91b8800005b"),
    customerId: new ObjectId("66be18a1f2c4a91b8800006f"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    amount: 31878,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRX7LZET8M2F",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_93330"
    },
    breakdown: {
      baseAmount: 31878,
      gatewayFee: 797,
      platformCommission: 3188,
      vendorReceivable: 27893
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:40:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800005c"),
    paymentCode: "PAY-2026-0814-092",
    bookingId: new ObjectId("66be18a5f2c4a91b8800005c"),
    customerId: new ObjectId("66be18a1f2c4a91b88000070"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000013"),
    amount: 28560,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXET8M2FU9N",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_93367"
    },
    breakdown: {
      baseAmount: 28560,
      gatewayFee: 828,
      platformCommission: 2856,
      vendorReceivable: 24876
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:47:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800005d"),
    paymentCode: "PAY-2026-0814-093",
    bookingId: new ObjectId("66be18a5f2c4a91b8800005d"),
    customerId: new ObjectId("66be18a1f2c4a91b88000071"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    amount: 29400,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXM2FU9N3GV",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_93404"
    },
    breakdown: {
      baseAmount: 29400,
      gatewayFee: 441,
      platformCommission: 2940,
      vendorReceivable: 26019
    },
    status: "completed",
    paidAt: new Date("2026-08-14T14:54:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800005e"),
    paymentCode: "PAY-2026-0814-094",
    bookingId: new ObjectId("66be18a5f2c4a91b8800005e"),
    customerId: new ObjectId("66be18a1f2c4a91b88000072"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    amount: 14683,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXU9N3GVAP4",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_93441"
    },
    breakdown: {
      baseAmount: 14683,
      gatewayFee: 176,
      platformCommission: 1468,
      vendorReceivable: 13039
    },
    status: "completed",
    paidAt: new Date("2026-08-14T15:11:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b8800005f"),
    paymentCode: "PAY-2026-0814-095",
    bookingId: new ObjectId("66be18a5f2c4a91b8800005f"),
    customerId: new ObjectId("66be18a1f2c4a91b88000073"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    amount: 25200,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "",
      gatewayResponseCode: "PENDING",
      valId: ""
    },
    breakdown: {
      baseAmount: 25200,
      gatewayFee: 0,
      platformCommission: 0,
      vendorReceivable: 0
    },
    status: "pending",
    paidAt: null,
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000060"),
    paymentCode: "PAY-2026-0814-096",
    bookingId: new ObjectId("66be18a5f2c4a91b88000060"),
    customerId: new ObjectId("66be18a1f2c4a91b88000074"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    amount: 31500,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRXAP4HWBQ5J",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_93515"
    },
    breakdown: {
      baseAmount: 31500,
      gatewayFee: 914,
      platformCommission: 3150,
      vendorReceivable: 27436
    },
    status: "refunded",
    paidAt: new Date("2026-08-14T17:25:00.000Z"),
    refundDetails: {
      isRefunded: true,
      refundAmount: 31500,
      refundReason: "Client requested date change due to venue unavailability.",
      refundedAt: new Date("2026-08-14T15:00:00.000Z")
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000061"),
    paymentCode: "PAY-2026-0814-097",
    bookingId: new ObjectId("66be18a5f2c4a91b88000061"),
    customerId: new ObjectId("66be18a1f2c4a91b88000075"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000014"),
    amount: 28980,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "bkash",
    gatewayDetails: {
      gateway: "bKash",
      transactionId: "TRXHWBQ5JXCR",
      gatewayResponseCode: "0000",
      valId: "VAL_BKASH_93552"
    },
    breakdown: {
      baseAmount: 28980,
      gatewayFee: 435,
      platformCommission: 2898,
      vendorReceivable: 25647
    },
    status: "completed",
    paidAt: new Date("2026-08-14T10:32:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000062"),
    paymentCode: "PAY-2026-0814-098",
    bookingId: new ObjectId("66be18a5f2c4a91b88000062"),
    customerId: new ObjectId("66be18a1f2c4a91b88000076"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 27300,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "nagad",
    gatewayDetails: {
      gateway: "Nagad",
      transactionId: "TRXQ5JXCR6KY",
      gatewayResponseCode: "0000",
      valId: "VAL_NAGAD_93589"
    },
    breakdown: {
      baseAmount: 27300,
      gatewayFee: 328,
      platformCommission: 2730,
      vendorReceivable: 24242
    },
    status: "completed",
    paidAt: new Date("2026-08-14T11:39:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000063"),
    paymentCode: "PAY-2026-0814-099",
    bookingId: new ObjectId("66be18a5f2c4a91b88000063"),
    customerId: new ObjectId("66be18a1f2c4a91b88000077"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 29400,
    currency: "BDT",
    paymentType: "full_payment",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "SSLCommerz",
      transactionId: "TRXXCR6KYDS7",
      gatewayResponseCode: "0000",
      valId: "VAL_SSL_93626"
    },
    breakdown: {
      baseAmount: 29400,
      gatewayFee: 735,
      platformCommission: 2940,
      vendorReceivable: 25725
    },
    status: "completed",
    paidAt: new Date("2026-08-14T12:46:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  },
  {
    _id: new ObjectId("66be18a6f2c4a91b88000064"),
    paymentCode: "PAY-2026-0814-100",
    bookingId: new ObjectId("66be18a5f2c4a91b88000064"),
    customerId: new ObjectId("66be18a1f2c4a91b88000078"),
    decoratorId: new ObjectId("66be18a2f2c4a91b88000001"),
    amount: 14683,
    currency: "BDT",
    paymentType: "advance_deposit",
    paymentMethod: "card",
    gatewayDetails: {
      gateway: "Stripe",
      transactionId: "TRX6KYDS7LZE",
      gatewayResponseCode: "0000",
      valId: "VAL_STRIPE_93663"
    },
    breakdown: {
      baseAmount: 14683,
      gatewayFee: 426,
      platformCommission: 1468,
      vendorReceivable: 12789
    },
    status: "completed",
    paidAt: new Date("2026-08-14T13:53:00.000Z"),
    refundDetails: {
      isRefunded: false,
      refundAmount: 0,
      refundReason: null,
      refundedAt: null
    },
    createdAt: new Date("2026-08-14T10:00:00.000Z"),
    updatedAt: new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { paymentsData };
