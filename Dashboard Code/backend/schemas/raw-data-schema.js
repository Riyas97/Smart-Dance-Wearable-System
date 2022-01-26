const mongoose = require('mongoose');

const rawDataSchema = new mongoose.Schema({
    trainee_id: { type: String, required: true, trim: true },
    // mode: { type: String, required: true, trim: true },
    yaw: { type: String, required: true, trim: true },
    pitch: { type: String, required: true, trim: true  },
    roll: { type: String, required: true, trim: true  },
    accx: { type: String, required: true, trim: true  },
    accy: { type: String, required: true, trim: true  },
    accz: { type: String, required: true, trim: true  },
    timestamp: { type: String, default: Date.now() },
})

const TraineeOneDataModel = mongoose.model('raw_trainee_one_data', rawDataSchema);
const TraineeTwoDataModel = mongoose.model('raw_trainee_two_data', rawDataSchema);
const TraineeThreeDataModel = mongoose.model('raw_trainee_three_data', rawDataSchema);

module.exports = {
    TraineeOneDataModel,
    TraineeTwoDataModel,
    TraineeThreeDataModel
}