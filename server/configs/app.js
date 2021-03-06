const dotenv = require("dotenv");

dotenv.config();

const appConfig = {
  env: process.env.APP_ENV || "development",
  expressPort: process.env.EXPRESS_PORT || 4000,
};

module.exports = appConfig;
