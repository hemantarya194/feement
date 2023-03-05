
const express = require('express');
const user = require('../model/user')
const bcrypt = require('bcrypt')

const app = express();




app.get('/', (req, res) => {
    res.json({ fuckYOU: 'its home page' })
})

const loginData = async (req, res) => {
    console.log(req.body);
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(`${email}.and.${password}`);
        const userMatch = await user.find({ first_name: email, middle_name: password })


            // .then(user => {
            //     if(user)
            //     {
            //         bcrypt.compare(password,user.password, function(err,result){
            //             if(err){
            //                 res.json({
            //                     error:err
            //                 })
            //                 console.log(err);
            //             }if(result){
            //                 console("thanx you are valid")
            //             }
            //     // else{
            //     //             console("pass not match")
            //     //         }
                        
            //         })
            //     }else{
            //         console.log("no user found")
            //     }
            // })
                
                 


        if (email == "asu" & password == "lodu") {
            console.log("valid candidate");

            res.statusCode = 302
            res.setHeader('location', '/Batches.html')
            return res.end();

        } else {
            alert('chutiya')
            res.statusCode = 302
            res.setHeader('location', '/login.html')
            return res.end();

            res.json({ userMatch })
            console.log("gand mara");
        }
    } catch {
        console.log("invalid info");
    }


}


module.exports = { loginData };
// app.post('/register', async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password = req.body.password;
//         console.log(`${email}.and.${password}`);
//         const userCreated = await user.create(req.body)
//         res.json({ userCreated })
//     } catch {

//         console.log("invalid info");

//     }
// })