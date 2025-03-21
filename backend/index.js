const express = require('express')
const app = express();
const port = 5500


// db Connection 
const dbConnection = require('./db/dbConfig');

// User Routes middleware file
const userRouter = require("./routes/userRoute");

//json middleware to extract json data
app.use(express.json())

// User Routes middleware
app.use("/api/users", userRouter )

// Question Routes middleware ??
const questionRouter = require("./routes/questionRoute");
app.use("/api/questions", questionRouter);

// Answer Routes middleware ??
const answerRouter = require("./routes/answerRoute");

// Middleware for answer routes
app.use("/api/answers", answerRouter);


async function start (){
    try {
        const result = await dbConnection.execute("select 'test' ")
        app.listen(port)
        console.log("database connection established")
        console.log(`listening on ${port}`)
    } catch (error) {
        console.log(error.message);
    }
}
start()



