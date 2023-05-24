require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 5050,
  },
  db: {
    url: process.env.DB_URL || "mongodb://127.0.0.27017/ostadcom",
  },
};

module.exports = dev;
