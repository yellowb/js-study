/**
 * Created by yellowb on 2017/7/30.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/test');

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//    console.log('DB connected!');
//});

var promise = mongoose.connect('mongodb://localhost:27017/test', {
    useMongoClient: true,
    /* other options */
});
promise.then(function(db) {
    console.log('DB connected!');
    console.log(db);
});