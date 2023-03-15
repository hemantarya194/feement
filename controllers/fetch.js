
const Note = require('../model/data');



const showData = async (req, res) => {

	const {name}=req.params
	console.log(name);
	const mv = await Note.find({ branch: name })
	
	res.json(mv)

}



module.exports = { showData };