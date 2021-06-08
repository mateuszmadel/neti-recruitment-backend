const express = require('express')
const bodyParser = require('body-parser')
const router = require('express').Router();
const cors = require('cors');
const app = express()
const port = 4000



router.post('/', async (req, res)=> {
    try {
        const {firstName, lastName, email, opinion} = req.body;
        console.log(`--${firstName} - ${lastName} - ${opinion} - ${email}--`)
        res.status(201).send();
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.use(bodyParser.json())
app.use(cors())
app.use('/',router)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
