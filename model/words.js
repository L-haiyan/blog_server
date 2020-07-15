const mongoose = require('mongoose');
const WordsSchema = new mongoose.Schema({
    username: {
        type: String
    },
    content: {
        type: String
    },
    time: {
        type: String
    },
    replay: {
        type: String
    }
})


const Words = mongoose.model('Words',WordsSchema)


module.exports = {
    Words
}