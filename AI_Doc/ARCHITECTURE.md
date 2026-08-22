# StyleDecor Server — Architecture, Database & REST API Specification

> **Target Audience**: AI Agents, Backend Engineers, Cloud DevOps Specialists  
> **Last Updated**: August 2026  
> **Repository Location**: `E:\Projects\Style Decore\StyleDecor_Server`  
> **Live Production Base URL**: `https://style-decor-server-woad.vercel.app`

---

## 1. System Architecture & Entrypoints

`StyleDecor_Server` is built using **Node.js, Express 5, and MongoDB Atlas (Native Node Driver 7)**, designed for dual-mode execution (Traditional Node Server and Vercel Serverless Function).

```
StyleDecor_Server/
├── config/
│   ├── db.js                 # MongoDB connection pool & DNS fallback
│   └── firebase.js           # Firebase Admin SDK with base64 env fallback
├── controllers/              # RESTful resource business logic controllers
│   ├── agentController.js
│   ├── bookingController.js
│   ├── categoryController.js
│   ├── decoratorController.js
│   ├── paymentController.js
│   ├── reviewController.js
│   ├── serviceController.js
│   └── userController.js
├── data/                     # Comprehensive seed datasets (8 collections)
├── middleware/
│   └── authMiddleware.js     # verifyFbToken, verifyAdmin, role guards
├── models/
│   └── collections.js        # Named MongoDB collection pointers
├── routes/                   # Express modular route definitions
├── scripts/
│   └── seeder.js             # High-speed database population script
├── AI_Doc/                   # Architectural & database documentation
├── app.js                    # Express application instance & route mounting
├── server.js                 # Local dev server runner (app.listen)
├── index.js                  # Vercel Serverless root handler
├── api/index.js              # Standard Vercel Serverless entrypoint
└── vercel.json               # Serverless edge routing configuration
```

---

## 2. Database Design & Collection Schemas (8 Core Collections)

The database `StyleDecorDB` comprises **8 unified collections**:

### 2.1 `categories` Collection
- **Purpose**: Master catalog taxonomy and event service categories.
- **Fields**: `name`, `slug`, `status` (`active`/`inactive`), `order`, `description`, `subCategories` array (`id`, `name`, `slug`, `status`, `order`), `createdAt`, `updatedAt`.

### 2.2 `users` Collection (120 Seed Records)
- **Purpose**: Authenticated users synchronized with Firebase Authentication.
- **Fields**: `uid` (Firebase UID), `name`, `email`, `role` (`customer`, `decorator`, `agent`, `admin`), `photoUrl`, `phone`, `address` (`street`, `city`, `postalCode`), `status` (`active`, `suspended`), `createdAt`, `updatedAt`.

### 2.3 `decorators` Collection (20 Seed Records)
- **Purpose**: Registered Decorator Agency business profiles.
- **Fields**: `userId` (ObjectId ref `users`), `businessName`, `slug`, `tagline`, `about`, `logo`, `coverImage`, `contactInfo` (`phone`, `email`, `website`, `address`, `city`), `serviceAreas` (zones array), `categories` array, `metrics` (`rating`, `reviewCount`, `completedEvents`, `responseRate`, `responseTimeHours`), `verification` (`isVerified`, `tradeLicenseNo`, `verifiedAt`), `socialLinks` (`facebook`, `instagram`), `status` (`active`, `busy`, `on_leave`, `pending`, `suspended`), `featured` (`boolean`), `createdAt`, `updatedAt`.

### 2.4 `services` Collection (97 Seed Records)
- **Purpose**: Decoration packages and tier offerings.
- **Fields**: `decoratorId` (ObjectId ref `decorators`), `title`, `slug`, `category`, `subCategory` (`id`, `name`), `shortDescription`, `fullDescription`, `basePrice`, `discountPrice`, `pricing` (`startingPrice`, `unit`, `depositPercentage`: 40%), `packages` array (`tier`: Standard/Premium/Luxury, `price`, `description`, `features`, `photos`), `specifications` (`setupDurationHours`, `crewSizeRequired`, `indoorOutdoor`, `themeStyle`), `inclusions` array, `exclusions` array, `coverImage`, `images` array, `metrics` (`rating`, `reviewCount`, `bookingCount`), `status` (`active`, `inactive`), `featured` (`boolean`), `createdAt`, `updatedAt`.

### 2.5 `agents` Collection (79 Seed Records)
- **Purpose**: Agency workforce on-site Field Execution Specialists.
- **Fields**: `decoratorId` (ObjectId ref `decorators`), `name`, `email`, `phone`, `photoUrl`, `role` (`Field Execution Specialist`), `craftSpecializations` array (*Stage Architecture, Floral Sculpting, Truss & Lighting*), `assignedZones` array (*Dhanmondi, Gulshan, etc.*), `metrics` (`rating`, `appraisalCount`, `completedAssignments`, `activeWorkload`), `dutyStatus` (`available`, `on_assignment`, `off_duty`, `on_leave`), `badgeTier` (`Master Specialist`, `Senior Specialist`, `Craft Lead`), `createdAt`, `updatedAt`.

