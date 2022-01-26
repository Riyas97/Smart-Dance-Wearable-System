const addTraineeOneData = (data) => {
    return {
        type: 'TRAINEE_ONE_DATA',
        payload: {
            timestamp: data.timestamp,
            mode: data.mode,
            yaw: data.yaw,
            pitch: data.pitch,
            roll: data.roll,
            accx: data.accx,
            accy: data.accy,
            accz: data.accz
        }
    }
}

const addTraineeTwoData = (data) => {
    return {
        type: 'TRAINEE_TWO_DATA',
        payload: {
            timestamp: data.timestamp,
            mode: data.mode,
            yaw: data.yaw,
            pitch: data.pitch,
            roll: data.roll,
            accx: data.accx,
            accy: data.accy,
            accz: data.accz
        }
    }
}

const addTraineeThreeData = (data) => {
    return {
        type: 'TRAINEE_THREE_DATA',
        payload: {
            timestamp: data.timestamp,
            mode: data.mode,
            yaw: data.yaw,
            pitch: data.pitch,
            roll: data.roll,
            accx: data.accx,
            accy: data.accy,
            accz: data.accz
        }
    }
}

const addSyncDelay = (data) => {
    return {
        type: 'SYNC_DELAY',
        payload: data.syncDelay,
    }
}

const addPredictedMove = (data) => {
    return {
        type: 'PREDICTED_MOVE',
        payload: data.predictedMove,
    }
}

const addDancerIds = (data) => {
    return {
        type: 'DANCER_IDS',
        payload: data.dancerIds,
    }
}

const addAccuracy = (data) => {
    return {
        type: 'ACCURACY',
        payload: data.accuracy,
    }
}

const addResults = (data) => {
    return {
        type: 'RESULT',
        payload: data
    }
}

const addEMG = (data) => {
    return {
        type: 'EMG',
        payload: {
            timestamp: data.timestamp,
            voltage: data.voltage,
            rms: data.rms,
            mfq: data.mfq
        }
    }
}

module.exports = {
    addTraineeOneData,
    addTraineeTwoData,
    addTraineeThreeData,
    addSyncDelay,
    addPredictedMove,
    addDancerIds,
    addAccuracy,
    addResults,
    addEMG
}