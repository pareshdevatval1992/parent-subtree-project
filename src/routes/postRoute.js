// const express = require('express');
// const postSchema = require('../models/postModel');

// const router = new express.Router();

// // router.get("/", async (req, res) => {
// //     console.log(req.body);
    
// //     try{
// //         const users = await userModel.find();
// //         console.log(users);
// //         res.status(201).send(users);

// //     }catch(e){ res.status(400).send(e)} 
// // });


// router.post('/', async (req, res) => {
//     console.log("in create",req.body);
//     try{
//         const existUser = await userModel.findOne({ email:req.body.email})
//         console.log(existUser)
//         if(!existUser){
//             const user = new userModel(req.body,{fname:1,lname:1});
//             const createUSer = await user.save();
//             res.status(201).send(createUSer);
//         }else{
//             res.status(400).send({"message":"User already exists"})
//         }
//     }catch(e){ 
//         console.log(e);
//         res.status(400).send(e)
//     }
// })

// // // get one user 
// // router.get('/:id', async (req, res) => {
// //     console.log(req.params.id);
    
// //     try{
// //         const _id = req.params.id;
// //         const user = await userModel.findById({_id});
// //         if(!user){
// //             res.status(400).send("Error in getting user")
// //         }else{
            
// //             res.status(200).send(user);

// //         }

// //     }catch(e){ console.log("in error");res.status(400).send(e)} 
// // })

// module.exports = router;