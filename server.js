const fastify = require("fastify");
const mongoose = require("mongoose");
const findConfig = require("find-config");
const User = require("./models/User");

require("dotenv").config({
  path: require("find-config")(".env"),
});
const app = fastify();

const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/users";

try {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
} catch (error) {
  console.error(error);
}
app.get("/api/users", (request, reply) => {
  User.find({}, (err, users) => {
    if (!err) {
      reply.send(users);
    } else {
      reply.send({ error: err });
    }
  });
});
app.get("/api/user/:userId", (request, reply) => {
  var userId = request.params.userId;
  User.findById(userId, (err, user) => {
    if (!err) {
      reply.send(user);
    } else {
      reply.send({ error: err });
    }
  });
});
app.post("/api/user/new", (request, reply) => {
  var user = request.body;
  User.create(user, (err, user) => {
    if (!err) {
      reply.send(user);
    } else {
      reply.send({ error: err });
    }
  });
});
app.put("/api/user/:userId", (request, reply) => {
  var userId = request.params.userId;
  var newUserEdit = request.body;
  User.findById(userId, (err, user) => {
    if (!err) {
      user.age = newUserEdit.age;
      user.name = newUserEdit.name;
      user.email = newUserEdit.email;
      user.save((er, savedUser) => {
        if (!er) {
          reply.send(savedUser);
        } else {
          reply.send(er);
        }
      });
    } else {
      reply.send({ error: err });
    }
  });
});
app.delete("/api/user/:userId", (request, reply) => {
  var userId = request.params.userId;
  User.findById(userId, (err, user) => {
    if (!err) {
      user.remove((er) => {
        if (!er) {
          reply.send("USER DELETED");
        } else {
          reply.send({ error: er });
        }
      });
    } else {
      reply.send({ error: err });
    }
  });
});
// Start the server
app.listen(process.env.PORT, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
