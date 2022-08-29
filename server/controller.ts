const express = require("express");
const cors = require("cors");
const middleware = require("./middleware/middleware");

const app = express();

app.use(express.json());
app.use(cors());

app.use(middleware.decodeToken);

app.use("/nota", require("./route/notaRoute.ts"));

console.log("Server started!");

app.listen(8098);
