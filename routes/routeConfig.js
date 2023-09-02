const mainRoutes = require("./routes");
const dashboardRoute = require("./routes/dashboard");

module.exports = (app) => {
  app.use("/", mainRoutes);
  app.use("/", dashboardRoute);
};
