const { ObjectId } = require('mongodb');

const paymentsData = [
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000001"),
    "paymentCode": "PAY-2026-0814-001",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000001"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "amount": 38640,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXSI1SJJMR",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90001"
    },
    "breakdown": {
      "baseAmount": 38640,
      "gatewayFee": 580,
      "platformCommission": 3864,
      "vendorReceivable": 34196
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000002"),
    "paymentCode": "PAY-2026-0814-002",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000002"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "amount": 29400,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX2E86T0EG",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90002"
    },
    "breakdown": {
      "baseAmount": 29400,
      "gatewayFee": 441,
      "platformCommission": 2940,
      "vendorReceivable": 26019
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000003"),
    "paymentCode": "PAY-2026-0814-003",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000003"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "amount": 9240,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXMKMVJQVA",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90003"
    },
    "breakdown": {
      "baseAmount": 9240,
      "gatewayFee": 139,
      "platformCommission": 924,
      "vendorReceivable": 8177
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000004"),
    "paymentCode": "PAY-2026-0814-004",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000004"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "amount": 4106,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXNC85LK9X",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90004"
    },
    "breakdown": {
      "baseAmount": 4106,
      "gatewayFee": 62,
      "platformCommission": 411,
      "vendorReceivable": 3633
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000005"),
    "paymentCode": "PAY-2026-0814-005",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000005"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "amount": 7875,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXSTVX9JPR",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90005"
    },
    "breakdown": {
      "baseAmount": 7875,
      "gatewayFee": 118,
      "platformCommission": 788,
      "vendorReceivable": 6969
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000006"),
    "paymentCode": "PAY-2026-0814-006",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000006"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXHUQGIRGI",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90006"
    },
    "breakdown": {
      "baseAmount": 21000,
      "gatewayFee": 315,
      "platformCommission": 2100,
      "vendorReceivable": 18585
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000007"),
    "paymentCode": "PAY-2026-0814-007",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000010"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "amount": 25116,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXP4PD8EKT",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90007"
    },
    "breakdown": {
      "baseAmount": 25116,
      "gatewayFee": 377,
      "platformCommission": 2512,
      "vendorReceivable": 22227
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 25116,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000008"),
    "paymentCode": "PAY-2026-0814-008",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000011"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "amount": 42000,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX2GRC45GS",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90008"
    },
    "breakdown": {
      "baseAmount": 42000,
      "gatewayFee": 630,
      "platformCommission": 4200,
      "vendorReceivable": 37170
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000009"),
    "paymentCode": "PAY-2026-0814-009",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000012"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "amount": 29400,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXU87BJSHV",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90009"
    },
    "breakdown": {
      "baseAmount": 29400,
      "gatewayFee": 441,
      "platformCommission": 2940,
      "vendorReceivable": 26019
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000010"),
    "paymentCode": "PAY-2026-0814-010",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000013"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "amount": 6569,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXZ76JQ1Q5",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90010"
    },
    "breakdown": {
      "baseAmount": 6569,
      "gatewayFee": 99,
      "platformCommission": 657,
      "vendorReceivable": 5813
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000011"),
    "paymentCode": "PAY-2026-0814-011",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000014"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "amount": 6825,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXIAFMSDXO",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90011"
    },
    "breakdown": {
      "baseAmount": 6825,
      "gatewayFee": 102,
      "platformCommission": 683,
      "vendorReceivable": 6040
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000012"),
    "paymentCode": "PAY-2026-0814-012",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000015"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000004"),
    "amount": 7875,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXQ8OW8G51",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90012"
    },
    "breakdown": {
      "baseAmount": 7875,
      "gatewayFee": 118,
      "platformCommission": 788,
      "vendorReceivable": 6969
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000013"),
    "paymentCode": "PAY-2026-0814-013",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000016"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000074"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000004"),
    "amount": 8211,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXHP6JFV3K",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90013"
    },
    "breakdown": {
      "baseAmount": 8211,
      "gatewayFee": 123,
      "platformCommission": 821,
      "vendorReceivable": 7267
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000014"),
    "paymentCode": "PAY-2026-0814-014",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000020"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 38850,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXOJBBG4J4",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90014"
    },
    "breakdown": {
      "baseAmount": 38850,
      "gatewayFee": 583,
      "platformCommission": 3885,
      "vendorReceivable": 34382
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 38850,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000015"),
    "paymentCode": "PAY-2026-0814-015",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000021"),
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 44100,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXLBLOA1FP",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90015"
    },
    "breakdown": {
      "baseAmount": 44100,
      "gatewayFee": 662,
      "platformCommission": 4410,
      "vendorReceivable": 39028
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000016"),
    "paymentCode": "PAY-2026-0814-016",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000022"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 8211,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXZBPKNB2Z",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90016"
    },
    "breakdown": {
      "baseAmount": 8211,
      "gatewayFee": 123,
      "platformCommission": 821,
      "vendorReceivable": 7267
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000017"),
    "paymentCode": "PAY-2026-0814-017",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000023"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 5880,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX1T3ITWH7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90017"
    },
    "breakdown": {
      "baseAmount": 5880,
      "gatewayFee": 88,
      "platformCommission": 588,
      "vendorReceivable": 5204
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000018"),
    "paymentCode": "PAY-2026-0814-018",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000024"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "amount": 9975,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXHB586G85",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90018"
    },
    "breakdown": {
      "baseAmount": 9975,
      "gatewayFee": 150,
      "platformCommission": 998,
      "vendorReceivable": 8827
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000019"),
    "paymentCode": "PAY-2026-0814-019",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000025"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "amount": 4830,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX0ZVRQLAQ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90019"
    },
    "breakdown": {
      "baseAmount": 4830,
      "gatewayFee": 72,
      "platformCommission": 483,
      "vendorReceivable": 4275
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000020"),
    "paymentCode": "PAY-2026-0814-020",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000026"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "amount": 6300,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX2OJS0KFT",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90020"
    },
    "breakdown": {
      "baseAmount": 6300,
      "gatewayFee": 95,
      "platformCommission": 630,
      "vendorReceivable": 5575
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000021"),
    "paymentCode": "PAY-2026-0814-021",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000030"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX2B0BC87K",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90021"
    },
    "breakdown": {
      "baseAmount": 14700,
      "gatewayFee": 221,
      "platformCommission": 1470,
      "vendorReceivable": 13009
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 14700,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000022"),
    "paymentCode": "PAY-2026-0814-022",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000031"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 14490,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXD8JBFU8Z",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90022"
    },
    "breakdown": {
      "baseAmount": 14490,
      "gatewayFee": 217,
      "platformCommission": 1449,
      "vendorReceivable": 12824
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000023"),
    "paymentCode": "PAY-2026-0814-023",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000032"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXS234DOJN",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90023"
    },
    "breakdown": {
      "baseAmount": 21000,
      "gatewayFee": 315,
      "platformCommission": 2100,
      "vendorReceivable": 18585
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000024"),
    "paymentCode": "PAY-2026-0814-024",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000033"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 13860,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXQBIGU0E2",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90024"
    },
    "breakdown": {
      "baseAmount": 13860,
      "gatewayFee": 208,
      "platformCommission": 1386,
      "vendorReceivable": 12266
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000025"),
    "paymentCode": "PAY-2026-0814-025",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000034"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "amount": 19320,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX254UN1VY",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90025"
    },
    "breakdown": {
      "baseAmount": 19320,
      "gatewayFee": 290,
      "platformCommission": 1932,
      "vendorReceivable": 17098
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000026"),
    "paymentCode": "PAY-2026-0814-026",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000035"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX9OHYECMS",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90026"
    },
    "breakdown": {
      "baseAmount": 14700,
      "gatewayFee": 221,
      "platformCommission": 1470,
      "vendorReceivable": 13009
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000027"),
    "paymentCode": "PAY-2026-0814-027",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000036"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "amount": 12600,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXOT3JV3Y4",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90027"
    },
    "breakdown": {
      "baseAmount": 12600,
      "gatewayFee": 189,
      "platformCommission": 1260,
      "vendorReceivable": 11151
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000028"),
    "paymentCode": "PAY-2026-0814-028",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000040"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 13524,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXK1AOU3MX",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90028"
    },
    "breakdown": {
      "baseAmount": 13524,
      "gatewayFee": 203,
      "platformCommission": 1352,
      "vendorReceivable": 11969
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 13524,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000029"),
    "paymentCode": "PAY-2026-0814-029",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000041"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 17850,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX9BTY6X1U",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90029"
    },
    "breakdown": {
      "baseAmount": 17850,
      "gatewayFee": 268,
      "platformCommission": 1785,
      "vendorReceivable": 15797
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000030"),
    "paymentCode": "PAY-2026-0814-030",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000042"),
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 19950,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXKAY8Q2KI",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90030"
    },
    "breakdown": {
      "baseAmount": 19950,
      "gatewayFee": 299,
      "platformCommission": 1995,
      "vendorReceivable": 17656
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000031"),
    "paymentCode": "PAY-2026-0814-031",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000043"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 7342,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX8YXM86SJ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90031"
    },
    "breakdown": {
      "baseAmount": 7342,
      "gatewayFee": 110,
      "platformCommission": 734,
      "vendorReceivable": 6498
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000032"),
    "paymentCode": "PAY-2026-0814-032",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000044"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXQ59SI1TD",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90032"
    },
    "breakdown": {
      "baseAmount": 21000,
      "gatewayFee": 315,
      "platformCommission": 2100,
      "vendorReceivable": 18585
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000033"),
    "paymentCode": "PAY-2026-0814-033",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000045"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXZZPPVLJG",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90033"
    },
    "breakdown": {
      "baseAmount": 14700,
      "gatewayFee": 221,
      "platformCommission": 1470,
      "vendorReceivable": 13009
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000034"),
    "paymentCode": "PAY-2026-0814-034",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000046"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "amount": 15939,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXX2LGGOHR",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90034"
    },
    "breakdown": {
      "baseAmount": 15939,
      "gatewayFee": 239,
      "platformCommission": 1594,
      "vendorReceivable": 14106
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000035"),
    "paymentCode": "PAY-2026-0814-035",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000050"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "amount": 19950,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX4BSEXGO5",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90035"
    },
    "breakdown": {
      "baseAmount": 19950,
      "gatewayFee": 299,
      "platformCommission": 1995,
      "vendorReceivable": 17656
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 19950,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000036"),
    "paymentCode": "PAY-2026-0814-036",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000051"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX8VDGZW2C",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90036"
    },
    "breakdown": {
      "baseAmount": 14700,
      "gatewayFee": 221,
      "platformCommission": 1470,
      "vendorReceivable": 13009
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000037"),
    "paymentCode": "PAY-2026-0814-037",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000052"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "amount": 38640,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXU3BK412S",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90037"
    },
    "breakdown": {
      "baseAmount": 38640,
      "gatewayFee": 580,
      "platformCommission": 3864,
      "vendorReceivable": 34196
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000038"),
    "paymentCode": "PAY-2026-0814-038",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000053"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "amount": 11760,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXTBLP1STL",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90038"
    },
    "breakdown": {
      "baseAmount": 11760,
      "gatewayFee": 176,
      "platformCommission": 1176,
      "vendorReceivable": 10408
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000039"),
    "paymentCode": "PAY-2026-0814-039",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000054"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "amount": 9975,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXBNNGA97N",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90039"
    },
    "breakdown": {
      "baseAmount": 9975,
      "gatewayFee": 150,
      "platformCommission": 998,
      "vendorReceivable": 8827
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000040"),
    "paymentCode": "PAY-2026-0814-040",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000055"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "amount": 6279,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXU5548YM9",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90040"
    },
    "breakdown": {
      "baseAmount": 6279,
      "gatewayFee": 94,
      "platformCommission": 628,
      "vendorReceivable": 5557
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000041"),
    "paymentCode": "PAY-2026-0814-041",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000056"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXJGYDF0J8",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90041"
    },
    "breakdown": {
      "baseAmount": 14700,
      "gatewayFee": 221,
      "platformCommission": 1470,
      "vendorReceivable": 13009
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000042"),
    "paymentCode": "PAY-2026-0814-042",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000060"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 17850,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXO6KXCHQU",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90042"
    },
    "breakdown": {
      "baseAmount": 17850,
      "gatewayFee": 268,
      "platformCommission": 1785,
      "vendorReceivable": 15797
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 17850,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000043"),
    "paymentCode": "PAY-2026-0814-043",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000061"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 18354,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXF7CSY1YH",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90043"
    },
    "breakdown": {
      "baseAmount": 18354,
      "gatewayFee": 275,
      "platformCommission": 1835,
      "vendorReceivable": 16244
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000044"),
    "paymentCode": "PAY-2026-0814-044",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000062"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 31500,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXMG9JJ6PN",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90044"
    },
    "breakdown": {
      "baseAmount": 31500,
      "gatewayFee": 473,
      "platformCommission": 3150,
      "vendorReceivable": 27877
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000045"),
    "paymentCode": "PAY-2026-0814-045",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000063"),
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 7980,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXE47USN3M",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90045"
    },
    "breakdown": {
      "baseAmount": 7980,
      "gatewayFee": 120,
      "platformCommission": 798,
      "vendorReceivable": 7062
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000046"),
    "paymentCode": "PAY-2026-0814-046",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000064"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 4830,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXOABUI00N",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90046"
    },
    "breakdown": {
      "baseAmount": 4830,
      "gatewayFee": 72,
      "platformCommission": 483,
      "vendorReceivable": 4275
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000047"),
    "paymentCode": "PAY-2026-0814-047",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000065"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXRYQRLH4Z",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90047"
    },
    "breakdown": {
      "baseAmount": 21000,
      "gatewayFee": 315,
      "platformCommission": 2100,
      "vendorReceivable": 18585
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000048"),
    "paymentCode": "PAY-2026-0814-048",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000066"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "amount": 11550,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXBHDRWE8A",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90048"
    },
    "breakdown": {
      "baseAmount": 11550,
      "gatewayFee": 173,
      "platformCommission": 1155,
      "vendorReceivable": 10222
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000049"),
    "paymentCode": "PAY-2026-0814-049",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000070"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 31878,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXGV9SN4FM",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90049"
    },
    "breakdown": {
      "baseAmount": 31878,
      "gatewayFee": 478,
      "platformCommission": 3188,
      "vendorReceivable": 28212
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 31878,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000050"),
    "paymentCode": "PAY-2026-0814-050",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000071"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 38850,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXAX7RUXMK",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90050"
    },
    "breakdown": {
      "baseAmount": 38850,
      "gatewayFee": 583,
      "platformCommission": 3885,
      "vendorReceivable": 34382
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000051"),
    "paymentCode": "PAY-2026-0814-051",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000072"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 44100,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXM9NAPV8I",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90051"
    },
    "breakdown": {
      "baseAmount": 44100,
      "gatewayFee": 662,
      "platformCommission": 4410,
      "vendorReceivable": 39028
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000052"),
    "paymentCode": "PAY-2026-0814-052",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000073"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 5796,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXXQTR6YJZ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90052"
    },
    "breakdown": {
      "baseAmount": 5796,
      "gatewayFee": 87,
      "platformCommission": 580,
      "vendorReceivable": 5129
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000053"),
    "paymentCode": "PAY-2026-0814-053",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000074"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 9975,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX0HAJRMIQ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90053"
    },
    "breakdown": {
      "baseAmount": 9975,
      "gatewayFee": 150,
      "platformCommission": 998,
      "vendorReceivable": 8827
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000054"),
    "paymentCode": "PAY-2026-0814-054",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000075"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXY85EAKE9",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90054"
    },
    "breakdown": {
      "baseAmount": 21000,
      "gatewayFee": 315,
      "platformCommission": 2100,
      "vendorReceivable": 18585
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000055"),
    "paymentCode": "PAY-2026-0814-055",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000076"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "amount": 13524,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXXGZMLA0X",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90055"
    },
    "breakdown": {
      "baseAmount": 13524,
      "gatewayFee": 203,
      "platformCommission": 1352,
      "vendorReceivable": 11969
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000056"),
    "paymentCode": "PAY-2026-0814-056",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000080"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 15750,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXVOY55J9L",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90056"
    },
    "breakdown": {
      "baseAmount": 15750,
      "gatewayFee": 236,
      "platformCommission": 1575,
      "vendorReceivable": 13939
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 15750,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000057"),
    "paymentCode": "PAY-2026-0814-057",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000081"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 19950,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX00926H44",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90057"
    },
    "breakdown": {
      "baseAmount": 19950,
      "gatewayFee": 299,
      "platformCommission": 1995,
      "vendorReceivable": 17656
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000058"),
    "paymentCode": "PAY-2026-0814-058",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000082"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 16422,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXLVPR4DXC",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90058"
    },
    "breakdown": {
      "baseAmount": 16422,
      "gatewayFee": 246,
      "platformCommission": 1642,
      "vendorReceivable": 14534
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000059"),
    "paymentCode": "PAY-2026-0814-059",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000083"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 4200,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXS7RF167D",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90059"
    },
    "breakdown": {
      "baseAmount": 4200,
      "gatewayFee": 63,
      "platformCommission": 420,
      "vendorReceivable": 3717
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000060"),
    "paymentCode": "PAY-2026-0814-060",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000084"),
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 6300,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXODMWGPWL",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90060"
    },
    "breakdown": {
      "baseAmount": 6300,
      "gatewayFee": 95,
      "platformCommission": 630,
      "vendorReceivable": 5575
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000061"),
    "paymentCode": "PAY-2026-0814-061",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000085"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "amount": 4106,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXQOT60G4T",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90061"
    },
    "breakdown": {
      "baseAmount": 4106,
      "gatewayFee": 62,
      "platformCommission": 411,
      "vendorReceivable": 3633
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000062"),
    "paymentCode": "PAY-2026-0814-062",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000086"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "amount": 7350,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXHFDG4TAN",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90062"
    },
    "breakdown": {
      "baseAmount": 7350,
      "gatewayFee": 110,
      "platformCommission": 735,
      "vendorReceivable": 6505
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000063"),
    "paymentCode": "PAY-2026-0814-063",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000090"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 29400,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXLL0XVIUZ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90063"
    },
    "breakdown": {
      "baseAmount": 29400,
      "gatewayFee": 441,
      "platformCommission": 2940,
      "vendorReceivable": 26019
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 29400,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000064"),
    "paymentCode": "PAY-2026-0814-064",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000091"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 21252,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXMG0U7WX7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90064"
    },
    "breakdown": {
      "baseAmount": 21252,
      "gatewayFee": 319,
      "platformCommission": 2125,
      "vendorReceivable": 18808
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000065"),
    "paymentCode": "PAY-2026-0814-065",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000092"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 25200,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXTUGFL39C",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90065"
    },
    "breakdown": {
      "baseAmount": 25200,
      "gatewayFee": 378,
      "platformCommission": 2520,
      "vendorReceivable": 22302
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000066"),
    "paymentCode": "PAY-2026-0814-066",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000093"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 7980,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXY6L3Q6BW",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90066"
    },
    "breakdown": {
      "baseAmount": 7980,
      "gatewayFee": 120,
      "platformCommission": 798,
      "vendorReceivable": 7062
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000067"),
    "paymentCode": "PAY-2026-0814-067",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000094"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 14490,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXVX5334Q5",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90067"
    },
    "breakdown": {
      "baseAmount": 14490,
      "gatewayFee": 217,
      "platformCommission": 1449,
      "vendorReceivable": 12824
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { paymentsData };
