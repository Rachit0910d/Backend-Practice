require("dotenv").config();
const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8001;

// Middleware-plugins that run before the request is processed by the route handler
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

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
  return res.json(users);
});

// GET /api/users/1 - get the user with id 1
// GET /api/users/2 - get the user with id 2
// Dynamic Routing - /api/users/:id
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
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

    return res.json({ status: "success", id: users.length });
  });
});

// PATCH /api/users/1 - edit the user with id 1
app.patch("/api/users/:id", (req, res) => {
  // TODO: update user detail with id
  const userId = Number(req.params.id);
  const updates = req.body;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  Object.keys(updates).forEach((key) => {
    if (user.hasOwnProperty(key)) {
      user[key] = updates[key];
    }
  });

  return res.json({ message: "user updateed successfully", user });
});

// DELETE /api/user/1 - delete the user with id 1
app.delete("/api/users/:id", (req, res) => {

});

// grouping for those who have the same path ie: /api/users/:id
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // TODO: delete the user with id
    return res.json({ status: "Pending" });
  });

app.listen(process.env.PORT, () => console.log(`Server Started at the Port: ${PORT}`));
