const Sequelize = require("sequelize");

const connection = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOpitions: {
    ssl: true,
  },
});

module.exports = connection;
