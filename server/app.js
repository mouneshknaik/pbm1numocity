const express = require('express');
// const db=require('../server/config').pool;
const service = require('../server/service');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const portNum = 3000;
app.use(bodyParser());
app.use(cors());
app.get('/energyInfo', cors(), (req, res) => {
    // console.log(req.params);
    service.read(res);
});
app.post('/energyInfo',cors(), (req, res) => {
    // console.log(req.body);
    service.insert(req.body, res);
});
app.put('/energyInfo',cors(), (req, res) => {
    console.log(req.body);
    service.update(req.body,res);
});
app.delete('/energyInfo',cors(), (req, res) => {
    console.log(req.query);
    service.delete(req.query,res);
});

app.listen(portNum, () => {
    console.log('port Listning...! at ' + portNum);
});

