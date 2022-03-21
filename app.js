const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const catController = require('./controllers/CatController')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.get('/', (req, res) => {
  res.send({msg: 'server running'})
})

app.get('/cats', catController.getCats)
app.get('/cats/details', catController.getCatDetails)
app.get('/cats/:catId', catController.findCat)
app.get('/cats/:catName/details/:catId/', catController.bothParams )
app.get('/cats/cats/wow/cats/dogs/and/cats', catController.getWow)
app.post('/cats', catController.createCat)
app.listen(PORT, () => console.log(`server running on ${PORT}...`))