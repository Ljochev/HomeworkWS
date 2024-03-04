const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
  email: String,
  password: String,
  fullName: String,
  wrongPassword: 
  {
   type: Number,
   default: 0,
  },
  succesfullLog: 
  {
    type: Number,
    default: 0,
   },
  resetPassword: 
  {
    type: Number,
    default: 0,
   },
});

const Account = mongoose.model("Account", accountSchema, "accounts");

const create = async (acc) => {
  const account = new Account(acc);
  return await account.save();
};

const getById = async (id) => {
  return await Account.findOne({ _id: id });
};

const getByEmail = async (email) => {
  return await Account.findOne({ email });
};

const setNewPassword = async (id, password) => {
  return await Account.updateOne({ _id: id , password});
};

const getAll = async () => {
  return await Account.find({});
};

const update = async (id, acc) => {
  return await Account.updateOne({ _id: id }, acc);
};

const remove = async (id) => {
  return await Account.deleteOne({ _id: id });
};

const updateWrongPassword = async (id, wrongPassword) => {
  wrongPassword++;
return await Account.updateOne({_id: id , wrongPassword});
};
const updateLogin = async (id, succesfullLog) => {
  succesfullLog++;
  console.log("I'm in updateLog function ID:",id, "   ",succesfullLog );
  return await Account.updateOne({ _id: id }, {succesfullLog});
}

const updateResetPassword = async (id, resetPassword) => {
  resetPassword++;
  return await Account.updateOne({ _id: id}, {$set: {resetPassword}});

};

module.exports = {
  create,
  getById,
  getByEmail,
  setNewPassword,
  getAll,
  update,
  remove,
  updateWrongPassword,
  updateLogin,
  updateResetPassword,
};
