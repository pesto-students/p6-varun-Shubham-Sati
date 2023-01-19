const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/users/usersRoutes");
const incomeRoute = require("./routes/income/incomeRoutes");
const expenseRoute = require("./routes/expenses/expenseRoutes");
const accountStatsRoute = require("./routes/accountStatsRoute/accountStatsRoute");

const app = express();

//env
dotenv.config();
// DB connect
dbConnect();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({ msg: "Welcome Expenses tracker API" });
});

// users routes
app.use("/api/users", userRoute);

//account stats
app.use("/", accountStatsRoute);

//income routes
app.use("/api/income", incomeRoute);

//expenses Route
app.use("/api/expenses", expenseRoute);


//Error's middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;
