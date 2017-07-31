/**
 * Created by HUANGYE2 on 7/31/2017.
 */

var mongoose = require('mongoose');
var SchoolSchema = require('./School');

var schema = mongoose.Schema({
    name: String,
    age: Number,
    school: SchoolSchema
});

module.exports = schema;