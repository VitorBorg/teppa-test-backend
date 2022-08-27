const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

//app.use("/nota", require("./presentation/routes/notaRoute.ts"));
//app.use("/user", require("./route/userRoute.ts"));
app.use("/", require("./presentation/routes/index.ts"));

console.log("Server started!");

app.listen(8098);
