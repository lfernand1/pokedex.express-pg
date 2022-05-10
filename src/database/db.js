const Sequelize = require("sequelize");

const connection = new Sequelize(
  "postgres://admin:JbBnagywsUCvcOsq3x3hM5bEmA3rAxAb@dpg-c9tgenc41ls850clfv2g-a.oregon-postgres.render.com/pokemon_6wtz",

  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnautorized: false,
      },
    },
  }
);

module.exports = connection;


