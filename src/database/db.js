const Sequelize = require("sequelize");

const connection = new Sequelize("postgres://admin:PrQSJ4dYNdE5WaTIbvcHWmNYc1rFbVFz@dpg-c9su68fd17cd03l5igf0-a.oregon-postgres.render.com/dbblue", {
  dialect: "postgres",
  dialectOpitions: {  ssl: {
    require: true,
    rejectUnauthorized: false,
},
   
  },
});

module.exports = connection;
