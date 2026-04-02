const express = require("express");
const ctrl = require("../controllers/dashboard.controller");
const { verifyToken } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/", verifyToken, ctrl.getSummary);
router.get("/category", verifyToken, ctrl.getCategory);
router.get("/monthly", verifyToken, ctrl.getMonthly);

module.exports = router;
