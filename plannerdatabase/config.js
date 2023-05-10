const Sequelize = require('sequelize');
const config = new Sequelize("plannerapp", "root", "Ilovemarley", {dialect: 'mariadb'});

module.exports = config;

