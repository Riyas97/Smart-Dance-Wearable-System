require('dotenv').config();
const App = require('./app');

App.listen(3333, () =>  {
    console.log('Backend started on port 3333');
})
