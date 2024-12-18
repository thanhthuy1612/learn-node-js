const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, './views/'))
app.set('view engine', 'ejs')

app.get('/', (_req: any, res: any) => {
  res.send('Hello World!')
})

app.get('/ejs', (_req: any, res: any) => {
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
