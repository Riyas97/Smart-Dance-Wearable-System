require('dotenv').config();
const generateRawData = require('./raw_data_generator');
const generateResults = require('./raw_results_generator');
const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const { RawResultModel, TraineeOneDataModel,
    TraineeTwoDataModel,
    TraineeThreeDataModel, RawEMGModel, ModeModel } = require('./schema');
const parse = require('csv-parse/lib/sync');
const generateRawEMG = require('./raw_emg_generator');
const generateModeData = require('./raw_mode_generator');

const connectToDb = async () => {
    const URI = process.env.MONGO_DB_LOCAL_URI;
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to Jeevz MongoDB Local');
    })
}

const readResultsIntoDb = () => {

    const arrayOfObjects = fs.readFileSync('raw_results.csv', 'utf8');

    const records = parse(arrayOfObjects, {
        headers: ['dancerIds', 'correctDancerIds', 'predictedMove', 'syncDelay', 'accuracy']
    })

// https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop/44476626
    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
        for (let i = 0; i < records.length; i++) {
            const resultInstance = new RawResultModel({ 
                dancerIds: records[i][0],
                correctDancerIds: records[i][1],
                predictedMove: records[i][2],
                syncDelay: records[i][3],
                accuracy: records[i][4],
                timestamp: Date.now()
            });
            console.log(resultInstance);

            resultInstance.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(` ${records[i][2]} saved!`);
                }
            })
            await timer(10000); // 50000
        }
    }

    load();

    // fs.createReadStream('raw_results.csv')
    // .pipe(csv({headers: [ 'timestamp', 'dancerIds', 'predictedMove', 'syncDelay', 'accuracy']}))
    // .on('data', async (row) => {
    //     console.log(row)
    //     console.log('hello');
    //     await timer(3000);
    //     const resultInstance = new RawResultModel({ timestamp: row.timestamp, dancerIds: row.dancerIds, predictedMove: row.predictedMove, syncDelay: row.syncDelay, accuracy: row.accuracy });
    //     resultInstance.save((err) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(` ${row.predictedMove} saved!`);
    //         }
    //     })
    // })
    // .on('end', () => {
    //     console.log('finished writing raw results csv file to database');
    // })
}

