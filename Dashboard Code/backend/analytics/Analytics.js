const _ = require('lodash');

const RawResultsModel = require('../schemas/result-schema');
const { TraineeOneDataModel, TraineeTwoDataModel, TraineeThreeDataModel } = require('../schemas/raw-data-schema');

const getAccumulatedData = async () => {
    let traineeOneTimestamp = [];
    let traineeOneAccx = [];
    let traineeOneAccy = [];
    let traineeOneAccz = [];
    let traineeOneGccx = [];
    let traineeOneGccy = [];
    let traineeOneGccz = [];

    let traineeTwoTimestamp = [];
    let traineeTwoAccx = [];
    let traineeTwoAccy = [];
    let traineeTwoAccz = [];
    let traineeTwoGccx = [];
    let traineeTwoGccy = [];
    let traineeTwoGccz = [];

    let traineeThreeTimestamp = [];
    let traineeThreeAccx = [];
    let traineeThreeAccy = [];
    let traineeThreeAccz = [];
    let traineeThreeGccx = [];
    let traineeThreeGccy = [];
    let traineeThreeGccz = [];

    try {

        const traineeOneDocs = await TraineeOneDataModel.find({});

        for (const doc of traineeOneDocs) {
            traineeOneAccx.push(doc.accx);
            traineeOneAccy.push(doc.accy);
            traineeOneAccz.push(doc.accz);
            traineeOneGccx.push(doc.yaw);
            traineeOneGccy.push(doc.pitch);
            traineeOneGccz.push(doc.roll);
            traineeOneTimestamp.push(doc.timestamp);
        }

        const traineeTwoDocs = await TraineeTwoDataModel.find({});

        for (const doc of traineeTwoDocs) {
            traineeTwoAccx.push(doc.accx);
            traineeTwoAccy.push(doc.accy);
            traineeTwoAccz.push(doc.accz);
            traineeTwoGccx.push(doc.yaw);
            traineeTwoGccy.push(doc.pitch);
            traineeTwoGccz.push(doc.roll);
            traineeTwoTimestamp.push(doc.timestamp);
        }

        const traineeThreeDocs = await TraineeThreeDataModel.find({});

        for (const doc of traineeThreeDocs) {
            traineeThreeAccx.push(doc.accx);
            traineeThreeAccy.push(doc.accy);
            traineeThreeAccz.push(doc.accz);
            traineeThreeGccx.push(doc.yaw);
            traineeThreeGccy.push(doc.pitch);
            traineeThreeGccz.push(doc.roll);
            traineeThreeTimestamp.push(doc.timestamp);
        }

    } catch (error) {
        console.log('Get accumulated data error ', error);
        throw new Error(error);
    }

    return { 
        traineeOneAccx,
        traineeOneAccy,
        traineeOneAccz,
        traineeOneGccx,
        traineeOneGccy,
        traineeOneGccz,
        traineeOneTimestamp,
        traineeTwoAccx,
        traineeTwoAccy,
        traineeTwoAccz,
        traineeTwoAccz,
        traineeTwoGccx,
        traineeTwoGccy,
        traineeTwoGccz,
        traineeTwoTimestamp,
        traineeThreeAccx,
        traineeThreeAccy,
        traineeThreeAccz,
        traineeThreeGccx,
        traineeThreeGccy,
        traineeThreeGccz,
        traineeThreeTimestamp
     };
}

