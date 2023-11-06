const path = require('node:path'); 
const getWeather = require('./utility/weather');
const getGeo = require('./utility/geo');
const express = require('express')
const app = express()
const hbs = require('hbs')

const publicDirPath = path.join(__dirname,'../public')
console.log(publicDirPath);
app.use(express.static(publicDirPath))

const templatePath = path.join(__dirname,'../templates')
const partialPath = path.join(__dirname,'../templates/partial')

hbs.registerPartials(partialPath)

app.set('view engine', 'hbs');
app.set('views',templatePath)

app.get('/', (req, res)=> {
    res.render('index')
})
app.get('/api', function (req, res) {
    res.render('api')
})
app.get('/help', function (req, res) {
    res.render('help')
})
app.get('/weather', function (req, res) {
    if (!req.query.address) {//quary string
        res.send({error:'address not found'})
    }
    getGeo(req.query.address)
        .then((data) => {
            return getWeather(data.lat, data.log)
            //console.log(data)
        }).then((data) => {
            res.send(data)
        })
        .catch((error) => {
            res.send(error)
        })

})
app.get('*',(req, res)=>{
    res.render('404')
})


app.listen(3000)
// getWeather(31,31)
// .then((data)=>{
// console.log(data);
// })
// .catch((error)=>{
// console.log(error)
// })


