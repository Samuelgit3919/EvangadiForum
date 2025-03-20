const mysql2 = require("mysql2");


const dbConn = mysql2.createPool({
  user: "gedion",
  database: "evangadi-forum",
  password: "1234512",
  connectionLimit: 10,
});

// dbConn.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to the database:", err.message);
//   } else {
//     // console.log("Connected to the database.");
//     connection.release();
//   }
// });

module.exports=dbConn.promise();