const getAccumulatedMoves = async () => {
    let totalCorrectMoves = 0;
    let totalIncorrectMoves = 0;
    let totalMoves = 0;

    let totalHair = 0;
    let totalGun = 0;
    let totalSidepump = 0;
    let totalDab = 0;
    let totalElbowKick = 0;
    let totalListen = 0;
    let totalWipeTable = 0;
    let totalPointHigh = 0;

    let totalHairCorrect = 0;
    let totalGunCorrect = 0;
    let totalSidepumpCorrect = 0;
    let totalDabCorrect = 0;
    let totalElbowKickCorrect = 0;
    let totalListenCorrect = 0;
    let totalWipeTableCorrect = 0;
    let totalPointHighCorrect = 0;

    let totalHairIncorrect = 0;
    let totalGunIncorrect = 0;
    let totalSidepumpIncorrect = 0;
    let totalDabIncorrect = 0;
    let totalElbowKickIncorrect = 0;
    let totalListenIncorrect = 0;
    let totalWipeTableIncorrect = 0;
    let totalPointHighIncorrect = 0;

    try {
        const resultsDocs = await RawResultsModel.find({});
        console.log('GET ACCUMULATED RESULTS DOCS ', resultsDocs);
        // totalMoves = resultsDocs.length;

        for (const doc of resultsDocs) {
            totalMoves += 1;

            if (doc.correctMove === 'hair') {
                totalHair += 1;
            } else if (doc.correctMove === 'gun') {
                totalGun += 1;
            } else if (doc.correctMove === 'sidepump') {
                totalSidepump += 1;
            } else if (doc.correctMove === 'dab') {
                totalDab += 1;
            } else if (doc.correctMove === 'elbowkick') {
                totalElbowKick += 1;
            } else if (doc.correctMove === 'listen') {
                totalListen += 1;
            } else if (doc.correctMove === 'wipetable') {
                totalWipeTable += 1;
            } else if (doc.correctMove === 'pointhigh') {
                totalPointHigh += 1;
            }

            if (doc.correctMove === doc.predictedMove && doc.correctMove != 'logout') {
                totalCorrectMoves += 1;

                if (doc.correctMove === 'hair') {
                    totalHairCorrect += 1;
                } else if (doc.correctMove === 'gun') {
                    totalGunCorrect += 1;
                } else if (doc.correctMove === 'sidepump') {
                    totalSidepumpCorrect += 1;
                } else if (doc.correctMove === 'dab') {
                    totalDabCorrect += 1;
                } else if (doc.correctMove === 'elbowkick') {
                    totalElbowKickCorrect += 1;
                } else if (doc.correctMove === 'listen') {
                    totalListenCorrect += 1;
                } else if (doc.correctMove === 'wipetable') {
                    totalWipeTableCorrect += 1;
                } else if (doc.correctMove === 'pointhigh') {
                    totalPointHighCorrect += 1;
                }
            } else {
                totalIncorrectMoves += 1;
            }
        }

        // totalIncorrectMoves = totalMoves - totalCorrectMoves;
        totalHairIncorrect = totalHair - totalHairCorrect;
        totalGunIncorrect = totalGun - totalGunCorrect;
        totalSidepumpIncorrect = totalSidepump - totalSidepumpCorrect;
        totalDabIncorrect = totalDab - totalDabCorrect;
        totalElbowKickIncorrect = totalElbowKick - totalElbowKickCorrect;
        totalListenIncorrect = totalListen - totalListenCorrect;
        totalWipeTableInCorrect = totalWipeTable - totalWipeTableCorrect;
        totalPointHighInCorrect = totalPointHigh - totalPointHighCorrect;

    } catch (error) {
        console.log('Get accumulated moves error ', error);
        throw new Error(error);
    }

    return {
        totalMoves,
        totalCorrectMoves,
        totalIncorrectMoves,
        totalGun,
        totalGunCorrect,
        totalGunIncorrect,
        totalHair,
        totalHairCorrect,
        totalHairIncorrect,
        totalSidepump,
        totalSidepumpCorrect,
        totalSidepumpIncorrect,
        totalDab,
        totalDabCorrect,
        totalDabIncorrect,
        totalElbowKick,
        totalElbowKickCorrect,
        totalElbowKickIncorrect,
        totalListen,
        totalListenCorrect,
        totalListenIncorrect,
        totalWipeTable,
        totalWipeTableCorrect,
        totalWipeTableIncorrect,
        totalPointHigh,
        totalPointHighCorrect,
        totalPointHighIncorrect
    }

}

