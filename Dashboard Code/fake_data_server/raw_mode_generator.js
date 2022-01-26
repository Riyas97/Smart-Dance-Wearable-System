const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function generateModeData() {
    let mode = [];
    let count = 0;
    let dataMode;
    for (let i = 0;i < 4000; i++) {
        
        if (count % 3 == 0) {
            dataMode = 'CHANGE POSITIONS';
        } else if (count % 3 == 1) {
            dataMode = 'START DANCING';
        } else if (count % 3 == 2) {
            dataMode = 'RESETTING... DO NOT MOVE...';
        }
       const data = {
           mode: dataMode
       }
       mode.push(data);
       count += 1;
    }
   
      const csvWriter = createCsvWriter({
       path: 'raw_mode.csv',
       header: [ 'mode']
   });
   
   csvWriter.writeRecords(mode)
       .then(() => console.log('Raw Mode csv file written'));
 }

module.exports = generateModeData;