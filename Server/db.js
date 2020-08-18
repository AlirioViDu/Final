const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/MEAN';

mongoose.connect(URI)
    .then(db => console.log('Conectado'))
    .catch(err => console.log(err));

module.exports = mongoose;
