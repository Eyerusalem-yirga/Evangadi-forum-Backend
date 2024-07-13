// Load environment variables from .env file
require("dotenv").config();
const mysql2 = require("mysql2");

// Log environment variables to verify they are loaded correctly
console.log("Environment Variables:");
console.log("USER:", process.env.MYUSER);
console.log("DATABASE:", process.env.DATABASE);
console.log("DBHOST:", process.env.DBHOST);
console.log("PASSWORD:", process.env.PASSWORD);

const dbConnection = mysql2.createPool({
	user: process.env.MYUSER,
	database: process.env.DATABASE,
	host: process.env.DBHOST,
	password: process.env.PASSWORD,
	connectionLimit: 10,
});

dbConnection.execute("SELECT 'test' AS TestColumn", (err, result) => {
	if (err) {
		console.error("Connection Error:", err.message);
	} else {
		console.log("Connection Success:", result);
	}
});

module.exports = dbConnection.promise();
