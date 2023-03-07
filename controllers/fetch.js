
const Note = require('../model/data');


const serchName="sandeep"

// function hehe()
// {
	
// 	console.log("hsdgeh")
// }
//  hehe();

const showData = async (req, res) => {
	
	const mv = await Note.find({ first_name: serchName })
	
	res.json(mv)

}



module.exports = { showData };