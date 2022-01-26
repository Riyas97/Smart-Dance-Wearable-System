const randomFloat = require('random-floating');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Creating Data for 5 mins 
 * Since 60 results are output per 2.5 seconds ==> In 5 mins, 7200 results are output. 
 * Since there are 8 dances, there will be 8 distinct ranges, having 900 results each.
 * Timestamp is generated in db for now.
 * The columns are trainee_id, mode, yaw, pitch, roll, accx, accy, accz.
 * 
 * yaw : [-179.98, 179.93]
 * pitch : [-179.22, 179.49]
 * roll: [-179.22, 179.93]
 * accx: [-14947, 20173]
 * accy: [-17891, 19191]
 * accz: [-15197, 10271]
 */

function generateRawData() {
    let danceMove_1 = [];
    let trainee_id_1 = 0;
    for (let i = 0;i < 400; i++) {
       const yaw = randomFloat({min: -120, max: -80, fixed: 2});
       const pitch = randomFloat({min: -40, max: 50, fixed: 2});
       const roll = randomFloat({min: 60, max: 100, fixed: 2});
       const accx = randomFloat({min: -13000, max: 0, fixed: 4});
       const accy = randomFloat({min: -1000, max: -6700, fixed: 4});
       const accz = randomFloat({min: -7000, max: 13000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_1,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_1.push(data);
   
       if (trainee_id_1 == 0) {
           trainee_id_1 = 1;
       } else if (trainee_id_1 == 1) {
           trainee_id_1 = 2;
       } else if (trainee_id_1 == 2) {
           trainee_id_1 = 0;
       }
    }
   
    let danceMove_2 = [];
    let trainee_id_2 = 0;
    for (let i = 0;i < 400; i++) {
       const yaw = randomFloat({min: 20, max: 70, fixed: 2});
       const pitch = randomFloat({min: -150, max: 0, fixed: 2});
       const roll = randomFloat({min: -30, max: 40, fixed: 2});
       const accx = randomFloat({min: -3000, max: 10000, fixed: 4});
       const accy = randomFloat({min: 5000, max: 13000, fixed: 4});
       const accz = randomFloat({min: 7000, max: 15000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_2,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_2.push(data);
   
       if (trainee_id_2 == 0) {
           trainee_id_2 = 1;
       } else if (trainee_id_2 == 1) {
           trainee_id_2 = 2;
       } else if (trainee_id_2 == 2) {
           trainee_id_2 = 0;
       }
    }
   
    let danceMove_3 = [];
    let trainee_id_3 = 0;
    for (let i = 0;i < 400; i++) {
        const yaw = randomFloat({min: 40, max: 110, fixed: 2});
        const pitch = randomFloat({min: 10, max: 80, fixed: 2});
        const roll = randomFloat({min: -160, max: 0, fixed: 2});
        const accx = randomFloat({min: -10000, max: -4000, fixed: 4});
        const accy = randomFloat({min: -2000, max: 8000, fixed: 4});
        const accz = randomFloat({min: 0, max: 7000, fixed: 4});
        // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_3,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_3.push(data);
   
       if (trainee_id_3 == 0) {
           trainee_id_3 = 1;
       } else if (trainee_id_3 == 1) {
           trainee_id_3 = 2
       } else if (trainee_id_3 == 2) {
           trainee_id_3 = 0;
       }
    }
   
    let danceMove_4 = [];
    let trainee_id_4 = 0;
    for (let i = 0;i < 400; i++) {
   
       const yaw = randomFloat({min: 70, max: 150, fixed: 2});
       const pitch = randomFloat({min: 30, max: 120, fixed: 2});
       const roll = randomFloat({min: -120, max: -20, fixed: 2});
       const accx = randomFloat({min: -5000, max: 4000, fixed: 4});
       const accy = randomFloat({min: -12000, max: 2000, fixed: 4});
       const accz = randomFloat({min: 4000, max: 15000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

   
       const data = {
           trainee_id: trainee_id_4,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_4.push(data);
   
       if (trainee_id_4 == 0) {
           trainee_id_4 = 1;
       } else if (trainee_id_4 == 1) {
           trainee_id_4 = 2
       } else if (trainee_id_4 == 2) {
           trainee_id_4 = 0;
       }
    }
   
    let danceMove_5 = [];
    let trainee_id_5 = 0;
    for (let i = 0;i < 400; i++) {
   
       const yaw = randomFloat({min: -20, max: 50, fixed: 2});
       const pitch = randomFloat({min: -60, max: 20, fixed: 2});
       const roll = randomFloat({min: 40, max: 110, fixed: 2});
       const accx = randomFloat({min: -2000, max: 5000, fixed: 4});
       const accy = randomFloat({min: 2000, max: 11000, fixed: 4});
       const accz = randomFloat({min: -5000, max: 3000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_5,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_5.push(data);
   
       if (trainee_id_5 == 0) {
           trainee_id_5 = 1;
       } else if (trainee_id_5 == 1) {
           trainee_id_5 = 2
       } else if (trainee_id_5 == 2) {
           trainee_id_5 = 0;
       }
    }
   
    let danceMove_6 = [];
    let trainee_id_6 = 0;
    for (let i = 0;i < 400; i++) {
   
       const yaw = randomFloat({min: 70, max: 160, fixed: 2});
       const pitch = randomFloat({min: 20, max: 120, fixed: 2});
       const roll = randomFloat({min: -140, max: -20, fixed: 2});
       const accx = randomFloat({min: -6000, max: 2000, fixed: 4});
       const accy = randomFloat({min: -4000, max: 7000, fixed: 4});
       const accz = randomFloat({min: -8000, max: -3000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;;
   
       const data = {
           trainee_id: trainee_id_6,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_6.push(data);
   
       if (trainee_id_6 == 0) {
           trainee_id_6 = 1;
       } else if (trainee_id_6 == 1) {
           trainee_id_6 = 2
       } else if (trainee_id_6 == 2) {
           trainee_id_6 = 0;
       }
    }
   
    let danceMove_7 = [];
    let trainee_id_7 = 0;
    for (let i = 0;i < 400; i++) {
   
       const yaw = randomFloat({min: -40, max: 50, fixed: 2});
       const pitch = randomFloat({min: -30, max: 80, fixed: 2});
       const roll = randomFloat({min: 20, max: 120, fixed: 2});
       const accx = randomFloat({min: -9000, max: 1000, fixed: 4});
       const accy = randomFloat({min: -5000, max: 3000, fixed: 4});
       const accz = randomFloat({min: -7000, max: -1000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_7,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_7.push(data);
   
       if (trainee_id_7 == 0) {
           trainee_id_7 = 1;
       } else if (trainee_id_7 == 1) {
           trainee_id_7 = 2
       } else if (trainee_id_7 == 2) {
           trainee_id_7 = 0;
       }
    }
   
    let danceMove_8 = [];
    let trainee_id_8 = 0;
    for (let i = 0;i < 400; i++) {
   
       const yaw = randomFloat({min: 40, max: 130, fixed: 2});
       const pitch = randomFloat({min: 60, max: 160, fixed: 2});
       const roll = randomFloat({min: 20, max: 120, fixed: 2});
       const accx = randomFloat({min: 5000, max: 14000, fixed: 4});
       const accy = randomFloat({min: 2000, max: 8000, fixed: 4});
       const accz = randomFloat({min: 7000, max: 15000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_8,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_8.push(data);
   
       if (trainee_id_8 == 0) {
           trainee_id_8 = 1;
       } else if (trainee_id_8 == 1) {
           trainee_id_8 = 2
       } else if (trainee_id_8 == 2) {
           trainee_id_8 = 0;
       }
    }

    let danceMove_9 = [];
    let trainee_id_9 = 0;
    for (let i = 0;i < 400; i++) {
   
       const yaw = randomFloat({min: 40, max: 130, fixed: 2});
       const pitch = randomFloat({min: 60, max: 160, fixed: 2});
       const roll = randomFloat({min: 20, max: 120, fixed: 2});
       const accx = randomFloat({min: 5000, max: 14000, fixed: 4});
       const accy = randomFloat({min: 2000, max: 8000, fixed: 4});
       const accz = randomFloat({min: 7000, max: 15000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_9,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_9.push(data);
   
       if (trainee_id_9 == 0) {
        trainee_id_9 = 1;
       } else if (trainee_id_9 == 1) {
        trainee_id_9 = 2
       } else if (trainee_id_9 == 2) {
        trainee_id_9 = 0;
       }
    }

    let danceMove_10 = [];
    let trainee_id_10 = 0;
    for (let i = 0;i < 400; i++) {
   
       const yaw = randomFloat({min: 40, max: 130, fixed: 2});
       const pitch = randomFloat({min: 60, max: 160, fixed: 2});
       const roll = randomFloat({min: 20, max: 120, fixed: 2});
       const accx = randomFloat({min: 5000, max: 14000, fixed: 4});
       const accy = randomFloat({min: 2000, max: 8000, fixed: 4});
       const accz = randomFloat({min: 7000, max: 15000, fixed: 4});
       // const mode = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
   
       const data = {
           trainee_id: trainee_id_10,
           // mode,
           yaw,
           pitch,
           roll,
           accx,
           accy,
           accz
       }
       danceMove_10.push(data);
   
       if (trainee_id_10 == 0) {
           trainee_id_10 = 1;
       } else if (trainee_id_10 == 1) {
           trainee_id_10 = 2
       } else if (trainee_id_10 == 2) {
           trainee_id_10 = 0;
       }
    }
   
   
    let finalData = []
   
    finalData = [...danceMove_1, ...danceMove_2, ...danceMove_3, ...danceMove_4, ...danceMove_5, ...danceMove_6, ...danceMove_7, ...danceMove_8, ...danceMove_9, ...danceMove_10];
   
   // header: [ 'trainee_id', 'mode', 'yaw', 'pitch', 'roll', 'accx', 'accy', 'accz']
   const csvWriter = createCsvWriter({
       path: 'raw_data.csv',
       header: [ 'trainee_id', 'yaw', 'pitch', 'roll', 'accx', 'accy', 'accz']
   });
   
   csvWriter.writeRecords(finalData)
       .then(() => console.log('Raw Data csv file written'));
 }

module.exports = generateRawData;