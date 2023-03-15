
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
        phone: req.body.phone,
        rollno:req.body.rollno,
        semester: req.body.semester,
        branch: req.body.branch,
        subject: req.body.subject,
        amount: req.body.amount,
        fee_type: req.body.fee_type,
        scholer_holder:req.body.scholer_holder,
        fee_waiver:req.body.fee_waiver


    });

    res.statusCode=302
    res.setHeader('location','/registration_form.html')
    return res.end();

    res.json(newNote)

   

       
}

module.exports = {createData};



