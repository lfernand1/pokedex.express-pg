const Sequelize = require("sequelize");

const connection = new Sequelize("postgres://admin:JX1fyHEXQZgTils6WGaBCRptDVwQB0Xs@dpg-c9tfhmn9re0h93t4vgm0-a.oregon-postgres.render.com/pokemon_bgxz", {
  dialect: "postgres",
  dialectOpitions: {  ssl: {
    require: true,
    rejectUnauthorized: false,
},
   
  },
});

module.exports = connection;
