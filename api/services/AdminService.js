const Admin = require('../models/AdminModel');

async function create(admin) {
  const createdAdmin = await Admin.create(admin);
  return createdAdmin;
}
async function update(admin, adminId) {
  console.log('ID', adminId);

  const updatedAdmin = await Admin.updateOne({ _id: adminId }, admin);
  return updatedAdmin;
}
async function findById(adminId) {
  const admin = await Admin.findById(adminId);
  return admin;
}

module.exports = {
  create,
  update,
  findById,
};
