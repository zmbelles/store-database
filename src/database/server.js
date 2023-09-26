const express = require("express");
const connectDB = require("./db");

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