### 2.6 `bookings` Collection (94 Seed Records)
- **Purpose**: End-to-end event orders and reservation dossiers.
- **Fields**: `bookingCode` (`BK-XXXXXX`), `customerId` (ObjectId ref `users`), `decoratorId` (ObjectId ref `decorators`), `serviceId` (ObjectId ref `services`), `assignedAgentId` (ObjectId ref `agents`), `serviceSnapshot` (`title`, `tier`, `category`, `selectedPrice`), `eventDetails` (`eventDate`, `startTime`, `endTime`, `venueName`, `venueAddress`, `guestCountEstimate`), `pricingBreakdown` (`packagePrice`, `customAddonsTotal`, `platformFee`, `vatAmount`, `grandTotal`, `depositAmount`: 40%, `paidAmount`, `dueAmount`), `paymentStatus` (`unpaid`, `partially_paid`, `paid`), `status` (`in_draft`, `pending`, `accepted`, `rejected`, `advance_paid`, `preparing`, `on_the_way`, `in_progress`, `completed`, `fully_paid`), `assignedAgent` (`name`, `phone`, `photoUrl`), `createdAt`, `updatedAt`.

### 2.7 `payments` Collection (100 Seed Records)
- **Purpose**: Financial clearing ledger, Escrow holds, and refund audits.
- **Fields**: `paymentCode` (`PAY-XXXXXX`), `bookingId` (ObjectId ref `bookings`), `customerId` (ObjectId ref `users`), `decoratorId` (ObjectId ref `decorators`), `amount`, `paymentType` (`advance_deposit`: 40%, `full_settlement`: 60%, `custom_addon`), `paymentMethod` (`bkash`, `nagad`, `rocket`, `card_stripe`, `bank_transfer`), `transactionId` (`TRX-XXXXXX`), `escrowStatus` (`held_in_escrow`, `released_to_vendor`, `refunded_to_customer`), `accountingBreakdown` (`grossAmount`, `platformCommission`: 10%, `gatewayFee`: 1.5%, `vendorReceivable`: 88.5%), `status` (`cleared`, `pending`, `failed`, `refunded`), `createdAt`.

### 2.8 `reviews` Collection (80 Seed Records)
- **Purpose**: Unified verified customer appraisals with mandatory specialist attribution.
- **Fields**: `bookingId` (ObjectId ref `bookings`), `customerId` (ObjectId ref `users`), `customerName`, `customerEmail`, `customerPhotoUrl`, `decoratorId` (ObjectId ref `decorators`), `serviceId` (ObjectId ref `services`), `agentId` (ObjectId ref `agents`), `agentName` (String), `rating` (Integer 1–5), `comment` (String), `images` array, `vendorReply` (`reply`, `repliedAt`), `status` (`published`, `hidden`, `flagged`, `archived`), `createdAt`, `updatedAt`.

---

## 3. RESTful API Endpoint Reference

### 3.1 Public Endpoints
- `GET /` $\rightarrow$ Root health check (`"StyleDecor Is Running..!"`).
- `GET /services` $\rightarrow$ Filtered catalog (search, category, city, minPrice, maxPrice, sort, pagination).
- `GET /services/latest` $\rightarrow$ 8 latest decoration packages.
- `GET /services/toprated` $\rightarrow$ Highest rated packages.
- `GET /services/id/:id` $\rightarrow$ Full service package dossier with populated decorator agency.
- `GET /categories` $\rightarrow$ Active categories and subcategories taxonomy.
- `GET /decorators` $\rightarrow$ Verified decorator agencies directory.
- `GET /decorators/toprated` $\rightarrow$ Top rated decorator agencies.
- `GET /decorators/id/:id` $\rightarrow$ Public agency profile.
- `GET /reviews/featured` $\rightarrow$ Top-rated landing page testimonials.
- `GET /reviews/service/:serviceId` $\rightarrow$ Reviews for a specific package.
- `GET /reviews/decorator/:decoratorId` $\rightarrow$ Reviews for a decorator agency.
- `GET /reviews/agent/:agentId` $\rightarrow$ Appraisals for a field specialist.

### 3.2 Customer Endpoints (`verifyFbToken`)
- `POST /bookings` $\rightarrow$ Create a new event decoration reservation.
- `GET /bookings/customer/:customerId` $\rightarrow$ Customer's booking history.
- `GET /bookings/id/:id` $\rightarrow$ Booking dossier details.
- `PATCH /bookings/:id` $\rightarrow$ Modify booking schedule or venue details.
- `DELETE /bookings/:id` $\rightarrow$ Cancel booking.
- `POST /payments` $\rightarrow$ Process deposit or final balance payment.
- `GET /payments/customer/:customerId` $\rightarrow$ Customer transaction receipts.
- `POST /reviews` $\rightarrow$ Submit verified review for completed booking (populates `agentId` & `agentName`).
- `GET /reviews/customer/my-reviews` $\rightarrow$ Customer's submitted reviews.
- `PATCH /reviews/customer/:id` $\rightarrow$ Update rating score or comment.
- `DELETE /reviews/customer/:id` $\rightarrow$ Delete submitted review.

