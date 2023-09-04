function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  req.flash("error", "You must be logged in to access this resource");
  res.redirect("/login");
}

function ensureAdmin(req, res, next) {
  if (
    req.session.user &&
    req.session.user.roles &&
    req.session.user.roles.includes("isAdmin")
  ) {
    return next();
  }
  req.flash("error", "You do not have permission to access this resource");
  res.redirect("/dashboard");
}

module.exports = {
  ensureAuthenticated,
  ensureAdmin,
};
