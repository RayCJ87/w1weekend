'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('./abb/index');
    });

    // app.get('/about', function(req, res) {
    //     res.render('pages/about');
    // });
};