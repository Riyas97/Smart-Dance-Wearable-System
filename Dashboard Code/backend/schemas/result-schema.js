const mongoose = require('mongoose');

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

module.exports = RawResultModel;