const getAccumulatedPositions = async () => {
    let totalCorrectPositions = 0;
    let totalIncorrectPositions = 0;
    let totalPositions = 0;

    let traineeOneCorrectPosition = 0;
    let traineeOneIncorrectPosition = 0;
    let traineeTwoCorrectPosition = 0;
    let traineeTwoIncorrectPosition = 0;
    let traineeThreeCorrectPosition = 0;
    let traineeThreeIncorrectPosition = 0;

    try {
        const resultsDocs = await RawResultsModel.find({});
        console.log('GET ACCUMULATED RESULTS DOCS ', resultsDocs);
        // totalPositions = resultsDocs.length;

        for (const doc of resultsDocs) {
            totalPositions += 1;
            
            if (doc.correctDancerIds === doc.dancerIds) {
                totalCorrectPositions += 1;
            } else {
                totalIncorrectPositions += 1;
            }
            const correctDancerIdsString = doc.correctDancerIds.trim();
            const correctDancerIdsArray = correctDancerIdsString.split(' ');

            const dancerIdsString = doc.dancerIds.trim();
            const dancerIdsArray = dancerIdsString.split(' ');

            let i = 0;
            for (const pos of correctDancerIdsArray) {
                if (pos === dancerIdsArray[i]) {
                    if (pos === '1') {
                        traineeOneCorrectPosition += 1;
                    } else if (pos === '2') {
                        traineeTwoCorrectPosition += 1;
                    } else if (pos == '3') {
                        traineeThreeCorrectPosition += 1;
                    }
                } else {
                    if (pos === '1') {
                        traineeOneIncorrectPosition += 1;
                    } else if (pos === '2') {
                        traineeTwoIncorrectPosition += 1;
                    } else if (pos == '3') {
                        traineeThreeIncorrectPosition += 1;
                    }
                } 
                i += 1;
            }
        }

    } catch (error) {
        console.log('Get accumulated positions error ', error);
        throw new Error(error);
    }

    return {
        totalPositions,
        totalCorrectPositions,
        totalIncorrectPositions,
        traineeOneCorrectPosition,
        traineeOneIncorrectPosition,
        traineeTwoCorrectPosition,
        traineeTwoIncorrectPosition,
        traineeThreeCorrectPosition,
        traineeThreeIncorrectPosition
    }

}

