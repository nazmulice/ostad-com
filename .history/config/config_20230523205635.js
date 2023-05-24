require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT || 5050,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/userDEMO",
  },
};

module.exports = dev;
