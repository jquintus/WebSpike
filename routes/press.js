var express = require('express');
var router = express.Router();

/* GET press page. */

router.get('/', function(req, res) {
    res.render('press');
});

module.exports = router;