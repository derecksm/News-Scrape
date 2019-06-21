const { Media } = require('../models')
const axios = require('axios')
const cheerio = require('cheerio')
// const db = require('mongojs')('nyt_db')

module.exports = app => {
    app.get('/media', (req, res) => {
        axios.get('https://www.nytimes.com/section/technology')
            .then(({ data }) => {
                const $ = cheerio.load(data)

                

                $('.css-4jyr1y').each((i, elem) => {
                   Media.create({
                        title: $(elem).find('a').children('.css-1dq8tca').text(),
                        body: $(elem).find('a').children('.css-1echdzn').text(),
                        link: `https://www.nytimes.com${$(elem).find('a').attr('href')}`,
                    })
                })
                 res.json({success: true})
            })
    })

    //create get route to read database and send back data as response
    app.get('/media2', (req, res) => {
        Media.find({}, (e, media2) => {
            if(e) throw e
            res.json(media2)
        })
    })
}