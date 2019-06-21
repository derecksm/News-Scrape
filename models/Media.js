module.exports = (Schema, model) => {
    const Media = new Schema({
        title: {
            type: String,
            unique: true
        },
        body: String,
        link: String,
        commentor: {
            type: Schema.Types.ObjectId, 
            ref: 'Comment'
        } 
    })
    return model('Media', Media)
}