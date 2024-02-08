// controllers/staffController.js
const Staff = require('../models/staffModel');
exports.createStaff = async (req, res) => {
  try {
    const { inputValue1, inputValue2, inputValue3 } = req.body;
    const newStaff = new Staff({ inputValue1, inputValue2, inputValue3 });
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getStaff = async (req, res) => {
  try {
    const staffMembers = await Staff.find();
    res.status(200).json(staffMembers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.searchStaff = async (req, res) => {
  const { searchTerm } = req.body;

  try {
    const staffMember = await Staff.findOne({ searchTerm });

    if (!staffMember) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    res.status(200).json(staffMember);
  } catch (error) {
    console.error('Error searching staff:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