const getIndividualPositionStats = async () => {
    // traineeCorrectPositionActualPosition
    let t1Pos1 = 0;
    let t1Pos1Corr1 = 0;
    let t1Pos1Incorr2 = 0;
    let t1Pos1Incorr3 = 0;

    let t1Pos2 = 0;
    let t1Pos2Incorr1 = 0;
    let t1Pos2Corr2 = 0;
    let t1Pos2Incorr3 = 0;

    let t1Pos3 = 0;
    let t1Pos3Incorr1 = 0;
    let t1Pos3Incorr2 = 0;
    let t1Pos3Corr3 = 0;

    let t2Pos1 = 0;
    let t2Pos1Corr1 = 0;
    let t2Pos1Incorr2 = 0;
    let t2Pos1Incorr3 = 0;

    let t2Pos2 = 0;
    let t2Pos2Incorr1 = 0;
    let t2Pos2Corr2 = 0;
    let t2Pos2Incorr3 = 0;

    let t2Pos3 = 0;
    let t2Pos3Incorr1 = 0;
    let t2Pos3Incorr2 = 0;
    let t2Pos3Corr3 = 0;

    let t3Pos1 = 0;
    let t3Pos1Corr1 = 0;
    let t3Pos1Incorr2 = 0;
    let t3Pos1Incorr3 = 0;

    let t3Pos2 = 0;
    let t3Pos2Incorr1 = 0;
    let t3Pos2Corr2 = 0;
    let t3Pos2Incorr3 = 0;

    let t3Pos3 = 0;
    let t3Pos3Incorr1 = 0;
    let t3Pos3Incorr2 = 0;
    let t3Pos3Corr3 = 0;

    try {
        const resultsDocs = await RawResultsModel.find({});
        console.log('GET INDIVIDUAL RESULTS DOCS ', resultsDocs);
        // totalPositions = resultsDocs.length;

        for (const doc of resultsDocs) {
            const correctDancerIds = doc.correctDancerIds.trim();
            const dancerIds = doc.dancerIds.trim();

            const correctDancerIdsArray = correctDancerIds.split(' ');
            const dancerIdsArray = dancerIds.split(' ');

            for (i = 0; i < correctDancerIdsArray.length; i++) {
                if (i == 0) {
                    // first position

                    if (correctDancerIdsArray[i] === '1') {
                        t1Pos1 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t1Pos1Corr1 += 1;
                        } else if (dancerIdsArray[1] == '1') {
                            t1Pos1Incorr2 += 1;
                        } else if (dancerIdsArray[2] == '1') {
                            t1Pos1Incorr3 += 1;
                        }
                    } else if (correctDancerIdsArray[i] == '2') {
                        t2Pos1 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t2Pos1Corr1 += 1;
                        } else if (dancerIdsArray[1] == '2') {
                            t2Pos1Incorr2 += 1;
                        } else if (dancerIdsArray[2] == '2') {
                            t2Pos1Incorr3 += 1;
                        }

                    } else if (correctDancerIdsArray[i] == '3') {
                        t3Pos1 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t3Pos1Corr1 += 1;
                        } else if (dancerIdsArray[1] == '3') {
                            t3Pos1Incorr2 += 1;
                        } else if (dancerIdsArray[2] == '3') {
                            t3Pos1Incorr3 += 1;
                        }
                    }

                } else if (i == 1) {
                    // second position

                    if (correctDancerIdsArray[i] === '1') {
                        t1Pos2 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t1Pos2Corr2 += 1;
                        } else if (dancerIdsArray[0] == '1') {
                            t1Pos2Incorr1 += 1;
                        } else if (dancerIdsArray[2] == '1') {
                            t1Pos2Incorr3 += 1;
                        }
                    } else if (correctDancerIdsArray[i] == '2') {
                        t2Pos2 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t2Pos2Corr2 += 1;
                        } else if (dancerIdsArray[0] == '2') {
                            t2Pos2Incorr1 += 1;
                        } else if (dancerIdsArray[2] == '2') {
                            t2Pos2Incorr3 += 1;
                        }
                    } else if (correctDancerIdsArray[i] == '3') {
                        t3Pos2 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t3Pos2Corr2 += 1;
                        } else if (dancerIdsArray[0] == '3') {
                            t3Pos2Incorr1 += 1;
                        } else if (dancerIdsArray[2] == '3') {
                            t3Pos2Incorr3 += 1;
                        }
                    }
                    
                } else if (i == 2) {
                    // third position
                    if (correctDancerIdsArray[i] === '1') {
                        t1Pos3 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t1Pos3Corr3 += 1;
                        } else if (dancerIdsArray[0] == '1') {
                            t1Pos3Incorr1 += 1;
                        } else if (dancerIdsArray[1] == '1') {
                            t1Pos3Incorr2 += 1;
                        }
                    } else if (correctDancerIdsArray[i] == '2') {
                        t2Pos3 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t2Pos3Corr3 += 1;
                        } else if (dancerIdsArray[0] == '2') {
                            t2Pos3Incorr1 += 1;
                        } else if (dancerIdsArray[1] == '2') {
                            t2Pos3Incorr2 += 1;
                        }
                    } else if (correctDancerIdsArray[i] == '3') {
                        t3Pos3 += 1;

                        if (dancerIdsArray[i] == correctDancerIdsArray[i]) {
                            t3Pos3Corr3 += 1;
                        } else if (dancerIdsArray[0] == '3') {
                            t3Pos3Incorr1 += 1;
                        } else if (dancerIdsArray[1] == '3') {
                            t3Pos3Incorr2 += 1;
                        }
                    }
                }
            }
        }

    } catch (error) {
        console.log('Get individual positions error ', error);
        throw new Error(error);
    }

    return {
        t1Pos1,
        t1Pos1Corr1,
        t1Pos1Incorr2,
        t1Pos1Incorr3,
        t1Pos2,
        t1Pos2Corr2,
        t1Pos2Incorr1,
        t1Pos2Incorr3,
        t1Pos3,
        t1Pos3Corr3,
        t1Pos3Incorr1,
        t1Pos3Incorr2,
        t2Pos1,
        t2Pos1Corr1,
        t2Pos1Incorr2,
        t2Pos1Incorr3,
        t2Pos2,
        t2Pos2Corr2,
        t2Pos2Incorr1,
        t2Pos2Incorr3,
        t2Pos3,
        t2Pos3Corr3,
        t2Pos3Incorr1,
        t2Pos3Incorr2,
        t3Pos1,
        t3Pos1Corr1,
        t3Pos1Incorr2,
        t3Pos1Incorr3,
        t3Pos2,
        t3Pos2Corr2,
        t3Pos2Incorr1,
        t3Pos2Incorr3,
        t3Pos3,
        t3Pos3Corr3,
        t3Pos3Incorr1,
        t3Pos3Incorr2
    }
}

