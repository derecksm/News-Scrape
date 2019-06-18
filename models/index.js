const { Schema, model } = require('mongoose')

const db = {
    Comment: require('./Comment.js')(Schema, model),
    Media: require('./Media.js')(Schema, model)
}

module.exports = db