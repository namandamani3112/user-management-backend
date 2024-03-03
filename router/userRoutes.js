const express = require("express");
const {
  signUp,  
  getUser,
  getAllUsers,
  deleteUser,
  patchUser,

} = require("../controller/userController");
const Router = express.Router();

Router.route("/all").get(getAllUsers);  
Router.route("/signup").post(signUp);
Router.route("/:mobile").get(getUser);
Router.route('/:mobile').delete(deleteUser);
Router.route('/:mobile').patch(patchUser);  

module.exports = Router;