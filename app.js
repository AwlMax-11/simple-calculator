const express = require('express')
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({encoded: true}))

app.get('', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.post('/', (req, res) => {
    const result1 = Number(req.body.num1)
    const result2 = Number(req.body.num2)

    const add = result1 + result2
    res.send("result: " + add)
})

app.listen(3000)
