const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('HireQuotient backend')
// })

app.use(express.static("client"));

const pdfRouter = require('./routes/pdf')
app.use('/api/pdf', pdfRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})