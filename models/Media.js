module.exports = (Schema, model) => {
    const Media = new Schema({
        title: String,
        body: String,
        link: String
    })
    return model('Media', Media)
}