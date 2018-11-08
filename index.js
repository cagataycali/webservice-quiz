const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const calculate = require('./calculate')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let weather = [
  {
    il: "İzmir",
    rapor: {
      derece: "20",
      durum: "Güneşli"
    }
  },
  {
    il: "Ankara",
    rapor: {
      derece: "22",
      durum: "Bulutlu"
    }
  },
  {
    il: "Adana",
    rapor: {
      derece: "30",
      durum: "Güneşli"
    }
  },
  {
    il: "Van",
    rapor: {
      derece: "10",
      durum: "Kapalı"
    }
  },
  {
    il: "Trabzon",
    rapor: {
      derece: "15",
      durum: "Sağanak Yağışlı"
    }
  },
  {
    il: "Diyarbakır",
    rapor: {
      derece: "20",
      durum: "Kapalı"
    }
  },
]

app.get('/', (req, res) => res.json(weather))

app.get('/:il', (req, res) => {
  let il = weather.filter(piece => piece.il.toLowerCase() == req.params.il.toLowerCase())
  res.json(il)
})


app.post('/', (req, res) => {
  let {motor_hacmi, yas} = req.body
  res.json(calculate(motor_hacmi, yas))
})

app.listen(port, () => console.log(`Service listening on port ${port}!`))
