var mongoose = require("mongoose");

const User = mongoose.model('User',{
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    email: {
        type: String
    },
    P_n: {
        type: Number
    },
    Profile_Image: 
    { 
        data: Buffer, 
        contentType: String 
    }
});

module.exports = { User };