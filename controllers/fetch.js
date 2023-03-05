
const Note = require('../model/data');
// const puppeteer = require('puppeteer');

// let serchName;
// let c=document.getElementById('cse')
// c.addEventListener('click',()=>{
//  serchName="asu";
    
// })
let  serchName;
function cse(){
	serchName='sandeep'
}



const showData = async (req, res) => {
	const mv = await Note.findOne({ first_name: serchName })
	res.json(mv)

}

module.exports = { showData };