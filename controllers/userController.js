const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  //#swagger.tags=['Users']
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: {
        users
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'fail',
      message: 'Error fetching users'
    });
  }
};

const getUser = async (req, res) => {
  //#swagger.tags=['Users']
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'fail',
      message: 'Error fetching user'
    });
  }
};

const createUser = async (req, res) => {
  //#swagger.tags=['Users']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'User details to create',
        required: true,
        schema: {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "favoriteColor": "blue",
            "birthday": "1990-01-01"
        }
    } */

  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      }
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 'fail',
      message: 'Error creating user'
    });
  }
};

const updateUser = async (req, res) => {
  //#swagger.tags=['Users']
  //#swagger.parameters['id'] = { description: 'User ID' }
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'User details to update',
        required: true,
        schema: {
            "firstName": "John",
            "lastName": "Doe",
            "email": "john.doe@example.com",
            "favoriteColor": "blue",
            "birthday": "1990-01-01"
        }
    } */

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      status: 'fail',
      message: 'Error updating user'
    });
  }
};

const deleteUser = async (req, res) => {
  //#swagger.tags=['Users']
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }
    res.status(204).json({
      status: 'success',
      message: 'User deleted successfully'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'fail',
      message: 'Error deleting user'
    });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
