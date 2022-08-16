class UserDTO {
  constructor(user) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.password = user.password;
  }
}

module.exports = UserDTO;