const getIndividualMoveStats = async () => {
    let totalDab = 0;
    let moveDabCorrDab = 0;
    let moveDabIncorrElbowKick = 0;
    let moveDabIncorrListen = 0;
    let moveDabIncorrSidepump = 0;
    let moveDabIncorrGun = 0;
    let moveDabIncorrHair = 0;
    let moveDabIncorrPointHigh = 0;
    let moveDabIncorrWipeTable = 0;

    let totalHair = 0;
    let moveHairCorrHair = 0;
    let moveHairIncorrDab = 0;
    let moveHairIncorrElbowKick = 0;
    let moveHairIncorrListen = 0;
    let moveHairIncorrSidepump = 0;
    let moveHairIncorrGun = 0;
    let moveHairIncorrPointHigh = 0;
    let moveHairIncorrWipeTable = 0;

    let totalElbowKick = 0;
    let moveElbowKickCorrElbowKick = 0;
    let moveElbowKickIncorrListen = 0;
    let moveElbowKickIncorrHair = 0;
    let moveElbowKickIncorrDab = 0;
    let moveElbowKickIncorrSidepump = 0;
    let moveElbowKickIncorrGun = 0;
    let moveElbowKickIncorrPointHigh = 0;
    let moveElbowKickIncorrWipeTable = 0;

    let totalListen = 0;
    let moveListenCorrListen = 0;
    let moveListenIncorrHair = 0;
    let moveListenIncorrElbowKick = 0;
    let moveListenIncorrDab = 0;
    let moveListenIncorrSidepump = 0;
    let moveListenIncorrGun = 0;
    let moveListenIncorrPointHigh = 0;
    let moveListenIncorrWipeTable = 0;

    let totalSidepump = 0;
    let moveSidepumpCorrSidepump = 0;
    let moveSidempumpIncorrElbowKick = 0;
    let moveSidepumpIncorrHair = 0;
    let moveSidepumpIncorrListen = 0;
    let moveSidepumpIncorrDab = 0;
    let moveSidepumpIncorrGun = 0;
    let moveSidepumpIncorrPointHigh = 0;
    let moveSidepumpIncorrWipeTable = 0;

    let totalGun = 0;
    let moveGunCorrGun = 0;
    let moveGunIncorrElbowKick = 0;
    let moveGunIncorrHair = 0;
    let moveGunIncorrListen = 0;
    let moveGunIncorrDab = 0;
    let moveGunIncorrPointHigh = 0;
    let moveGunIncorrWipeTable = 0;
    let moveGunIncorrSidepump = 0;

    let totalPointHigh = 0;
    let movePointHighCorrPointHigh = 0;
    let movePointHighIncorrElbowKick = 0;
    let movePointHighIncorrHair = 0;
    let movePointHighIncorrListen = 0;
    let movePointHighIncorrDab = 0;
    let movePointHighIncorrWipeTable = 0;
    let movePointHighIncorrSidepump = 0;
    let movePointHighIncorrGun = 0;

    let totalWipeTable = 0;
    let moveWipeTableCorrWipeTable = 0;
    let moveWipeTableIncorrElbowKick = 0;
    let moveWipeTableIncorrHair = 0;
    let moveWipeTableIncorrDab = 0;
    let moveWipeTableIncorrListen = 0;
    let moveWipeTableIncorrSidepump = 0;
    let moveWipeTableIncorrGun = 0;
    let moveWipeTableIncorrPointHigh = 0; 


    try {
        const resultsDocs = await RawResultsModel.find({});
        console.log('GET INDIVIDUAL MOVES STATS ', resultsDocs);

        for (const doc of resultsDocs) {
            const predictedMove = doc.predictedMove;
            const correctMove = doc.correctMove;

            if (correctMove == 'dab') {
                totalDab += 1;

                if (predictedMove == 'dab') {
                    moveDabCorrDab += 1;
                } else if (predictedMove == 'elbowkick') {
                    moveDabIncorrElbowKick += 1;
                } else if (predictedMove == 'listen') {
                    moveDabIncorrListen += 1;
                } else if (predictedMove == 'hair') {
                    moveDabIncorrHair += 1;
                } else if (predictedMove == 'sidepump') {
                    moveDabIncorrSidepump += 1;
                } else if (predictedMove == 'pointhigh') {
                    moveDabIncorrPointHigh += 1;
                } else if (predictedMove == 'wipetable') {
                    moveDabIncorrWipeTable += 1;
                } else if (predictedMove == 'gun') {
                    moveDabIncorrGun += 1;
                }
            } else if (correctMove == 'elbowkick') {
                totalElbowKick += 1;

                if (predictedMove == 'elbowkick') {
                    moveElbowKickCorrElbowKick += 1;
                } else if (predictedMove == 'dab') {
                    moveElbowKickIncorrDab += 1;
                } else if (predictedMove == 'listen') {
                    moveElbowKickIncorrListen += 1;
                } else if (predictedMove == 'hair') {
                    moveElbowKickIncorrHair += 1;
                } else if (predictedMove == 'sidepump') {
                    moveElbowKickIncorrSidepump += 1;
                } else if (predictedMove == 'pointhigh') {
                    moveElbowKickIncorrPointHigh += 1;
                } else if (predictedMove == 'wipetable') {
                    moveElbowKickIncorrWipeTable += 1;
                } else if (predictedMove == 'gun') {
                    moveElbowKickIncorrGun += 1;
                }
            } else if (correctMove == 'listen') {
                totalListen += 1;
                if (predictedMove == 'listen') {
                    moveListenCorrListen += 1;
                } else if (predictedMove == 'dab') {
                    moveListenIncorrDab += 1;
                } else if (predictedMove == 'elbowkick') {
                    moveListenIncorrElbowKick += 1;
                } else if (predictedMove == 'hair') {
                    moveListenIncorrHair += 1;
                } else if (predictedMove == 'sidepump') {
                    moveListenIncorrSidepump += 1;
                } else if (predictedMove == 'pointhigh') {
                    moveListenIncorrPointHigh += 1;
                } else if (predictedMove == 'wipetable') {
                    moveListenIncorrWipeTable += 1;
                } else if (predictedMove == 'gun') {
                    moveListenIncorrGun += 1;
                }
            } else if (correctMove == 'hair') {
                totalHair += 1;
                if (predictedMove == 'hair') {
                    moveHairCorrHair += 1;
                } else if (predictedMove == 'dab') {
                    moveHairIncorrDab += 1;
                } else if (predictedMove == 'elbowkick') {
                    moveHairIncorrElbowKick += 1;
                } else if (predictedMove == 'listen') {
                    moveHairIncorrListen += 1;
                } else if (predictedMove == 'sidepump') {
                    moveHairIncorrSidepump += 1;
                } else if (predictedMove == 'pointhigh') {
                    moveHairIncorrPointHigh += 1;
                } else if (predictedMove == 'wipetable') {
                    moveHairIncorrWipeTable += 1;
                } else if (predictedMove == 'gun') {
                    moveHairIncorrGun += 1;
                }
            } else if (correctMove == 'sidepump') {
                totalSidepump += 1;
                if (predictedMove == 'sidepump') {
                    moveSidepumpCorrSidepump += 1;
                } else if (predictedMove == 'dab') {
                    moveSidepumpIncorrDab += 1;
                } else if (predictedMove == 'elbowkick') {
                    moveSidempumpIncorrElbowKick += 1;
                } else if (predictedMove == 'listen') {
                    moveSidepumpIncorrListen += 1;
                } else if (predictedMove == 'hair') {
                    moveSidepumpIncorrHair += 1;
                } else if (predictedMove == 'pointhigh') {
                    moveSidepumpIncorrPointHigh += 1;
                } else if (predictedMove == 'wipetable') {
                    moveSidepumpIncorrWipeTable += 1;
                } else if (predictedMove == 'gun') {
                    moveSidepumpIncorrGun += 1;
                }
            } else if (correctMove == 'pointhigh') {
                totalPointHigh += 1;
                if (predictedMove == 'pointhigh') {
                    movePointHighCorrPointHigh += 1;
                } else if (predictedMove == 'dab') {
                    movePointHighIncorrDab += 1;
                } else if (predictedMove == 'elbowkick') {
                    movePointHighIncorrElbowKick += 1;
                } else if (predictedMove == 'listen') {
                    movePointHighIncorrListen += 1;
                } else if (predictedMove == 'hair') {
                    movePointHighIncorrHair += 1;
                } else if (predictedMove == 'sidepump') {
                    movePointHighIncorrSidepump += 1;
                } else if (predictedMove == 'wipetable') {
                    movePointHighIncorrWipeTable += 1;
                } else if (predictedMove == 'gun') {
                    movePointHighIncorrGun += 1;
                }
            } else if (correctMove == 'wipetable') {
                totalWipeTable += 1;
                if (predictedMove == 'wipetable') {
                    moveWipeTableCorrWipeTable += 1;
                } else if (predictedMove == 'dab') {
                    moveWipeTableIncorrDab += 1;
                } else if (predictedMove == 'elbowkick') {
                    moveWipeTableIncorrElbowKick += 1;
                } else if (predictedMove == 'listen') {
                    moveWipeTableIncorrListen += 1;
                } else if (predictedMove == 'hair') {
                    moveWipeTableIncorrHair += 1;
                } else if (predictedMove == 'sidepump') {
                    moveWipeTableIncorrSidepump += 1;
                } else if (predictedMove == 'pointhigh') {
                    moveWipeTableIncorrPointHigh += 1;
                } else if (predictedMove == 'gun') {
                    moveWipeTableIncorrGun += 1;
                }
            } else if (correctMove == 'gun') {
                totalGun += 1;
                if (predictedMove == 'gun') {
                    moveGunCorrGun += 1;
                } else if (predictedMove == 'dab') {
                    moveGunIncorrDab += 1;
                } else if (predictedMove == 'elbowkick') {
                    moveGunIncorrElbowKick += 1;
                } else if (predictedMove == 'listen') {
                    moveGunIncorrListen += 1;
                } else if (predictedMove == 'hair') {
                    moveGunIncorrHair += 1;
                } else if (predictedMove == 'sidepump') {
                    moveGunIncorrSidepump += 1;
                } else if (predictedMove == 'pointhigh') {
                    moveGunIncorrPointHigh += 1;
                } else if (predictedMove == 'wipetable') {
                    moveGunIncorrWipeTable += 1;
                }
            }
            
        }

    } catch (error) {
        console.log('Get Individual Move stats error ', error);
        throw new Error(error);
    }

    return {
        totalDab,
        moveDabCorrDab,
        moveDabIncorrElbowKick,
        moveDabIncorrListen,
        moveDabIncorrHair,
        moveDabIncorrGun,
        moveDabIncorrPointHigh,
        moveDabIncorrSidepump,
        moveDabIncorrWipeTable,
        totalElbowKick,
        moveElbowKickCorrElbowKick,
        moveElbowKickIncorrDab,
        moveElbowKickIncorrGun,
        moveElbowKickIncorrHair,
        moveElbowKickIncorrPointHigh,
        moveElbowKickIncorrSidepump,
        moveElbowKickIncorrListen,
        moveElbowKickIncorrWipeTable,
        totalHair,
        moveHairCorrHair,
        moveHairIncorrDab,
        moveHairIncorrElbowKick,
        moveHairIncorrGun,
        moveHairIncorrListen,
        moveHairIncorrPointHigh,
        moveHairIncorrSidepump,
        moveHairIncorrWipeTable,
        totalListen,
        moveListenCorrListen,
        moveListenIncorrDab,
        moveListenIncorrElbowKick,
        moveListenIncorrGun,
        moveListenIncorrHair,
        moveListenIncorrPointHigh,
        moveListenIncorrSidepump,
        moveListenIncorrWipeTable,
        totalGun,
        moveGunCorrGun,
        moveGunIncorrDab,
        moveGunIncorrElbowKick,
        moveGunIncorrHair,
        moveGunIncorrListen,
        moveGunIncorrPointHigh,
        moveGunIncorrSidepump,
        moveGunIncorrWipeTable,
        totalSidepump,
        moveSidepumpCorrSidepump,
        moveSidempumpIncorrElbowKick,
        moveSidepumpIncorrDab,
        moveSidepumpIncorrGun,
        moveSidepumpIncorrHair,
        moveSidepumpIncorrListen,
        moveSidepumpIncorrPointHigh,
        moveSidepumpIncorrWipeTable,
        totalPointHigh,
        movePointHighCorrPointHigh,
        movePointHighIncorrDab,
        movePointHighIncorrElbowKick,
        movePointHighIncorrGun,
        movePointHighIncorrHair,
        movePointHighIncorrSidepump,
        movePointHighIncorrListen,
        movePointHighIncorrWipeTable,
        totalWipeTable,
        moveWipeTableCorrWipeTable,
        moveWipeTableIncorrDab,
        moveWipeTableIncorrElbowKick,
        moveWipeTableIncorrGun,
        moveWipeTableIncorrHair,
        moveWipeTableIncorrListen,
        moveWipeTableIncorrPointHigh,
        moveWipeTableIncorrSidepump
    }
}

module.exports = {
    getAccumulatedData,
    getAccumulatedMoves,
    getAccumulatedPositions,
    getIndividualPositionStats,
    getIndividualMoveStats
}


