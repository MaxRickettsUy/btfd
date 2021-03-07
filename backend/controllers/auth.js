const jwt = require("jsonwebtoken")
const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwtKey = process.env.JWT_SECRET
const jwtExpirySeconds = 300

const authController = {
  //https://www.sohamkamani.com/blog/javascript/2019-03-29-node-jwt-authentication/
  login (req, res) {
    const {username, password} = req.body;

    if (!username || !password) {
      return res.status(401).send({
        message: 'Please enter username and/or password.'
      })
    }

    User.findOne( { 'username' : username }, (err, user) => {
      if (err) {
        console.log(err)
        return res.status(401).end()
      }

      bcrypt.compare(password, user.password, (error, success) => {
        if (error) {
          // handle error
          console.log(error)
          return res.status(401).end()
        }

        if (success) {
          const token = jwt.sign({ username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
          })

          // console.log("token:", token)
          res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
          res.json({"success": true, "token": token})
          res.end()
        } else {
          res.status(400).send({'message': 'Password did not match!'});
        }
      })
    })
  },

  // adding new user (sign-up route)
  register (req,res) {
    const newuser = new User(req.body);
    
    // if ( newuser.password != newuser.password2 ){
    //   return res.status(400).json({message: "password not match"});
    // }

    User.findOne( { username : newuser.username }, (err, user) => {
      if (user) {
        return res.status(400).send({
          message : "Username exists!"
        });
      } 

      newuser.save((err, doc) => {
        if (err) {
          return res.status(400).send({
            message: "Please enter username and/or password."
          });
        }

        res.status(200).json({
          success : true,
            success : false,
            user : doc
        });
      });
    });
  },

  welcome (req, res) {
    const token = req.cookies.token

    if (!token) {
      return res.status(401).end()
    }

    try {
      payload = jwt.verify(token, jwtKey)
    } catch (e) {
      if (e instanceof jwt.JsonWebTokenError) {
        return res.status(401).end()
      }
      return res.status(400).end()
    }
    
    res.json({'username': payload.username})
  }
}

module.exports = authController;