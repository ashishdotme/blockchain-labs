let contract = require('./contract')
let method = require('./method')
const express = require('express')

const app = express()
app.use(express.json())

const port = 8080

app.get('/symbol', async (req, res) => {
  res.send(await contract.getSymbol())
})

app.post('/transfer', async (req, res) => {
  let account_to = req.body.account_to
  let amount = req.body.amount
  res.send(await method.transferToken(account_to, amount))
})

app.listen(port, () => console.log(`listening on port`))
