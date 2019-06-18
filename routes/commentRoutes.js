const { Comment } = require('../models')

module.exports = app => {
    // GET ALL COMMENTS
    app.get('/comments', (req, res) => {
        Comment.find({}, (e, comments) => {
            if(e) throw e
            res.json(comments)
        })
    })
        // GET ONE COMMENT
    app.get('/comments/:id', (req, res) => {
        Comment.findById(req.params.id, (e, comments) => {
            if(e) throw e
            res.json(comments)
        })
    })
        // POST COMMENT
    app.post('/comments', (req, res) => {
        Comment.create(req.body, e => {
            if(e) throw e
            res.sendStatus(200)
        })
    })
    app.delete('/comments/:id', (req, res) => {
        Comment.findByIdAndDelete(req.params.id, e => {
            if(e) throw e
            res.sendStatus(200)
        })
    })
}