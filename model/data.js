const mongoose = require('mongoose');
const moment = require('moment');

const moviesSchema = mongoose.Schema({

	first_name: String,
	middle_name: String,
	last_name: String,
	birthday:Date,
	gender: String,
	email: String,
	semester: String,
	branch: String,
	rollno:Number,
	amount: Number,
	fee_type: String,
	fee_waiver:String,
	scholer_holder:String,
	// phone: Number,
	// subject: String,
	
	// second sem
	amount2:Number,
	fee_type2:String,

	amount3:Number,
	fee_type3:String,

	amount4:Number,
	fee_type4:String,

	amount5:Number,
	fee_type5:String,

	amount6:Number,
	fee_type6:String,

	amount7:Number,
	fee_type7:String,

	amount8:Number,
	fee_type8:String,

	
})

// model

const Note = mongoose.model('Note', moviesSchema);
module.exports=Note