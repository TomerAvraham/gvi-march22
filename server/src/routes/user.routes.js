const express = require("express");
const router = express.Router();
const catchAsyncError = require("../errors/catchAsyncError");
const userController = require("../controllers/user.controller");

// Get all users by specific role
router.get("/role/all", catchAsyncError(userController.getAllUsersByRole));
// Get one user by id
router.get("/getOne/:userId", catchAsyncError(userController.getOneUserById));
// Delete one user by id
router.delete(
  "/deleteOne/:userId",
  catchAsyncError(userController.deleteOneUserById)
);
router.put(
  "/update",
  catchAsyncError(userController.putUpdateInformationInUser)
);

// Get User By ID
router.get("/userByID/:id", catchAsyncError(userController.getUserById));

module.exports = router;
