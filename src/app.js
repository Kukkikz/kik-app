const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('', (req, res) => {
    res.send('Hello express!')
})

app.post('/users', (req,res) => {
    console.log(req.body)
    res.send('user ' + req.body.name + ' created! (but not really)')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})