const mongoose = require('mongoose');

const coachTreeSchema = new mongoose.Schema({
    coach_username: { type: String, required: true, unique: true, trim: true },
    traineeOne_username: { type: String, required: true, unique: true, trim: true },
    traineeTwo_username: { type: String, required: true, unique: true, trim: true  },
    traineeThree_username: { type: String, required: true, unique: true, trim: true  },
})

const CoachTreeModel = mongoose.model('coach_tree', coachTreeSchema);

module.exports = CoachTreeModel;

