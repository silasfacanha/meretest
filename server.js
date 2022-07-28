const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("asajsiajsiajsi");
  res.render("index", { text: "world" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);
app.listen(3000);
