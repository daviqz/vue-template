const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.post('/register', (req, res) => {
    console.log(req.body)
    if(req.body.name === '1') {
        res.send('O nome não pode ser 1!')
    } else {
        res.send('Sucesso!')
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})