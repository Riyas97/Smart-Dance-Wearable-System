const randomFloat = require('random-floating');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Creating EMG values for 5 mins
 */

function generateRawEMG() {
    let emgValues = [];
    for (let i = 0;i < 5200; i++) {
   
       const voltage = randomFloat({min: 0, max: 5, fixed: 2});
       const rms = randomFloat({min: 0, max: 5, fixed: 2});
       const mfq = randomFloat({min: 0, max: 5, fixed: 2});

       const data = {
           voltage,
           rms,
           mfq
       }
       emgValues.push(data);
    }
   
   const csvWriter = createCsvWriter({
       path: 'raw_emg.csv',
       header: [ 'voltage', 'rms', 'mfq']
   });
   
   csvWriter.writeRecords(emgValues)
       .then(() => console.log('Raw EMG csv file written'));
 }

module.exports = generateRawEMG;