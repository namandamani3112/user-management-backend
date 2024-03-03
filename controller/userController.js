const userSc = require("../schema/userSchema");
require("dotenv").config();

signUp = async (req, res) => {
  try {
    let user = await userSc.create(req.body);
    user = user.toObject();
    res.status(200).json({
      type: "success",
      message: "User Created",
      data: {
        user: user,
      },
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: `Internal server error : ${error}`,
    });
  }
  return;
};

getUser = async (req, res) => {
  let mobile = req.params.mobile;

  try {
    let data = await userSc.findOne({ mobile: mobile });
    console.log(data);
    if (data == null) {
      return res.status(400).send({
        statusCode: 400,
        message: "Invalid mobile number",
      });
    }
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong..." });
  }
};

getAllUsers = async (req, res) => {
  try {
    let allUsers = await userSc.find({});

    if (!allUsers || allUsers.length === 0) {
      return res.status(404).send({
        statusCode: 404,
        message: "No users found",
      });
    }

    res.status(200).json({
      type: "success",
      message: "Users retrieved successfully",
      data: {
        users: allUsers,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong..." });
  }
};

deleteUser = async (req, res) => {
  let mobile = req.params.mobile;

  try {
    let deletedUser = await userSc.findOneAndDelete({ mobile: mobile });

    if (!deletedUser) {
      return res.status(404).send({
        statusCode: 404,
        message: "User not found",
      });
    }

    res.status(200).json({
      type: "success",
      message: "User deleted successfully",
      data: {
        user: deletedUser,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong..." });
  }
};

patchUser = async (req, res) => {
  const userId = req.params.mobile;
  const updates = req.body;

  console.log(userId, updates);

  try {
    let updatedUser = await userSc.findOneAndUpdate(
      { mobile: userId },
      updates,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send({
        statusCode: 404,
        message: "User not found",
      });
    }

    res.status(200).json({
      type: "success",
      message: "User updated successfully",
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong..." });
  }
};

module.exports = { signUp, getUser, deleteUser, patchUser, getAllUsers };
