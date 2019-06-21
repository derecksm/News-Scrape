module.exports = app => {
    require('./commentRoutes.js')(app),
    require('./mediaRoutes.js')(app)
}
