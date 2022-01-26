import { combineReducers } from 'redux';

const addTraineeOneDataReducer = (pastTraineeOneData = [], action) => {
   if (action.type == "TRAINEE_ONE_DATA")  {
       if (pastTraineeOneData.length <= 100) {
            return [...pastTraineeOneData, action.payload];
       } else {
           return [...pastTraineeOneData.slice(Math.max(pastTraineeOneData.length - 100, 1)), action.payload]
       }
   }

   // handle initial startup
   return pastTraineeOneData;
}

const addTraineeTwoDataReducer = (pastTraineeTwoData = [], action) => {
    if (action.type == "TRAINEE_TWO_DATA")  {
        return [...pastTraineeTwoData, action.payload];
    }

    // handle initial startup
    return pastTraineeTwoData;
 }

 const addTraineeThreeDataReducer = (pastTraineeThreeData = [], action) => {
    if (action.type == "TRAINEE_THREE_DATA")  {
        return [...pastTraineeThreeData, action.payload];
    }
    
    // handle initial startup
    return pastTraineeThreeData;
 }

 const addSyncDelay = (syncDelay = [], action) => {
    if (action.type == "SYNC_DELAY")  {
        return [...syncDelay, action.payload];
    }
    
    // handle initial startup
    return syncDelay;
 }

 const addPredictedMove = (predictedMove = [], action) => {
    if (action.type == "PREDICTED_MOVE")  {
        return [...predictedMove, action.payload];
    }
    
    // handle initial startup
    return predictedMove;
 }

 const addDancerIds = (dancerIds = [], action) => {
    if (action.type == "DANCER_IDS")  {
        return [...dancerIds, action.payload];
    }
    
    // handle initial startup
    return dancerIds;
 }

 const addAccuracy = (accuracy = [], action) => {
    if (action.type == "ACCURACY")  {
        return [...accuracy, action.payload];
    }
    
    // handle initial startup
    return accuracy;
 }

 const addResults = (results = [], action) => {
     if (action.type == 'RESULT') {
         return [...results, action.payload]
     }

     return results;
 }

 const addEMGs = (emgs = [], action) => {
    if (action.type == 'EMG') {
        return [...emgs, action.payload]
    }

    return emgs;
}

 

export default combineReducers({
     traineeOneData: addTraineeOneDataReducer,
     traineeTwoData: addTraineeTwoDataReducer,
     traineeThreeData: addTraineeThreeDataReducer,
     syncDelay: addSyncDelay,
     predictedMove: addPredictedMove,
     dancerIds: addDancerIds,
     accuracy: addAccuracy,
     results: addResults,
     emgs: addEMGs
});