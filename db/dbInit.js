const Sequelize = require('sequelize');
const fs = require("fs");

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'models/database.sqlite',
});

const Users = require('../models/Users.js')(sequelize, Sequelize.DataTypes);
const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const users = [
		Users.upsert({ userid: 848611967748014130, username: 'jaytest', usertag: 5817}),
	];
	await Promise.all(users);
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);