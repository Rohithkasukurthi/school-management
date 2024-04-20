const School = require('../models/School');

// Get all schools
exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single school
exports.getSchoolById = async (req, res) => {
  try {
    const school = await School.findOne({name:req.params.id});
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json(school);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new school
exports.createSchool = async (req, res) => {
  const school = new School({
    name: req.body.name,
    fees: req.body.fees,
    // Add other fields here
  });

  try {
    school.save();
   
    res.status(201).json(school);
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a school
exports.updateSchool = async (req, res) => {
  try {
    const school = await School.findOneAndUpdate({name:req.params.id});
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    school.name = req.body.name || school.name;
    school.fees = req.body.fees || school.fees;
    // Update other fields here

    const updatedSchool = await school.save();
    res.json(updatedSchool);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a school
exports.deleteSchool = async (req, res) => {
  try {
    const school = await School.findOneAndDelete({name:req.params.id});
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }
    res.json({ message: 'School deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


