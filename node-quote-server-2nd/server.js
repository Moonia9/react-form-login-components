const { response } = require("express");
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json"); //this is our "memory" of the server
//console.log(quotes[1].author)

app.get("/", function (request, response) {
  response.send(
    "Moonia's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

//GET - Read all the quotes
app.get("/quotes", function (request, response) {
  console.log(quotes[0]);
  response.send(quotes);
});

//APIs in Node Exercise week 2
//GET - Read/Returns a single quote object (by the position in the array)
app.get("/quotes/:id", function (request, response) {
  const index = parseInt(request.params.id) - 1;
  const quote = quotes[index];
  if (quote) {
    response.send(quote);
  } else {
    response.status(404).send();
  }
  console.log(typeof index);
  response.send(quote);
});

//POST - Create a new quote (add it to the end of the array)
app.post("/quotes", function (request, response) {
  //get the new object
  const quote = {
    quote: request.query.quote,
    author: request.query.author,
  };
  console.log(quote);
  //add it to the quotes array
  quotes.push(quote);
  console.log(quotes.length);
  //return the id for the new quote object
  response.status(201).send({ id: quotes.length });
});

//PUT - Update an existing quote -> I need to specify an id, the thing that I want to update
app.put("/quotes/:id", function (request, response) {
  //get existing quote
  const quote = {
    quote: request.query.quote,
    author: request.query.author,
  };
  //get the index of the existing quote object
  const index = parseInt(request.params.id) - 1;
  //replace quote object at specified index with new one
  const result = quotes.splice(index, 1, quote);
  console.log("removed quote", result);
  //return new quote object
  response.send(quote);
});

//DELETE - Delete one of the quotes

app.delete("/quotes/:id", function (request, response) {
  //get the index of the existing quote object
  const index = parseInt(request.params.id) - 1;
  //replace existing quote item at specified index from array amd replace it with "undefined"
  quotes.splice(index, 1, undefined); //delete one item at index 1 and replace it with undefined
  //return status 204 - no content
  response.status(204).send();
});

//Start our server so that it listens for HTTP requests!
let port = 5001;

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
