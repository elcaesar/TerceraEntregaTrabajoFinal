const UserMongo = require("../models/userMongo");

class User {
  constructor() {
    this.model = UserMongo;
  }
  getAll = async () => {
    return await this.model.find();
  };
  save = async (user) => {
    const newUser = {
      email: user.email,
      username: user.username,
      password: user.password
    }
    return await this.model.create(newUser);
  };
}

module.exports = User;
