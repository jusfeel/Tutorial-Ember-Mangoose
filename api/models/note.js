mongoose = require('mongoose');
var noteSchema = new mongoose.Schema({
	title: 'string',
	content: 'string',
	author: 'string'
});

module.exports = mongoose.model('note', noteSchema);
