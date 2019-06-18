const axios = require('axios')
const cheerio = require('cheerio')
const db = require('mongojs')('nyt_db')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)


require('mongoose').connect('mongodb://localhost/nyt_db', {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true
})
    .then(_ => app.listen(3000))
    .catch(e => console.log(e))


axios.get('https://www.nytimes.com/section/technology')
    .then(({ data }) => {
        const $ = cheerio.load(data)

        const newsArr = []

        $('.css-4jyr1y').each((i, elem) => {
            newsArr.push({
                title: $(elem).find('a').children('.css-1dq8tca').text(),
                body: $(elem).find('a').children('.css-1echdzn').text(),
                link: `https://www.nytimes.com${$(elem).find('a').attr('href')}`,
            })
        })
        db.medias.insert(newsArr, _ => console.log('News added!'))
    })
    .catch(e => console.log(e))
