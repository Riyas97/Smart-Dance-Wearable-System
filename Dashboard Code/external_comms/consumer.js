require('dotenv').config();
const amqp = require('amqplib/callback_api');
const mongoose = require('mongoose');
const { TraineeOneDataModel, TraineeTwoDataModel, TraineeThreeDataModel, 
  RawEMGModel, RawResultModel, ModeModel } = require('./schema');


const CLOUD_AMQP_URL = process.env.CLOUDAMQP_URL;

const connectToDb = async () => {
  const URI = process.env.MONGO_DB_LOCAL_URI;
  mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
      console.log('Connected to Jeevz MongoDB Local');
  })
}

connectToDb();

amqp.connect(CLOUD_AMQP_URL, async function(error0, connection) {
  if (error0) {
    throw error0;
  }

  let traineeOneDocumentArray = [];
  let traineeTwoDocumentArray = [];
  let traineeThreeDocumentArray = [];

  let traineeOneDocumentBatchCount = 0;
  let traineeTwoDocumentBatchCount = 0;
  let traineeThreeDocumentBatchCount = 0;
  let emgCount = 0;
  let resultsCount = 0;
  let modeCount = 0;

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'trainee_one_data';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    // assume msg to be of the format: dancerId | timestamp | yaw pitch roll accx accy accz
    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const dancerId = stringMsgArray[0].trim();
      const timestamp = stringMsgArray[1].trim();
      const rawDataString = stringMsgArray[2].trim();

      const rawDataArray = rawDataString.split(' ');
      //const mode = rawDataArray[0];
      const yaw = rawDataArray[0];
      const pitch = rawDataArray[1];
      const roll = rawDataArray[2];
      const accx = rawDataArray[3];
      const accy = rawDataArray[4];
      const accz = rawDataArray[5];
      // console.log('Mode: ' + mode);
      // console.log('Dancer ID: ' + dancerId);
      // console.log('Timestamp: ' + timestamp);
      // console.log('Raw Data: ' + rawDataArray);
      // console.log(" [Raw Data] Received %s", stringMsg);

      const dataInstance = new TraineeOneDataModel({ 
        trainee_id: dancerId,
        // mode,
        yaw,
        pitch,
        roll,
        accx,
        accy,
        accz,
        timestamp,
      });

      traineeOneDocumentBatchCount += 1;

      // console.log(dataInstance);
      // traineeOneDocumentArray.push(dataInstance);

      // if (traineeOneDocumentArray.length == 10) {
      //   traineeOneDocumentBatchCount += 1;
      //   TraineeOneDataModel.insertMany(traineeOneDocumentArray).then((err, docs) => {
      //     if (err) {
      //       console.log('Error occured in batch insert for T1 documents ', err);
      //     }
      //     console.log(`${traineeOneDocumentBatchCount} t1 documents sent to db in batch`)
      //   })

      //   traineeOneDocumentArray = [];
      // }
      dataInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            if (traineeOneDocumentBatchCount % 20 == 0) {
              console.log(`t1 ${traineeOneDocumentBatchCount} data instance sent to db`)
            }
        }
      })
    }, {
      noAck: true
    });
  });

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'trainee_two_data';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    // assume msg to be of the format: dancerId | timestamp | yaw pitch roll accx accy accz
    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const dancerId = stringMsgArray[0].trim();
      const timestamp = stringMsgArray[1].trim();
      const rawDataString = stringMsgArray[2].trim();

      const rawDataArray = rawDataString.split(' ');
      // const mode = rawDataArray[0];
      const yaw = rawDataArray[0];
      const pitch = rawDataArray[1];
      const roll = rawDataArray[2];
      const accx = rawDataArray[3];
      const accy = rawDataArray[4];
      const accz = rawDataArray[5];
      // console.log('Mode: ' + mode);
      // console.log('Dancer ID: ' + dancerId);
      // console.log('Timestamp: ' + timestamp);
      // console.log('Raw Data: ' + rawDataArray);
      // console.log(" [Raw Data] Received %s", stringMsg);

      const dataInstance = new TraineeTwoDataModel({ 
        trainee_id: dancerId,
        // mode,
        yaw,
        pitch,
        roll,
        accx,
        accy,
        accz,
        timestamp,
      });
      traineeTwoDocumentBatchCount += 1;
      // console.log(dataInstance);
      // traineeTwoDocumentArray.push(dataInstance);

      // if (traineeTwoDocumentArray.length == 10) {
      //   traineeTwoDocumentBatchCount += 1;
      //   TraineeTwoDataModel.insertMany(traineeTwoDocumentArray).then((err, docs) => {
      //     if (err) {
      //       console.log('Error occured in batch insert for T2 documents ', err);
      //     }
      //     console.log(`${traineeTwoDocumentBatchCount} t2 documents sent to db in batch`)
      //   })

      //   traineeTwoDocumentArray = [];
      // }

      dataInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            if (traineeTwoDocumentBatchCount % 20 == 0) {
              console.log(`t2 ${traineeTwoDocumentBatchCount} data instance sent to db`)
            }
        }
      })
    }, {
      noAck: true
    });
  });

  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'trainee_three_data';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    // assume msg to be of the format: dancerId | timestamp | yaw pitch roll accx accy accz
    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const dancerId = stringMsgArray[0].trim();
      const timestamp = stringMsgArray[1].trim();
      const rawDataString = stringMsgArray[2].trim();

      const rawDataArray = rawDataString.split(' ');
      // const mode = rawDataArray[0];
      const yaw = rawDataArray[0];
      const pitch = rawDataArray[1];
      const roll = rawDataArray[2];
      const accx = rawDataArray[3];
      const accy = rawDataArray[4];
      const accz = rawDataArray[5];
      // console.log('Mode: ' + mode);
      // console.log('Dancer ID: ' + dancerId);
      // console.log('Timestamp: ' + timestamp);
      // console.log('Raw Data: ' + rawDataArray);
      // console.log(" [Raw Data] Received %s", stringMsg);

      const dataInstance = new TraineeThreeDataModel({ 
        trainee_id: dancerId,
        // mode,
        yaw,
        pitch,
        roll,
        accx,
        accy,
        accz,
        timestamp,
      });

      traineeThreeDocumentBatchCount += 1;
      // console.log(dataInstance);
      // traineeThreeDocumentArray.push(dataInstance);

      // if (traineeThreeDocumentArray.length == 10) {
      //   traineeThreeDocumentBatchCount += 1;
      //   TraineeThreeDataModel.insertMany(traineeThreeDocumentArray).then((err, docs) => {
      //     if (err) {
      //       console.log('Error occured in batch insert for T3 documents ', err);
      //     }
      //     console.log(`${traineeThreeDocumentBatchCount} t3 documents sent to db in batch`)
      //   })

      //   traineeThreeDocumentArray = [];
      // }

      dataInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            if (traineeThreeDocumentBatchCount % 20 == 0) {
              console.log(`t3 ${traineeThreeDocumentBatchCount} data instance sent to db`)
            }
        }
      })
    }, {
      noAck: true
    });
  });

  // assume msg to be of the format: timestamp | emg 
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'emg';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
      // console.log('emg ', msg);
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const timestamp = stringMsgArray[0].trim();
      const emgDataString = stringMsgArray[1].trim();

      const emgDataArray = emgDataString.split(' ');
      const voltage = emgDataArray[0];
      // const rms = emgDataArray[1];
      // const mfq = emgDataArray[2];

      // console.log('Timestamp: ' + timestamp);
      // console.log('EMG Voltage: ' + voltage);
      // console.log('EMG RMS: ' + rms);
      // console.log('EMG MFQ: ' + mfq);

      // console.log(" [Emg] Received %s", stringMsg);

      const emgInstance = new RawEMGModel({ 
        timestamp,
        voltage,
        // rms,
        // mfq,
      });

      emgCount += 1;

      emgInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            if (emgCount % 20 == 0) {
              console.log(`emg ${emgCount} instance sent to db`)
            }
        }
      })
    }, {
      noAck: true
    });
  })

  // assume msg to be of the format: predictedMove 
  let correctMove = ''
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'results';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const stringMsgArray = stringMsg.split('|');
      const correctDancerIds = stringMsgArray[0].trim();
      const predictedMove = stringMsgArray[1].trim();
      const dancerIds = stringMsgArray[2].trim();
      const syncDelay = stringMsgArray[3].trim();
      const accuracy = stringMsgArray[4].trim();

      // console.log('Predicted Move: ' + predictedMove);

      if (resultsCount % 8 == 0) {
        correctMove = 'dab';
      } else if (resultsCount % 8 == 1) {
        correctMove = 'elbowkick';
      } else if (resultsCount % 8 == 2) {
        correctMove = 'gun';
      } else if (resultsCount % 8 == 3) {
        correctMove = 'hair';
      } else if (resultsCount % 8 == 4) {
        correctMove = 'listen';
      } else if (resultsCount % 8 == 5) {
        correctMove = 'pointhigh';
      } else if (resultsCount % 8 == 6) {
        correctMove = 'sidepump';
      } else if (resultsCount % 8 == 7) {
        correctMove = 'wipetable';
      }

      const resultInstance = new RawResultModel({
        correctDancerIds,
        predictedMove,
        dancerIds,
        syncDelay,
        accuracy,
        correctMove
      });

      resultsCount += 1;

      resultInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            if (resultsCount % 20 == 0) {
              console.log(`result ${resultsCount} instance sent to db`)
            }
        }
      })
    }, {
      noAck: true
    });
  })

  // assume msg to be of the format: mode 
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = 'mode';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
      const stringMsg = msg.content.toString();
      const mode = stringMsg.trim();

      const modeInstance = new ModeModel({ 
        mode
      });

      modeCount += 1;

      modeInstance.save((err) => {
        if (err) {
            console.log(err);
        } else {
            if (modeCount % 20 == 0) {
              console.log(`mode ${modeCount} instance sent to db`)
            }
        }
      })
    }, {
      noAck: true
    });
  })
});