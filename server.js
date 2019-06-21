const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)


require('mongoose').connect('mongodb://localhost/nyt_db', {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true
})
    .then(_ => app.listen(3000))
    .catch(e => console.log(e))


// require('dotenv').config()

// const express = require('express')
// const app = express()

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// require('./routes')(app)

// const port = process.env.PORT || 3000

// if (port === 3000) {
//     var MONGODB_URI = `mongodb://localhost/${process.env.MONGO_DB}`
// } else {
//     var MONGODB_URI = process.env.MONGODB_URI
// }

// require('mongoose').connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
//   .then(_ => app.listen(port, () => console.log(`server running on port ${port}`)))
//   .catch(e => console.log(e))
