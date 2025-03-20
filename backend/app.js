const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5500;
//db conn
const dbConn = require("./DB/dbConfig");



app.use(cors());
//any requset alog with the ride they have to post json data
app.use(express.json())
//user middleware file
const userRoute = require("./Routes/userRoute");
const questionRoute = require("./Routes/questionRoute");

//quetions middleware file
// const userRoute=require("./Routes/userRoute")
app.use("/api/que/", questionRoute);
//answer middleware file
// const userRoute=require("./Routes/userRoute")
app.use("/api/users", userRoute);




async function start() {
  try {
    const result = await dbConn.execute("select 'test'");

    app.listen(PORT);
    console.log("DB is Connected");
    console.log(`You server is runnning at http://localhost:${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
}
start();



  
