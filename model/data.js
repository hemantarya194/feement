const mongoose = require('mongoose');
const moment = require('moment');

const moviesSchema = mongoose.Schema({

	first_name: String,
	middle_name: String,
	last_name: String,
	birthday: {
		type: Date,
		required: true,
		set: function(birthday) {
		  // Set time component to midnight (00:00:00)
		  return moment(birthday).startOf('day').toDate();
		}
	  },
	gender: String,
	email: String,
	phone: Number,
	semester: String,
	branch: String,
	subject: String,
	amount: Number,
	fee_type: String,
	fee_waiver:String,
	scholer_holder:String
})

// model

const Note = mongoose.model('Note', moviesSchema);
module.exports=Note