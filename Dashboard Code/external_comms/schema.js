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

const rawResultsSchema = new mongoose.Schema({
    timestamp: { type: String, default: Date.now() },
    dancerIds: { type: String, required: true, trim: true },
    correctDancerIds: { type: String, required: true, trim: true },
    predictedMove: { type: String, required: true, trim: true  },
    correctMove: { type: String, required: true, trim: true },
    syncDelay: { type: String, required: true, trim: true  },
    accuracy: { type: String, required: true, trim: true  },
})

const RawResultModel = mongoose.model('raw_result', rawResultsSchema);

const rawEMGSchema = new mongoose.Schema({
    timestamp: { type: String, default: Date.now() },
    voltage: { type: String, required: true, trim: true },
    // rms: { type: String, required: true, trim: true },
    // mfq: { type: String, required: true, trim: true },
})

const RawEMGModel = mongoose.model('raw_emg', rawEMGSchema);

const modeSchema = new mongoose.Schema({
    timestamp: { type: String, default: Date.now() },
    mode: { type: String, required: true, trim: true },
})

const ModeModel = mongoose.model('mode', modeSchema);

module.exports = {
    TraineeOneDataModel,
    TraineeTwoDataModel,
    TraineeThreeDataModel,
    RawResultModel,
    RawEMGModel,
    ModeModel
}