
const Note = require('../model/data');


    
const createData = async (req, res) => {
    console.log(req.body);

    let newNote = await Note.create({
        
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        birthday: req.body.birthday,
        gender: req.body.gender,
        email: req.body.email,
        rollno:req.body.rollno,
        semester: req.body.semester,
        branch: req.body.branch,
        amount: req.body.amount,
        fee_type: req.body.fee_type,
        scholer_holder:req.body.scholer_holder,
        fee_waiver:req.body.fee_waiver,
        // subject: req.body.subject,
        // phone: req.body.phone,
    amount2:2,
	fee_type2:"null",

	amount3:3,
	fee_type3:"null",

	amount4:4,
	fee_type4:"null",

	amount5:5,
	fee_type5:"null",

	amount6:6,
	fee_type6:"null",

	amount7:7,
	fee_type7:"null",

	amount8: 8,
	fee_type8:"null",


    });

    res.statusCode=302
    res.setHeader('location','/registration_form.html')
    return res.end();

    res.json(newNote)

   

       
}

module.exports = {createData};



