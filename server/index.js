const cards = require('./cards.json')
const todo = require('./todos.json')
const prop = require('./properties.json')
const users = require('./users.json')


const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())


app.get('/api/cards', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(cards));
})

app.get('/api/todos', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(todo));
})

app.get('/api/properties', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(prop));
})

app.get('/api/users', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(users));
})


var server = app.listen(8080, () => {
    console.log('app listening on port 8080')
    console.log('source : http://localhost:8080/')
})