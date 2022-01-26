const randomFloat = require('random-floating');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Creating Data for 5 mins 
 * Since there are 8 different moves, we will yield these columns every 30 seconds 
 * The columns are timestamp, predictedMove, dancerIds, synq delay, accuracy.
 * 
 * predictedMove : 1/2/3/4/5/6/7/8
 * dancerIds : 1 2 3 / 1 3 2 / 2 1 3 / 2 3 1 / 3 1 2 / 3 2 1 
 * sync delay: 0 - 2.5s 
 * accuracy: 1 - 100%
 */

function generateResults() {
    const data = [
        {
            dancerIds: '2 1 3',
            correctDancerIds: '2 1 3',
            predictedMove: 'gun',
            correctMove: 'gun',
            syncDelay: 0.3,
            accuracy: 40
        },
        {
           dancerIds: '3 2 1',
           correctDancerIds: '3 1 2',
           predictedMove: 'gun',
           correctMove: 'hair',
           syncDelay: 0.6,
           accuracy: 50,
       },
       {
           dancerIds: '1 3 2',
           correctDancerIds: '1 3 2',
           predictedMove: 'hair',
           correctMove: 'sidepump',
           syncDelay: 0.3,
           accuracy: 40,
       },
       {
           dancerIds: '3 1 2',
           correctDancerIds: '1 2 3',
           predictedMove: 'gun',
           correctMove: 'dab',
           syncDelay: 0.2,
           accuracy: 50,
       },
       {
           dancerIds: '2 3 1',
           correctDancerIds: '2 3 1',
           predictedMove: 'listen',
           correctMove: 'listen',
           syncDelay: 0.5,
           accuracy: 60,
       },
       {
           dancerIds: '1 2 3',
           correctDancerIds: '1 3 2',
           predictedMove: 'sidepump',
           correctMove: 'sidepump',
           syncDelay: 0.5,
           accuracy: 60,
       },
       {
           dancerIds: '2 1 3',
           correctDancerIds: '2 1 3',
           predictedMove: 'elbowkick',
           correctMove: 'elbowkick',
           syncDelay: 0.5,
           accuracy: 60,
       },
       {
           dancerIds: '2 3 1',
           correctDancerIds: '2 1 3',
           predictedMove: 'hair',
           correctMove: 'listen',
           syncDelay: 0.4,
           accuracy: 70,
       },
       {
           dancerIds: '3 1 2',
           correctDancerIds: '3 1 2',
           predictedMove: 'pointhigh',
           correctMove: 'pointhigh',
           syncDelay: 0.1,
           accuracy: 30,
       },
       {
           dancerIds: '1 2 3',
           correctDancerIds: '1 2 3',
           predictedMove: 'sidepump',
           correctMove: 'gun',
           syncDelay: 0.5,
           accuracy: 60,
       },
       {
            dancerIds: '3 1 2',
            correctDancerIds: '1 3 2',
            predictedMove: 'wipetable',
            correctMove: 'listen',
            syncDelay: 0.9,
            accuracy: 60,
        },
        {
            dancerIds: '3 2 1',
            correctDancerIds: '1 2 3',
            predictedMove: 'wipetable',
            correctMove: 'wipetable',
            syncDelay: 0.3,
            accuracy: 60,
        },
        {
            dancerIds: '2 3 1',
            correctDancerIds: '2 3 1',
            predictedMove: 'dab',
            correctMove: 'dab',
            syncDelay: 0.1,
            accuracy: 60,
        },
        {
            dancerIds: '1 3 2',
            correctDancerIds: '1 3 2',
            predictedMove: 'elbowkick',
            correctMove: 'dab',
            syncDelay: 0.8,
            accuracy: 60,
        },
        {
            dancerIds: '2 1 3',
            correctDancerIds: '2 3 1',
            predictedMove: 'hair',
            correctMove: 'hair',
            syncDelay: 0.3,
            accuracy: 60,
        },
        {
            dancerIds: '1 2 3',
            correctDancerIds: '1 2 3',
            predictedMove: 'wipetable',
            correctMove: 'pointhigh',
            syncDelay: 0.4,
            accuracy: 60,
        },
        {
            dancerIds: '1 3 2',
            correctDancerIds: '1 3 2',
            predictedMove: 'pointhigh',
            correctMove: 'pointhigh',
            syncDelay: 0.5,
            accuracy: 50,
        },
        {
            dancerIds: '3 1 2',
            correctDancerIds: '1 2 3',
            predictedMove: 'elbowkick',
            correctMove: 'sidepump',
            syncDelay: 0.3,
            accuracy: 70,
        },
        {
            dancerIds: '3 2 1',
            correctDancerIds: '3 2 1',
            predictedMove: 'wipetable',
            correctMove: 'wipetable',
            syncDelay: 0.2,
            accuracy: 80,
        },
        {
            dancerIds: '2 3 1',
            correctDancerIds: '2 1 3',
            predictedMove: 'logout',
            correctMove: 'logout',
            syncDelay: 0.1,
            accuracy: 90,
        },
    ]
   
   const csvWriter = createCsvWriter({
       path: 'raw_results.csv',
       header: ['dancerIds', 'correctDancerIds', 'predictedMove', 'correctMove', 'syncDelay', 'accuracy']
   });
   
   csvWriter.writeRecords(data)
       .then(() => console.log('Raw Results csv file written'));
}

module.exports = generateResults;

// [ 'timestamp', 'dancerIds', 'predictedMove', 'syncDelay', 'accuracy']

/**
 * [
           { id: 'timestamp', title: 'timestamp' },
           { id: 'dancerIds', title: 'dancerIds' },
           { id: 'predictedMove', title: 'predictedMove'},
           { id: 'syncDelay', title: 'syncDelay'},
           { id: 'accuracy', title: 'accuracy' }, 
       ]
 */