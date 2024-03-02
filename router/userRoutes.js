const express = require("express");
const {
  signUp,  
  getUser,

} = require("../controller/userController");
const Router = express.Router();

Router.route("/signup").post(signUp);
Router.route("/:mobile").get(getUser);
Router.route('/:mobile').delete(deleteUser);
Router.route('/:mobile').patch(patchUser);  

module.exports = Router;