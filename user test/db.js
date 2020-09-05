const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shri:shri@cluster0.v4jue.mongodb.net/test?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
