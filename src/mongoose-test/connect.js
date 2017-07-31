/**
 * Created by yellowb on 2017/7/30.
 */

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var promise = mongoose.connect('mongodb://localhost:27017/test', {
    useMongoClient: true
    /* other options */
});
promise.then(function(db) {
    console.log('DB connected!');
    console.log(db);
}).catch(function(err) {
    console.log('DB connect failed!');
    console.log(err.stack);
});

var kittySchema = mongoose.Schema({
    name:   { type: String, lowercase: true },
    age:     { type: Number, min: 18, max: 65 },
});
var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Chick', age: 20 });
silence.save(function (err, silence) {
    if (err) return console.error(err);
    else console.log(JSON.stringify(silence, null, 2));
});
Kitten.find({}).exec().then(function(docs) {
    console.log(docs[0].toJSON());
    docs[4].age = 29;
    docs[4].save();
});