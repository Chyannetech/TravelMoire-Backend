const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const {
    createJWT,
 } = require("../utils/auth");

 const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 

//signup
 exports.signup = (req, res, next) => {
   let { name, email, password, password_confirmation } = req.body;

//set up form validation in express APIs
   let errors = [];
   if (!name) {
     errors.push({ name: "required" });
   }
   if (!email) {
     errors.push({ email: "required" });
   }
   if (!emailRegexp.test(email)) {
     errors.push({ email: "invalid" });
   }
   if (!password) {
     errors.push({ password: "required" });
   }
   if (!password_confirmation) {
     errors.push({
      password_confirmation: "required",
     });
   }
   if (password != password_confirmation) {
     errors.push({ password: "mismatch" });
   }
   if (errors.length > 0) {
     return res.status(422).json({ errors: errors });
   }

//check if the user exists or not
//if the user is a new user, use bcrypt to hash the password before storing it in your database
User.findOne({email: email}) 
    .then(user=>{
       if(user){
          return res.status(422).json({ errors: [{ user: "email already exists" }] }); 
       }else {
          const user = new User({
            name: name,
            email: email,
            password: password,
          });
          bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
          if (err) throw err;
          user.password = hash;
          user.save()
              .then(response => {
                 res.status(200).json({
                   success: true,
                   result: response
                 })
              })
              .catch(err => {
                res.status(500).json({
                   errors: [{ error: err }]
                });
             });
          });
       });
      }
   }).catch(err =>{
       res.status(500).json({
         errors: [{ error: 'Something went wrong' }]
       });
   })
 }
 

 //signin
 exports.signin = (req, res) => {
    let { email, password } = req.body;

    //set up form validation in express APIs
    let errors = [];
     if (!email) {
       errors.push({ email: "required" });
     }
     if (!emailRegexp.test(email)) {
       errors.push({ email: "invalid email" });
     }
     if (!password) {
       errors.push({ passowrd: "required" });
     }
     if (errors.length > 0) {
      return res.status(422).json({ errors: errors });
     }

//check if the user exists or not, if user not exists, throw errors with the message user not found.
 //if the user exists, check whether the assigned and retrieved passwords are the same or not using the bcrypt.compare() method.
 //sign jwt and set the JWT token expiration time. Token will be expired within the defined duration which is 1hr in current code.
 //If succeed send the token in our response with success status(200) and user information.
    User.findOne({ email: email }).then(user => {
      if (!user) {
        return res.status(404).json({
          errors: [{ user: "not found" }],
        });
      } else {
         bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) {
             return res.status(400).json({ errors: [{ password:
"incorrect" }] 
             });
            }
      let access_token = createJWT(
        user.email,
        user._id,
        3600
      );
      jwt.verify(access_token, process.env.TOKEN_SECRET, (err,
decoded) => {
        if (err) {
           res.status(500).json({ erros: err });
        }
        if (decoded) {
            return res.status(200).json({
               success: true,
               token: access_token,
               message: user
            });
          }
        });
       }).catch(err => {
         res.status(500).json({ erros: err });
       });
     }
  }).catch(err => {
     res.status(500).json({ erros: err });
  });
}