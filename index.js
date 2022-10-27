const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const categories = require('./Data/datas.json');
const { request } = require('express');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Running')
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = categories.find(c => c.id == id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Server running on port:', port)
})



