const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/students", (req, res) => {
  const students = [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Smith", age: 22 },
    { id: 3, name: "Michael Johnson", age: 21 },
  ];

  res.json(students);
});
app.listen(3000, () => {
  console.log("server listening");
});
