const express = require("express");
const User = require("../models/User");

const {
  ensureAuthenticated,
  ensureAdmin,
} = require("../middleware/authMiddleware");
const router = express.Router();

// Admin Dashboard
router.get("/admin", ensureAuthenticated, ensureAdmin, (req, res) => {
  res.render("admin", { title: "Admin Dashboard" });
});

// Approve Users
router.get(
  "/admin/approve-users",
  ensureAuthenticated,
  ensureAdmin,
  async (req, res, next) => {
    try {
      const usersToApprove = await User.find({ isApproved: false });
      console.log("USers to approve: ", usersToApprove);
      res.render("admin/approve-users", {
        title: "Approve Users",
        users: usersToApprove,
      });
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
);

// Approve a user
router.post(
  "/admin/approve-user/:id",
  ensureAuthenticated,
  ensureAdmin,
  async (req, res, next) => {
    try {
      await User.findByIdAndUpdate(req.params.id, { isApproved: true });
      req.flash("success_msg", "User approved successfully");
      res.redirect("/admin/approve-users");
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
);

// Deny a user
router.post(
  "/admin/deny-user/:id",
  ensureAuthenticated,
  ensureAdmin,
  async (req, res, next) => {
    try {
      // You might want to do more than just remove them, depending on your requirements.
      await User.findByIdAndRemove(req.params.id);
      req.flash("success_msg", "User denied and removed");
      res.redirect("/admin/approve-users");
    } catch (err) {
      console.error(err);
      next(err);
    }
  },
);

// Edit Users
router.get(
  "/admin/edit-users",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/edit-users", { title: "Edit Users" });
  },
);

// Edit Privileges
router.get(
  "/admin/edit-privileges",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/edit-privileges", { title: "Edit Privileges" });
  },
);

// Add Debts
router.get("/admin/add-debts", ensureAuthenticated, ensureAdmin, (req, res) => {
  res.render("admin/add-debts", { title: "Add Debts" });
});

// Add Expenses
router.get(
  "/admin/add-expenses",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/add-expenses", { title: "Add Expenses" });
  },
);

// Add Investments
router.get(
  "/admin/add-investments",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/add-investments", { title: "Add Investments" });
  },
);

// User Activity Logs
router.get(
  "/admin/user-activity",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/user-activity", { title: "User Activity Logs" });
  },
);

// Data Analytics
router.get(
  "/admin/data-analytics",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/data-analytics", { title: "Data Analytics" });
  },
);

// Notifications
router.get(
  "/admin/notifications",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/notifications", { title: "Notifications" });
  },
);

// System Settings
router.get(
  "/admin/system-settings",
  ensureAuthenticated,
  ensureAdmin,
  (req, res) => {
    res.render("admin/system-settings", { title: "System Settings" });
  },
);

module.exports = router;
