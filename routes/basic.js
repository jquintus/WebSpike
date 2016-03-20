

var routerFactory = function(title, subtitle) {
    var express = require('express');
    var router = express.Router();
    router.get('/', function(req, res) {
        var params = {
            title: "Ksenia Winnicki",
            subtitle: subtitle
        };
        res.render(subtitle, params);
    });
    
    return router;
};

module.exports = routerFactory;