const express = require("express");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8001;

//Schema for MongoDB

const userSchema = new mongoose.Schema({
  // Schema defines the structure of the documents in a MongoDB collection
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});
// Model is a wrapper for the schema and provides an interface to interact with the database
const User = mongoose.model("User", userSchema); // Model for MongoDB

// Middleware-plugins that run before the request is processed by the route handler
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use((req, res, next) => {
  // console.log("Middleware 1");
  // req.myUserName = "Rachit saini";

  fs.appendFile(
    "./logs.txt",
    `${Date.now()}: ${req.method}: ${req.ip}: ${req.path} \n`,
    (err, data) => {
      if (err) throw err;
      console.log(data);
      next();
    },
  );
  // return res.json({msg: "Middleware 1"});
});

// app.use((req,res,next) =>{
//   console.log("Middleware 2", req.myUserName);
//   // db queries
//   // credit card info
//   req.creditCardNummber = "0397001700050929"; // this credit card number can be accessed in the route handler as req.creditCardNummber
//   // return res.end("Middleware 2");
//   next();
// })

//Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// RestAPI - JSON

// GET /api/users - List all users
app.get("/api/users", (req, res) => {
  const body = req.body; // Request Body
  if (
    // Validation for required fields
    // if any of the required fields are missing in the request body, return a 400 Bad Request response with an error message
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All field are required" }); // 400 Bad Request
  } else {
    res.setHeader("X-MyName", "Rachit Saini"); // Custom Header -> add X to custom headers
    console.log(req.headers); // Request Headers
    return res.json(users);
  }
});

// GET /api/users/1 - get the user with id 1
// GET /api/users/2 - get the user with id 2
// Dynamic Routing - /api/users/:id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    return res.status(400).json({ msg: "Invalid Id number" });
  }
  return res.json(user);
});

// POST /api/users - create new user
app.post("/api/users", (req, res) => {
  // TODO: create new user
  const body = req.body;

  //first method
  // users.push({
  //   first_name: body.first_name,
  //   last_name: body.last_name,
  //   email: body.email,
  //   gender: body.gender,
  //   job_title: body.job_title
  // })

  //second method
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    if (err) throw err;
    return res.status(201).json({ status: "success", id: users.length });
  });
});

// PATCH /api/users/:id - edit the user with id 1
app.patch("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const updates = req.body;

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // Update only provided fields
  users[userIndex] = {
    ...users[userIndex],
    ...updates,
  };

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) throw err;

    return res.json({
      status: "User updated successfully",
      user: users[userIndex],
    });
  });
});

// DELETE /api/users/1 - delete the user with id 1
app.delete("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  // Remove user
  const deletedUser = users.splice(userIndex, 1);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) throw err;

    return res.json({
      status: "User deleted successfully",
      deletedUser,
    });
  });
});

// grouping for those who have the same path ie: /api/users/:id
app.route("/api/users/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});
// .put((req, res) => {
//   return res.json({ status: "pending" });
// })
// .delete((req, res) => {
//   // TODO: delete the user with id
//   return res.json({ status: "Pending" });
// });

app.listen(process.env.PORT || 4001, () =>
  console.log(`Server Started at the Port: ${process.env.PORT || 4001}`),
);