const readDataIntoDb = () => {

    const arrayOfObjects = fs.readFileSync('raw_data.csv', 'utf8');

    const records = parse(arrayOfObjects, {
        headers: ['trainee_id', 'yaw', 'pitch', 'row', 'accx', 'accy', 'accz']
    })


    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
        for (let i = 0; i < records.length; i++) {
            if (records[i][0] == '0') {
                const dataInstance = new TraineeOneDataModel({ 
                    trainee_id: records[i][0],
                    mode: records[i][1],
                    yaw: records[i][2],
                    pitch: records[i][3],
                    roll: records[i][4],
                    accx: records[i][5],
                    accy: records[i][6],
                    accz: records[i][7],
                    timestamp: Date.now(),
                });
                // console.log(resultInstance);
    
                dataInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`T1 data instance ${i} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })
                await timer(100);
            } else if (records[i][0] == '1') {
                const dataInstance = new TraineeTwoDataModel({ 
                    trainee_id: records[i][0],
                    mode: records[i][1],
                    yaw: records[i][2],
                    pitch: records[i][3],
                    roll: records[i][4],
                    accx: records[i][5],
                    accy: records[i][6],
                    accz: records[i][7],
                    timestamp: Date.now(),
                });
                // console.log(resultInstance);
    
                dataInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`T2 data instance ${i} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })
                await timer(100);
            } else if (records[i][0] == '2') {
                const dataInstance = new TraineeThreeDataModel({ 
                    trainee_id: records[i][0],
                    mode: records[i][1],
                    yaw: records[i][2],
                    pitch: records[i][3],
                    roll: records[i][4],
                    accx: records[i][5],
                    accy: records[i][6],
                    accz: records[i][7],
                    timestamp: Date.now(),
                });
                // console.log(resultInstance);
    
                dataInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`data instance ${i} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })
                await timer(100);
            }
            
        }
    }

    load();
}

const readEMGIntoDb = () => {

    const arrayOfObjects = fs.readFileSync('raw_emg.csv', 'utf8');

    const records = parse(arrayOfObjects, {
        headers: ['emgValue']
    })


    const timer = ms => new Promise(res => setTimeout(res, ms));

    async function load() {
        for (let i = 0; i < records.length; i++) {
            const emgInstance = new RawEMGModel({ 
                emgValue: records[i][0],
                timestamp: Date.now(),
            });

            emgInstance.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`emg instance ${i} sent`)
                    // console.log(` ${records[i][2]} saved!`);
                }
            })
            await timer(30);
        }
    }
    load();
}

const readEverythingIntoDb = () => {
    const arrayOfDataObjects = fs.readFileSync('raw_data.csv', 'utf8');
    const dataRecords = parse(arrayOfDataObjects, {
        headers: ['trainee_id', 'yaw', 'pitch', 'row', 'accx', 'accy', 'accz']
        // headers: ['trainee_id', 'mode', 'yaw', 'pitch', 'row', 'accx', 'accy', 'accz']
    })

    const arrayOfEmgObjects = fs.readFileSync('raw_emg.csv', 'utf8');
    const emgRecords = parse(arrayOfEmgObjects, {
        headers: ['voltage', 'rms', 'mfq']
    })

    const arrayOfResultObjects = fs.readFileSync('raw_results.csv', 'utf8');
    const resultRecords = parse(arrayOfResultObjects, {
        headers: ['dancerIds', 'correctDancerIds', 'predictedMove', 'syncDelay', 'accuracy']
    })

    const arrayOfModeObjects = fs.readFileSync('raw_mode.csv', 'utf8');
    const modeRecords = parse(arrayOfModeObjects, {
        headers: ['mode']
    })


    const timer = ms => new Promise(res => setTimeout(res, ms));
    let j = 0, k = 0;

    async function load() {
        for (let i = 0; i < dataRecords.length; i++) {

            if (dataRecords[i][0] == '0') {
                const dataInstance = new TraineeOneDataModel({ 
                    trainee_id: dataRecords[i][0],
                    // mode: dataRecords[i][1],
                    yaw: dataRecords[i][1],
                    pitch: dataRecords[i][2],
                    roll: dataRecords[i][3],
                    accx: dataRecords[i][4],
                    accy: dataRecords[i][5],
                    accz: dataRecords[i][6],
                    timestamp: Date.now(),
                });
                // console.log(resultInstance);
    
                dataInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`T1 data instance ${i} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })
                await timer(25);
            } else if (dataRecords[i][0] == '1') {
                const dataInstance = new TraineeTwoDataModel({ 
                    trainee_id: dataRecords[i][0],
                    // mode: dataRecords[i][1],
                    yaw: dataRecords[i][1],
                    pitch: dataRecords[i][2],
                    roll: dataRecords[i][3],
                    accx: dataRecords[i][4],
                    accy: dataRecords[i][5],
                    accz: dataRecords[i][6],
                    timestamp: Date.now(),
                });
                // console.log(resultInstance);
    
                dataInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`T2 data instance ${i} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })
                await timer(25);
            } else if (dataRecords[i][0] == '2') {
                const dataInstance = new TraineeThreeDataModel({ 
                    trainee_id: dataRecords[i][0],
                    // mode: dataRecords[i][1],
                    yaw: dataRecords[i][1],
                    pitch: dataRecords[i][2],
                    roll: dataRecords[i][3],
                    accx: dataRecords[i][4],
                    accy: dataRecords[i][5],
                    accz: dataRecords[i][6],
                    timestamp: Date.now(),
                });
                // console.log(resultInstance);
    
                dataInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`T3 data instance ${i} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })
                await timer(25);
            }

            // console.log('here ' + typeof(dataRecords[i][0]));

            if (dataRecords[i][0] == "0" && j < emgRecords.length) {
                const emgInstance = new RawEMGModel({ 
                    voltage: emgRecords[j][0],
                    rms: emgRecords[j][1],
                    mfq: emgRecords[j][2],
                    timestamp: Date.now(),
                });
    
                emgInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`emg instance ${j} sent`)
                        // console.log(` ${records[i][2]} saved!`);
                    }
                })

                j += 1;
            }

            if (i % 200 == 0 && k < resultRecords.length) {
                const resultInstance = new RawResultModel({ 
                    dancerIds: resultRecords[k][0],
                    correctDancerIds: resultRecords[k][1],
                    predictedMove: resultRecords[k][2],
                    correctMove: resultRecords[k][3],
                    syncDelay: resultRecords[k][4],
                    accuracy: resultRecords[k][5],
                    timestamp: Date.now()
                });

                resultInstance.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(` result instance ${k} saved!`);
                    }
                })

                k += 1;
            }

            const modeInstance = new ModeModel({
                mode: modeRecords[i][0]
            });

            modeInstance.save((err) => {
                if (err) {
                    console.log(err)
                } else {
                    if (i % 100 == 0) {
                        console.log(`Mode instance ${i} sent`)
                    }
                }
            })
        }
    }

    load();

}

// generateRawData();
// generateResults();
// generateRawEMG();
// generateModeData();

connectToDb();
readEverythingIntoDb();
// readDataIntoDb();
// readEMGIntoDb();
// readResultsIntoDb();
