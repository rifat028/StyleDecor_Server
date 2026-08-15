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
      "transactionId": "TRXAJ0JJILO",
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
    "clientEmail": "tahmidur.rahman.user1@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000001",
    "serviceName": "Royal Wedding Reception Stage Setup - DreamCraft",
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
      "transactionId": "TRXLBPCJ1OI",
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
    "clientEmail": "shamima.nasrin.user2@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000002",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - DreamCraft",
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
      "transactionId": "TRXV6V94MY8",
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
    "clientEmail": "ashikur.rahman.user3@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000003",
    "serviceName": "Bride & Groom Grand Entry Pathway - DreamCraft",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000004"),
    "paymentCode": "PAY-2026-0814-004",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000005"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000001"),
    "amount": 7875,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXWS2YVYJ3",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90004"
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
    "clientEmail": "shakib.al.hasan.user5@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000005",
    "serviceName": "Special Effects - Cold Pyro & Dry Ice Low Fog - DreamCraft",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000005"),
    "paymentCode": "PAY-2026-0814-005",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000006"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX18KST2LQ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90005"
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
    "clientEmail": "mehnaz.tabassum.user6@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000006",
    "serviceName": "Royal Wedding Reception Stage Setup - Royal",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000006"),
    "paymentCode": "PAY-2026-0814-006",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000007"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "amount": 10626,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXR78ZF7HR",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90006"
    },
    "breakdown": {
      "baseAmount": 10626,
      "gatewayFee": 159,
      "platformCommission": 1063,
      "vendorReceivable": 9404
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "golam.rabbani.user7@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000007",
    "serviceName": "Bride & Groom Grand Entry Pathway - Royal",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000007"),
    "paymentCode": "PAY-2026-0814-007",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000008"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "amount": 7560,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXG5SPRYC9",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90007"
    },
    "breakdown": {
      "baseAmount": 7560,
      "gatewayFee": 113,
      "platformCommission": 756,
      "vendorReceivable": 6691
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "farzana.yasmin.user8@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000008",
    "serviceName": "Romantic Engagement & Ring Ceremony Decor - Royal",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000008"),
    "paymentCode": "PAY-2026-0814-008",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000010"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000002"),
    "amount": 25116,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX27FPGLWE",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90008"
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
    "clientEmail": "sabrina.mostafa.user10@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000010",
    "serviceName": "Corporate Dinner & Executive Meetup Decor - Royal",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000009"),
    "paymentCode": "PAY-2026-0814-009",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000011"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "amount": 42000,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXJZQI1RGV",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90009"
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
    "clientEmail": "towhidul.alam.user11@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000011",
    "serviceName": "Royal Wedding Reception Stage Setup - Bloom",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000010"),
    "paymentCode": "PAY-2026-0814-010",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000012"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "amount": 29400,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXHQZWFUFI",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90010"
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
    "clientEmail": "humaira.khatun.user12@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000012",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - Bloom",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000011"),
    "paymentCode": "PAY-2026-0814-011",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000013"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000003"),
    "amount": 6569,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXM3U4ZE1I",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90011"
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
    "clientEmail": "rashedul.islam.user13@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000013",
    "serviceName": "Pastel Baby Shower & Gender Reveal Setup - Bloom",
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
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXZ091D74N",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90012"
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
    "clientEmail": "imtiaz.hossain.user15@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000015",
    "serviceName": "Kids Themed Fantasy Birthday Setup - Kiddos",
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
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX0VIJCEAW",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90013"
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
    "clientEmail": "jannatul.ferdous.user16@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000016",
    "serviceName": "1st Birthday Little Prince / Princess Setup - Kiddos",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000014"),
    "paymentCode": "PAY-2026-0814-014",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000017"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000004"),
    "amount": 8925,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXY6329CQ0",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90014"
    },
    "breakdown": {
      "baseAmount": 8925,
      "gatewayFee": 134,
      "platformCommission": 893,
      "vendorReceivable": 7898
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "zahidul.karim.user17@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000017",
    "serviceName": "Pastel Baby Shower & Gender Reveal Setup - Kiddos",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000015"),
    "paymentCode": "PAY-2026-0814-015",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000019"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 9563,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXHLBK91MG",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90015"
    },
    "breakdown": {
      "baseAmount": 9563,
      "gatewayFee": 143,
      "platformCommission": 956,
      "vendorReceivable": 8464
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "kazi.nazrul.user19@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000019",
    "serviceName": "Executive Conference & Seminar Staging - Elite",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000016"),
    "paymentCode": "PAY-2026-0814-016",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000020"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 38850,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXRB9CBHMT",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90016"
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
    "clientEmail": "sumaiya.akter.user20@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000020",
    "serviceName": "Gala & Annual Award Night Stage Setup - Elite",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000017"),
    "paymentCode": "PAY-2026-0814-017",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000021"),
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 44100,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXONTTKRKW",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90017"
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
    "clientEmail": "istiakrifat001@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000021",
    "serviceName": "Product Launch & Trade Expo Pavilion - Elite",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000018"),
    "paymentCode": "PAY-2026-0814-018",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000023"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000005"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXUJ4LYU4T",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90018"
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
    "clientEmail": "shamima.nasrin.user2@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000023",
    "serviceName": "Spotlights & Ambient Event Lighting Setup - Elite",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000019"),
    "paymentCode": "PAY-2026-0814-019",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000024"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "amount": 7980,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXKX8ESSS7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90019"
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
    "clientEmail": "ashikur.rahman.user3@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000024",
    "serviceName": "Rooftop Party Canopy & Fairy Light Sky - Cozy",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000020"),
    "paymentCode": "PAY-2026-0814-020",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000025"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "amount": 4830,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXB30W9NTK",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90020"
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
    "clientEmail": "tania.sultana.user4@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000025",
    "serviceName": "Drawing Room & Balcony Aesthetic Makeover - Cozy",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000021"),
    "paymentCode": "PAY-2026-0814-021",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000026"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "amount": 6300,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXG1K1D1DX",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90021"
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
    "clientEmail": "shakib.al.hasan.user5@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000026",
    "serviceName": "Surprise Room Makeover with Balloons & Candles - Cozy",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000022"),
    "paymentCode": "PAY-2026-0814-022",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000028"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000006"),
    "amount": 6762,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXH7K732BY",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90022"
    },
    "breakdown": {
      "baseAmount": 6762,
      "gatewayFee": 101,
      "platformCommission": 676,
      "vendorReceivable": 5985
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "golam.rabbani.user7@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000028",
    "serviceName": "Romantic Anniversary & Candlelight Dining - Cozy",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000023"),
    "paymentCode": "PAY-2026-0814-023",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000029"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 2678,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXP5LZPAZ5",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90023"
    },
    "breakdown": {
      "baseAmount": 2678,
      "gatewayFee": 40,
      "platformCommission": 268,
      "vendorReceivable": 2370
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "farzana.yasmin.user8@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000029",
    "serviceName": "Custom Neon Signs & Marquee Letter Rental - Lumina",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000024"),
    "paymentCode": "PAY-2026-0814-024",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000030"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXB68OH1M6",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90024"
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
    "clientEmail": "mahmudur.rahman.user9@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000030",
    "serviceName": "Spotlights & Ambient Event Lighting Setup - Lumina",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000025"),
    "paymentCode": "PAY-2026-0814-025",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000031"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 14490,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX85JAF8CA",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90025"
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
    "clientEmail": "sabrina.mostafa.user10@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000031",
    "serviceName": "Special Effects - Cold Pyro & Dry Ice Low Fog - Lumina",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000026"),
    "paymentCode": "PAY-2026-0814-026",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000033"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000007"),
    "amount": 34650,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXAN901ZOD",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90026"
    },
    "breakdown": {
      "baseAmount": 34650,
      "gatewayFee": 520,
      "platformCommission": 3465,
      "vendorReceivable": 30665
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "humaira.khatun.user12@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000033",
    "serviceName": "Executive Conference & Seminar Staging - Lumina",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000027"),
    "paymentCode": "PAY-2026-0814-027",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000034"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "amount": 15456,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXS0J04VRB",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90027"
    },
    "breakdown": {
      "baseAmount": 15456,
      "gatewayFee": 232,
      "platformCommission": 1546,
      "vendorReceivable": 13678
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "rashedul.islam.user13@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000034",
    "serviceName": "Royal Wedding Reception Stage Setup - Utsab",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000028"),
    "paymentCode": "PAY-2026-0814-028",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000035"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX3WU66O4E",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90028"
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
    "clientEmail": "nusrat.sharmin.user14@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000035",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - Utsab",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000029"),
    "paymentCode": "PAY-2026-0814-029",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000036"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "amount": 12600,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRX836XMGC0",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90029"
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
    "clientEmail": "imtiaz.hossain.user15@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000036",
    "serviceName": "Romantic Engagement & Ring Ceremony Decor - Utsab",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000030"),
    "paymentCode": "PAY-2026-0814-030",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000038"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000008"),
    "amount": 15750,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXYF3VLU4V",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90030"
    },
    "breakdown": {
      "baseAmount": 15750,
      "gatewayFee": 236,
      "platformCommission": 1575,
      "vendorReceivable": 13939
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "zahidul.karim.user17@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000038",
    "serviceName": "Religious & Cultural Festival Pavilion - Utsab",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000031"),
    "paymentCode": "PAY-2026-0814-031",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000039"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 4725,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXE1ZTD36S",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90031"
    },
    "breakdown": {
      "baseAmount": 4725,
      "gatewayFee": 71,
      "platformCommission": 473,
      "vendorReceivable": 4181
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "afsana.mimi.user18@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000039",
    "serviceName": "Kids Themed Fantasy Birthday Setup - Pastel",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000032"),
    "paymentCode": "PAY-2026-0814-032",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000040"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 13524,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXAVWOFLI7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90032"
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
    "clientEmail": "kazi.nazrul.user19@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000040",
    "serviceName": "Romantic Anniversary & Candlelight Dining - Pastel",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000033"),
    "paymentCode": "PAY-2026-0814-033",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000041"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 17850,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXI9FMIYXM",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90033"
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
    "clientEmail": "sumaiya.akter.user20@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000041",
    "serviceName": "Pastel Baby Shower & Gender Reveal Setup - Pastel",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000034"),
    "paymentCode": "PAY-2026-0814-034",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000043"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000009"),
    "amount": 18354,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXEI5ADCT1",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90034"
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
    "clientEmail": "tahmidur.rahman.user1@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000043",
    "serviceName": "Rooftop Party Canopy & Fairy Light Sky - Pastel",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000035"),
    "paymentCode": "PAY-2026-0814-035",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000044"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "amount": 16800,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXTUDQ3CUE",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90035"
    },
    "breakdown": {
      "baseAmount": 16800,
      "gatewayFee": 252,
      "platformCommission": 1680,
      "vendorReceivable": 14868
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "shamima.nasrin.user2@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000044",
    "serviceName": "Royal Wedding Reception Stage Setup - Padma",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000036"),
    "paymentCode": "PAY-2026-0814-036",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000045"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXJ570NU36",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90036"
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
    "clientEmail": "ashikur.rahman.user3@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000045",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - Padma",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000037"),
    "paymentCode": "PAY-2026-0814-037",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000046"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000a"),
    "amount": 15939,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXDZAZCEX6",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90037"
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
    "clientEmail": "tania.sultana.user4@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000046",
    "serviceName": "Executive Conference & Seminar Staging - Padma",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000038"),
    "paymentCode": "PAY-2026-0814-038",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000048"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXN75PFQKU",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90038"
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
    "clientEmail": "mehnaz.tabassum.user6@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000048",
    "serviceName": "Royal Wedding Reception Stage Setup - Sundarban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000039"),
    "paymentCode": "PAY-2026-0814-039",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000049"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "amount": 6376,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXQ58PC6WA",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90039"
    },
    "breakdown": {
      "baseAmount": 6376,
      "gatewayFee": 96,
      "platformCommission": 638,
      "vendorReceivable": 5642
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "golam.rabbani.user7@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000049",
    "serviceName": "Bride & Groom Grand Entry Pathway - Sundarban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000040"),
    "paymentCode": "PAY-2026-0814-040",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000050"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "amount": 19950,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX1RQ2REQS",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90040"
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
    "clientEmail": "farzana.yasmin.user8@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000050",
    "serviceName": "Adult Milestone Birthday & Glam Gala - Sundarban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000041"),
    "paymentCode": "PAY-2026-0814-041",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000051"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000b"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXQ63CANGI",
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
    "clientEmail": "mahmudur.rahman.user9@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000051",
    "serviceName": "Romantic Anniversary & Candlelight Dining - Sundarban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000042"),
    "paymentCode": "PAY-2026-0814-042",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000052"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "amount": 38640,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXMQHWFSNN",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90042"
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
    "clientEmail": "sabrina.mostafa.user10@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000052",
    "serviceName": "Royal Wedding Reception Stage Setup - Kirtankhola",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000043"),
    "paymentCode": "PAY-2026-0814-043",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000053"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "amount": 11760,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXRXFHFSBB",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90043"
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
    "clientEmail": "towhidul.alam.user11@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000053",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - Kirtankhola",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000044"),
    "paymentCode": "PAY-2026-0814-044",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000054"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000c"),
    "amount": 9975,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXWZWO3WW3",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90044"
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
    "clientEmail": "humaira.khatun.user12@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000054",
    "serviceName": "Akika & Naming Ceremony Stage - Kirtankhola",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000045"),
    "paymentCode": "PAY-2026-0814-045",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000056"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "amount": 14700,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXKK3AYMBQ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90045"
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
    "clientEmail": "nusrat.sharmin.user14@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000056",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - Rangpur",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000046"),
    "paymentCode": "PAY-2026-0814-046",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000057"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000073"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "amount": 11550,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX07NWAOX7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90046"
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
    "clientEmail": "imtiaz.hossain.user15@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000057",
    "serviceName": "Bride & Groom Grand Entry Pathway - Rangpur",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000047"),
    "paymentCode": "PAY-2026-0814-047",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000058"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000074"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000d"),
    "amount": 12172,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXFJV8Z0PL",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90047"
    },
    "breakdown": {
      "baseAmount": 12172,
      "gatewayFee": 183,
      "platformCommission": 1217,
      "vendorReceivable": 10772
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "jannatul.ferdous.user16@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000058",
    "serviceName": "Product Launch & Trade Expo Pavilion - Rangpur",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000048"),
    "paymentCode": "PAY-2026-0814-048",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000060"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 17850,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRX4P992HII",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90048"
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
    "clientEmail": "afsana.mimi.user18@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000060",
    "serviceName": "Pastel Baby Shower & Gender Reveal Setup - Brahmaputra",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000049"),
    "paymentCode": "PAY-2026-0814-049",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000061"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 18354,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRX4GUF6A32",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90049"
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
    "clientEmail": "kazi.nazrul.user19@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000061",
    "serviceName": "Akika & Naming Ceremony Stage - Brahmaputra",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000050"),
    "paymentCode": "PAY-2026-0814-050",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000062"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000078"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 31500,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXR0IKJWPW",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90050"
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
    "clientEmail": "sumaiya.akter.user20@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000062",
    "serviceName": "Religious & Cultural Festival Pavilion - Brahmaputra",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000051"),
    "paymentCode": "PAY-2026-0814-051",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000063"),
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 7980,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXSPHB30LY",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90051"
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
    "clientEmail": "istiakrifat001@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000063",
    "serviceName": "Rooftop Party Canopy & Fairy Light Sky - Brahmaputra",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000052"),
    "paymentCode": "PAY-2026-0814-052",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000064"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000e"),
    "amount": 4830,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXG9LW3L5I",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90052"
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
    "clientEmail": "tahmidur.rahman.user1@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000064",
    "serviceName": "Drawing Room & Balcony Aesthetic Makeover - Brahmaputra",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000053"),
    "paymentCode": "PAY-2026-0814-053",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000065"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXE2JVEV7L",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90053"
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
    "clientEmail": "shamima.nasrin.user2@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000065",
    "serviceName": "Royal Wedding Reception Stage Setup - Moynamoti",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000054"),
    "paymentCode": "PAY-2026-0814-054",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000066"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "amount": 11550,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXSWNX50HA",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90054"
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
    "clientEmail": "ashikur.rahman.user3@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000066",
    "serviceName": "Bride & Groom Grand Entry Pathway - Moynamoti",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000055"),
    "paymentCode": "PAY-2026-0814-055",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000067"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "amount": 6955,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXMDF1CEIC",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90055"
    },
    "breakdown": {
      "baseAmount": 6955,
      "gatewayFee": 104,
      "platformCommission": 696,
      "vendorReceivable": 6155
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "tania.sultana.user4@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000067",
    "serviceName": "Romantic Engagement & Ring Ceremony Decor - Moynamoti",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000056"),
    "paymentCode": "PAY-2026-0814-056",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000068"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "amount": 8925,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRX1HD09NZM",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90056"
    },
    "breakdown": {
      "baseAmount": 8925,
      "gatewayFee": 134,
      "platformCommission": 893,
      "vendorReceivable": 7898
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 8925,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "clientEmail": "shakib.al.hasan.user5@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000068",
    "serviceName": "Custom Neon Signs & Marquee Letter Rental - Moynamoti",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000057"),
    "paymentCode": "PAY-2026-0814-057",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000069"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b8800000f"),
    "amount": 15750,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXWRXX9378",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90057"
    },
    "breakdown": {
      "baseAmount": 15750,
      "gatewayFee": 236,
      "platformCommission": 1575,
      "vendorReceivable": 13939
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "mehnaz.tabassum.user6@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000069",
    "serviceName": "Special Effects - Cold Pyro & Dry Ice Low Fog - Moynamoti",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000058"),
    "paymentCode": "PAY-2026-0814-058",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000070"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 31878,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXYYHA6DNI",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90058"
    },
    "breakdown": {
      "baseAmount": 31878,
      "gatewayFee": 478,
      "platformCommission": 3188,
      "vendorReceivable": 28212
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "golam.rabbani.user7@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000070",
    "serviceName": "Executive Conference & Seminar Staging - Urban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000059"),
    "paymentCode": "PAY-2026-0814-059",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000071"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 15540,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXWLOVER1P",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90059"
    },
    "breakdown": {
      "baseAmount": 15540,
      "gatewayFee": 233,
      "platformCommission": 1554,
      "vendorReceivable": 13753
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "farzana.yasmin.user8@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000071",
    "serviceName": "Gala & Annual Award Night Stage Setup - Urban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000060"),
    "paymentCode": "PAY-2026-0814-060",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000072"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 22050,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX7XS5RLJF",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90060"
    },
    "breakdown": {
      "baseAmount": 22050,
      "gatewayFee": 331,
      "platformCommission": 2205,
      "vendorReceivable": 19514
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "mahmudur.rahman.user9@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000072",
    "serviceName": "Product Launch & Trade Expo Pavilion - Urban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000061"),
    "paymentCode": "PAY-2026-0814-061",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000074"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006f"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000010"),
    "amount": 9975,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXCCKCJG4W",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90061"
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
    "clientEmail": "towhidul.alam.user11@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000074",
    "serviceName": "Adult Milestone Birthday & Glam Gala - Urban",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000062"),
    "paymentCode": "PAY-2026-0814-062",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000075"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000070"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "amount": 21000,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXG82JRX3M",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90062"
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
    "clientEmail": "humaira.khatun.user12@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000075",
    "serviceName": "Royal Wedding Reception Stage Setup - Velvet",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000063"),
    "paymentCode": "PAY-2026-0814-063",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000076"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000071"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "amount": 8114,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXZ0N0A9G0",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90063"
    },
    "breakdown": {
      "baseAmount": 8114,
      "gatewayFee": 122,
      "platformCommission": 811,
      "vendorReceivable": 7181
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "rashedul.islam.user13@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000076",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - Velvet",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000064"),
    "paymentCode": "PAY-2026-0814-064",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000077"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000072"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "amount": 23100,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXHY1UUXZ7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90064"
    },
    "breakdown": {
      "baseAmount": 23100,
      "gatewayFee": 347,
      "platformCommission": 2310,
      "vendorReceivable": 20443
    },
    "status": "refunded",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": true,
      "refundAmount": 23100,
      "refundReason": "Client requested cancellation due to venue schedule change.",
      "refundedAt": new Date("2026-08-14T12:00:00.000Z")
    },
    "clientEmail": "nusrat.sharmin.user14@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000077",
    "serviceName": "Bride & Groom Grand Entry Pathway - Velvet",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000065"),
    "paymentCode": "PAY-2026-0814-065",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000079"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000074"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000011"),
    "amount": 13524,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXUOQRJXT5",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90065"
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
    "clientEmail": "jannatul.ferdous.user16@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000079",
    "serviceName": "Spotlights & Ambient Event Lighting Setup - Velvet",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000066"),
    "paymentCode": "PAY-2026-0814-066",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000080"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000075"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 15750,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXPNC6A9H7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90066"
    },
    "breakdown": {
      "baseAmount": 15750,
      "gatewayFee": 236,
      "platformCommission": 1575,
      "vendorReceivable": 13939
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "zahidul.karim.user17@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000080",
    "serviceName": "Kids Themed Fantasy Birthday Setup - Balloon",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000067"),
    "paymentCode": "PAY-2026-0814-067",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000081"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000076"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 7980,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXV3J4L7UJ",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90067"
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
    "clientEmail": "afsana.mimi.user18@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000081",
    "serviceName": "Adult Milestone Birthday & Glam Gala - Balloon",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000068"),
    "paymentCode": "PAY-2026-0814-068",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000082"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000077"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 8211,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXX0BBHSV1",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90068"
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
    "clientEmail": "kazi.nazrul.user19@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000082",
    "serviceName": "1st Birthday Little Prince / Princess Setup - Balloon",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000069"),
    "paymentCode": "PAY-2026-0814-069",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000084"),
    "customerId": new ObjectId("6a7f2e0aaefae1aa7d90185b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000012"),
    "amount": 6300,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXNDUVHBJ9",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90069"
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
    "clientEmail": "istiakrifat001@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000084",
    "serviceName": "Surprise Room Makeover with Balloons & Candles - Balloon",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000070"),
    "paymentCode": "PAY-2026-0814-070",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000085"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000065"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "amount": 4106,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRXEOREXMSL",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90070"
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
    "clientEmail": "tahmidur.rahman.user1@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000085",
    "serviceName": "Custom Neon Signs & Marquee Letter Rental - Nocturne",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000071"),
    "paymentCode": "PAY-2026-0814-071",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000086"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000066"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "amount": 4410,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXVOAV1QF3",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90071"
    },
    "breakdown": {
      "baseAmount": 4410,
      "gatewayFee": 66,
      "platformCommission": 441,
      "vendorReceivable": 3903
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "shamima.nasrin.user2@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000086",
    "serviceName": "Spotlights & Ambient Event Lighting Setup - Nocturne",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000072"),
    "paymentCode": "PAY-2026-0814-072",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000087"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000067"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "amount": 15750,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXB3XQYEXK",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90072"
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
    "clientEmail": "ashikur.rahman.user3@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000087",
    "serviceName": "Special Effects - Cold Pyro & Dry Ice Low Fog - Nocturne",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000073"),
    "paymentCode": "PAY-2026-0814-073",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000088"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000068"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "amount": 19320,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXL7PMS89Y",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90073"
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
    "clientEmail": "tania.sultana.user4@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000088",
    "serviceName": "360 Video Booth & Instant Photo Booth - Nocturne",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000074"),
    "paymentCode": "PAY-2026-0814-074",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000089"),
    "customerId": new ObjectId("66be18a1f2c4a91b88000069"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000013"),
    "amount": 34650,
    "currency": "BDT",
    "paymentType": "full_payment",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXR9NS535Z",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90074"
    },
    "breakdown": {
      "baseAmount": 34650,
      "gatewayFee": 520,
      "platformCommission": 3465,
      "vendorReceivable": 30665
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "shakib.al.hasan.user5@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000089",
    "serviceName": "Executive Conference & Seminar Staging - Nocturne",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000075"),
    "paymentCode": "PAY-2026-0814-075",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000090"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006a"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 11760,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bkash",
    "gatewayDetails": {
      "gateway": "bKash",
      "transactionId": "TRX6Z7SW2JK",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BKASH_90075"
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
    "clientEmail": "mehnaz.tabassum.user6@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000090",
    "serviceName": "Vibrant Gaye Holud & Mehendi Canopy - Heritage",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000076"),
    "paymentCode": "PAY-2026-0814-076",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000091"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006b"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 10626,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "nagad",
    "gatewayDetails": {
      "gateway": "Nagad",
      "transactionId": "TRXTZ2UQZZ7",
      "gatewayResponseCode": "0000",
      "valId": "VAL_NAGAD_90076"
    },
    "breakdown": {
      "baseAmount": 10626,
      "gatewayFee": 159,
      "platformCommission": 1063,
      "vendorReceivable": 9404
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "golam.rabbani.user7@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000091",
    "serviceName": "Bride & Groom Grand Entry Pathway - Heritage",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000077"),
    "paymentCode": "PAY-2026-0814-077",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000092"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006c"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 12600,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "sslcommerz",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXVP6NI8SD",
      "gatewayResponseCode": "0000",
      "valId": "VAL_SSLCOMMERZ_90077"
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
    "clientEmail": "farzana.yasmin.user8@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000092",
    "serviceName": "Romantic Engagement & Ring Ceremony Decor - Heritage",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000078"),
    "paymentCode": "PAY-2026-0814-078",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000093"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006d"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 9975,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "bank_transfer",
    "gatewayDetails": {
      "gateway": "SSLCommerz",
      "transactionId": "TRXZCRZM7E4",
      "gatewayResponseCode": "0000",
      "valId": "VAL_BANK_TRANSFER_90078"
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
    "clientEmail": "mahmudur.rahman.user9@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000093",
    "serviceName": "Akika & Naming Ceremony Stage - Heritage",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  },
  {
    "_id": new ObjectId("66be18a6f2c4a91b88000079"),
    "paymentCode": "PAY-2026-0814-079",
    "bookingId": new ObjectId("66be18a5f2c4a91b88000094"),
    "customerId": new ObjectId("66be18a1f2c4a91b8800006e"),
    "decoratorId": new ObjectId("66be18a2f2c4a91b88000014"),
    "amount": 8694,
    "currency": "BDT",
    "paymentType": "advance_deposit",
    "paymentMethod": "stripe",
    "gatewayDetails": {
      "gateway": "Stripe",
      "transactionId": "TRXFCXEQ1Z3",
      "gatewayResponseCode": "0000",
      "valId": "VAL_STRIPE_90079"
    },
    "breakdown": {
      "baseAmount": 8694,
      "gatewayFee": 130,
      "platformCommission": 869,
      "vendorReceivable": 7695
    },
    "status": "completed",
    "paidAt": new Date("2026-08-14T10:30:00.000Z"),
    "refundDetails": {
      "isRefunded": false,
      "refundAmount": 0,
      "refundReason": null,
      "refundedAt": null
    },
    "clientEmail": "sabrina.mostafa.user10@gmail.com",
    "bookingID": "66be18a5f2c4a91b88000094",
    "serviceName": "Religious & Cultural Festival Pavilion - Heritage",
    "createdAt": new Date("2026-08-14T10:00:00.000Z"),
    "updatedAt": new Date("2026-08-14T10:00:00.000Z")
  }
];

module.exports = { paymentsData };
