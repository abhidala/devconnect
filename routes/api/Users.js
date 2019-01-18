const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcrypt.js');
//Load User model
const User = require('../../models/User');
router.get('/test', (req,res) => res.json({msg:"Users Works"}));


router.post('/register',(req,res)=>{User.findOne({email: req.body.email}).then(user=>{if(user){return res.status(400).json({email: 'Email already exists'}else {
    const avatar = gravatar.url(req.body.email, {s: '200' //Size,
r: 'pg' //Rating,
d: 'mm' //Default });
    
    const newUser = new User({
        name: req.body.name,
        email:req.body.email,
        avatar: avatar,
        password:req.body.passowrd,
    });
    bcrypt.genSalt(10,(err,salt) => {
       bcrypt.hash(newUser.password, salt, (err,hash) =>{
        if(err) throw err;
        newUser.password = hash;
        newUser.save().then(user => res.json(user)).catch(err => console.log(err));

const User = require('../../models/User');
router.get('/test', (req,res) => res.json({msg:"Users Works"}));


router.post('/register',(req,res)=>{User.findOne({email: req.body.email}).then(user=>{if(user){return res.status(400).json({email: 'Email already exists'}else {
    const newUser = new User({err)
       }) 
})
}
});

});
module.exports = router;