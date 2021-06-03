const express = require("express");

const app = express();

//Handler function - Routing :
app.get("/", (req, res) => {
  res.send("Hello :)");
});

//Addition using params
app.get("/add/:valueA/:valueB", (req, res) => {
  const valueA = parseInt(req.params.valueA);
  console.log(req.params);
  const valueB = parseInt(req.params.valueB);
  const sum = valueA + valueB;
  res.send(`The sum of the two numbers is ${sum}`); //or using res.send(sum.toString());
});

//Addition using query string
app.get("/add", (req, res) => {
  const valueA = parseInt(req.query.valueA);
  console.log(req.query);
  const valueB = parseInt(req.query.valueB);
  const sum = valueA + valueB;
  res.send(`The sum of the two numbers is ${sum}`);
});

//Substraction
app.get("/substract", (req, res) => {
  const valueA = parseInt(req.query.valueA);
  console.log(req.query);
  const valueB = parseInt(req.query.valueB);
  const difference = valueA - valueB;
  res.send(`The substraction of the two numbers is ${difference}`);
});

//Multiplication
app.get("/multiply", (req, res) => {
  const valueA = parseInt(req.query.valueA);
  console.log(req.query);
  const valueB = parseInt(req.query.valueB);
  const multiply = valueA * valueB;
  res.send(`The multiplication of the two numbers is ${multiply}`);
});

//Division
app.get("/divide", (req, res) => {
  const valueA = parseInt(req.query.valueA);
  console.log(req.query);
  const valueB = parseInt(req.query.valueB);
  const division = valueA / valueB;
  res.send(`The multiplication of the two numbers is ${division}`);
});

// http://localhost:3000/add?value1=10&value2=2
// http://localhost:3000/substract?value1=10&value2=2
// http://localhost:3000/multiply?value1=10&value2=2
// http://localhost:3000/divide?value1=10&value2=2

app.listen(3000, () => console.log("Server is up and running")); //at the port 3000
