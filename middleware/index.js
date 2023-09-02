const sessionMiddleware = require("./sessionMiddleware");

module.exports = (app) => {
  app.use(sessionMiddleware);
};
