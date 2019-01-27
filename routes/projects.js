var express = require('express');
var router = express.Router();
var AllProjectList = require('./../models/projects');

router.get('/', (req, res, next) => {
    return res.send('Server init..');
})

router.get('/allprojects', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    AllProjectList.find({}, (err, projectlist) => {
        if (err)
            return res.send(err)
        res.send(projectlist);
    });
});

module.exports = router;