module.exports = (Schema, model) => {
    const Comment = new Schema({
        title: String,
        body: String,
    })
    return model('Comment', Comment)
}

