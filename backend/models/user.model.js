var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt = 10;

const Schema = mongoose.Schema;

// email:{
//     type: String,
//     required: true,
//     trim: true,
//     unique: 1
// },
// confirmPassword:{
//   type:String,
//   required: true,
//   minlength:8
// }
const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      trim: true,
      unique: 1
    },
    password:{
        type:String,
        required: true,
        minlength:8
    },
   token:{
        type: String
    }
});

userSchema.pre('save',function(next){
  var user = this;
  
  if(user.isModified('password')){
    bcrypt.genSalt(salt,function(err,salt){
      if(err){
        return next(err);
      }

      bcrypt.hash(user.password,salt,function(err,hash){
        if(err) {
          return next(err);
        } 

        user.password=hash;
        // user.password2=hash;
        next();
      })
    })
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;