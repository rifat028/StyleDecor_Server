// ========== Imports ==========
const express = require("express");
const router = express.Router();
const { verifyFbToken, verifyAdmin } = require("../middleware/authMiddleware");
const decoratorController = require("../controllers/decoratorController");

// ========== Decorator Routes ==========

// 1. Static / High-priority Endpoints
router.get("/toprated", decoratorController.getTopRatedDecorators);

// 2. Authenticated Profile Endpoint
router.get("/me", verifyFbToken, decoratorController.getMyDecoratorProfile);

// 3. Named Param Endpoints
router.get("/id/:id", decoratorController.getDecoratorById);

// 4. Query-able List (Public & Admin, with filtering, search, pagination)
router.get("/", decoratorController.getDecorators);

// 5. Create / Apply as Decorator (Authenticated)
router.post("/", verifyFbToken, decoratorController.createDecorator);

// 6. Admin-only: Update verification status, active status, or featured state
router.patch("/:id/status", verifyFbToken, verifyAdmin, decoratorController.updateDecoratorStatus);

// 7. Update Decorator Profile (Self)
router.patch("/:id", verifyFbToken, decoratorController.updateDecorator);

// 8. Admin-only: Delete Decorator Profile
router.delete("/:id", verifyFbToken, verifyAdmin, decoratorController.deleteDecorator);

// 9. Backward Compatibility fallback for /:id
router.get("/:id", decoratorController.getDecoratorById);

module.exports = router;
