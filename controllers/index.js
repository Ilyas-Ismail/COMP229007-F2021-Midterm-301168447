// File name: app.js
// Author: JViniX
// Date: 10/25/2021 (October 25th, 2021)

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
