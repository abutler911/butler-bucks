function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  req.flash("error", "You must be logged in to access this resource");
  res.redirect("/login");
}

module.exports = {
  ensureAuthenticated,
};
