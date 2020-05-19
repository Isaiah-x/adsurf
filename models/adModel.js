const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [ true, 'Your Ad must have a name' ]
	},
	Description: {
		type: String,
		trim: true,
		required: [ true, 'Please give a description' ]
	},
	location: {
		type: String
	}
});
