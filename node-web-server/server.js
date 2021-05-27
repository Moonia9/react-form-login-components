const express = require("express"); //make sure you load that express file/dependency

const app = express(); //then we execute that code with a function > it returns an express "app" > we invoke the package

//Handler function - Routing :
app.get("/", (req, res) => {
  //console.log(req.headers);
  //when someone makes a GET req to the root path > / > reply with "Hello Express"
  res.send("Hello :)");
});

app.get("/users", (req, res) => {
  res.send("Here is a list of users");
});

app.post("/users", (req, res) => {
  res.send("Here is another user");
});

// app.post("/users", (req, res) => {
//   console.log(req.query);
//   res.send(
//     `here is a list of ${req.query.perPage} of users, page number number`
//   );
// });

app.get("/node", (req, res) => {
  res.send("This is a node handler function");
});

app.get("/migracode", (req, res) => {
  res.send("Heya! I am a MigraCode handler function");
});

app.listen(3000, () => console.log("Server is up and running")); //at the port 3000
