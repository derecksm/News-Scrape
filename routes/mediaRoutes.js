const Media = require('../models/Media.js')

module.exports = app => {
    app.get('/medias', (req, res) => {
        Media.find({}, (e, medias) => {
            if(e) throw e
            res.json(medias)
        })
    })
}