### 3.3 Decorator Agency Endpoints (`verifyFbToken`)
- `GET /decorators/me` $\rightarrow$ Current authenticated agency profile.
- `PATCH /decorators/:id` $\rightarrow$ Update branding, cover, contact, zones, status (`active`, `busy`, `on_leave`).
- `GET /bookings/decorator/:decoratorId` $\rightarrow$ Agency orders pipeline.
- `PATCH /bookings/:id/assign` $\rightarrow$ Assign Field Specialist to booking (`agentId`).
- `PATCH /bookings/:id/status` $\rightarrow$ Advance booking lifecycle (`preparing` $\rightarrow$ `completed`).
- `GET /agents/decorator/:decoratorId` $\rightarrow$ Agency workforce roster.
- `POST /agents` $\rightarrow$ Hire a new field specialist.
- `PATCH /agents/:id` $\rightarrow$ Update specialist craft and contact.
- `DELETE /agents/:id` $\rightarrow$ Remove specialist from roster.
- `GET /payments/decorator/:decoratorId` $\rightarrow$ Agency revenue & receivable ledger (88.5%).
- `GET /reviews/agency/my-reviews` $\rightarrow$ Agency customer reviews stream.
- `PATCH /reviews/:id/reply` $\rightarrow$ Post official vendor reply.
- `DELETE /reviews/:id/reply` $\rightarrow$ Remove vendor reply.

### 3.4 Field Agent Endpoints (`verifyFbToken`)
- `GET /agents/me` $\rightarrow$ Agent profile and duty status.
- `PATCH /agents/:id/status` $\rightarrow$ Update duty status (`available`, `on_assignment`, `off_duty`, `on_leave`).
- `GET /bookings/agent/:agentId` $\rightarrow$ Assigned events calendar.
- `GET /reviews/agent/my-reviews` $\rightarrow$ Client appraisals and rating breakdown.

### 3.5 Admin Governance Endpoints (`verifyFbToken`, `verifyAdmin`)
- `GET /users` $\rightarrow$ Platform user management.
- `PATCH /users/:id/role` $\rightarrow$ Elevate user role (`customer`, `decorator`, `agent`, `admin`).
- `POST /categories` & `PATCH /categories/:id` $\rightarrow$ Taxonomy management.
- `PATCH /decorators/:id/status` $\rightarrow$ Approve or suspend agency profile.
- `GET /bookings/admin/all` $\rightarrow$ Global bookings master log.
- `GET /payments/stats` $\rightarrow$ Platform revenue (10% commission), GMV volume, vendor receivables.
- `POST /payments/:id/refund` $\rightarrow$ Process dispute settlement refund.
- `GET /reviews` $\rightarrow$ Global review moderation stream (status: `published`, `hidden`, `flagged`, `archived`).
- `PATCH /reviews/:id/status` $\rightarrow$ Moderate review visibility.
- `DELETE /reviews/:id` $\rightarrow$ Permanent removal with automatic rating sync.

---

## 4. Financial Escrow Calculation Model

Every payment transaction strictly calculates and stores:
$$\text{Platform Commission (10\%)} = \text{Gross Amount} \times 0.10$$
$$\text{Gateway Processing Fee (1.5\%)} = \text{Gross Amount} \times 0.015$$
$$\text{Vendor Net Payable (88.5\%)} = \text{Gross Amount} - (\text{Commission} + \text{Gateway Fee})$$

---

## 5. Seed Credentials & Test Accounts

- **Universal Password**: `"Aa@1234"` for all seeded Firebase accounts.

| Role | Name | Email | Associated ID |
| :--- | :--- | :--- | :--- |
| **Admin** | System Administrator | `admin@styledecor.com` | `66be18a1f2c4a91b88000001` |
| **Decorator** | DreamCraft Events & Decors | `tanvir.ahmed.dec1@styledecor.com` | `66be18a2f2c4a91b88000001` |
| **Agent** | Israt Jahan (Specialist) | `israt.jahan.agent1@styledecor.com` | `66be18a4f2c4a91b88000001` |
| **Customer** | Tahmidur Rahman | `customer1@styledecor.com` | `66be18a1f2c4a91b88000051` |

---

## 6. Deployment & Serverless Configuration

The server runs on Vercel using [`vercel.json`](file:///E:/Projects/Style%20Decore/StyleDecor_Server/vercel.json):
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ]
}
```

### Required Environment Variables
- `MONGODB_USER`: MongoDB Atlas database username.
- `MONGODB_PASS`: MongoDB Atlas database password.
- `FB_SERVICE_KEY`: Base64 encoded string of Firebase Admin Service Account JSON.
- `STRIPE_SECRET_KEY`: Stripe API secret key.
