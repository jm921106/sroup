/**
 * Created by superMoon on 2016-07-19.
 */
var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/sroup'; //MongoDB URI

exports.connect = function() {
    mongoose.connect(dbURI); // mongoose 모듈에 URI를 연결

    mongoose.connection.on('connected', function() {
        console.log('Succeed to connect DB : ' + dbURI);
    });

    mongoose.connection.on('error' , function(err) {
        console.log('Failed to connect DB : ' + err);
    });

    mongoose.connection.on('disconnected', function() {
        console.log('DB connection has disconnected.');
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('App process gone!');
            process.exit(0);
        }) ;
    });
};