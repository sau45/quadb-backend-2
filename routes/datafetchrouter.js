const express = require("express");
const router = express.Router();

const {
  fetchAndSaveData,
 
} = require("../controller/handlegetdata");

// router.post("/", handleCreateUpdate);
router.get("/", fetchAndSaveData);
// router.put("/:updateId", handleEditUpdateData);

module.exports = router;