import express from 'express'
import {
  readProvinces,
  readRegencies,
  readDistricts,
  readVillages,
  readPostalCode,
} from './lib/reader'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (_, res) => {
  res.json({
    message: 'Welcome to ID Postalcode API',
  })
})

app.get('/provinces', (_, res) => {
  res.json({
    data: readProvinces(),
  })
})

app.get('/provinces/:code', (req, res) => {
  res.json({
    data: readRegencies(Number(req.params.code)),
  })
})

app.get('/regencies/:code', (req, res) => {
  res.json({
    data: readDistricts(Number(req.params.code)),
  })
})

app.get('/districts/:code', (req, res) => {
  res.json({
    data: readVillages(Number(req.params.code)),
  })
})

app.get('/villages/:code', (req, res) => {
  res.json({
    data: readPostalCode(Number(req.params.code)),
  })
})

if (process.env.NODE_ENV === 'development') {
  app.listen(3000, () => console.log(`Server running on port ${3000}`))
}

export default app
