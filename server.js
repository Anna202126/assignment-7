require("dotenv").config();
const cors = require("cors");
const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const apiErrorHandler = require("./utils/apiErrorHandler");

const app = express();
app.use(express.json());

app.use(cors());

// routing
app.use("/auth", require("./router/authRoutes"));
app.use("/todos", require("./router/todosRoutes"));

// catch all routes that is not on the server
app.all("*", (_req, res) => {
  res
    .status(404)
    .json({ message: `Cannot find ${app.request.originalUrl} on the server` });
});

// Global error handler
app.use(apiErrorHandler);

app.listen(process.env.PORT, async () => {
  await dbConnect();
  console.log(`Server up and running on PORT ${process.env.PORT}`);
});
