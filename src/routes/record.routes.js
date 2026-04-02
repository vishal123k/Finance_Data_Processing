const express = require("express");
const ctrl = require("../controllers/record.controller");
const { verifyToken } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

const router = express.Router();

router.post("/", verifyToken, allowRoles("admin"), ctrl.createRecord);
router.get("/", verifyToken, ctrl.getRecords);
router.put("/:id", verifyToken, allowRoles("admin"), ctrl.updateRecord);
router.delete("/:id", verifyToken, allowRoles("admin"), ctrl.deleteRecord);

module.exports = router;
