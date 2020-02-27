const User = require('../models/User')
const bcrypt = require('bcrypt');

module.exports = {
  async index(req, res) {
    res.json({
        message:'🔐'
    })
    
  },
  
  async signup(req, res, next) {
    const {name,email,password} = req.body;

    if (validateUser(req.body)){
      const user = await User.findOne({
        where:{
        email:email
        }
      })
     
      if (!user) {

        bcrypt.hash(req.body.password, 10, function(err, hash) {
          console.log(hash);
          User.create({
            name:req.body.name,
            email:req.body.email,
            password:hash
            

          })
          return res.json(req.body.name);
        });
        
      }else{
      
      return next('in use');

    }
  
    }else{
      
      return next(new Error('Invalid User'));
    }
  
  
  
  },

  async login (req, res, next) {
    if(validateUser(req.body)){
      const {name,email,password} = req.body;

      const user = await User.findOne({
        where:{
        email:email
        }
      })
      if(user){
        bcrypt.compare(req.body.password, user.password).then(function(result) {
          
        
          return res.json("logado");

        });
        /*console.log('Signed Cookies: ', req.signedCookies)
        console.log('Cookies: ', req.cookies)
 
        res.cookie('user_id',user.id,{
          httpOnly:true,
          //secure:true,
          signed:true,

        });*/

      }else{
        next(new Error('Invalid login'));
      }


    }else{

      next(new Error('Invalid login'));
    }

    
  },
  



};
  
function validateUser(aux){
const validEmail= typeof aux.email=='string' && aux.email.trim()!='';
const validPassword= typeof aux.password=='string' && aux.password.trim()!='' && aux.password.trim().length>6;

return validEmail,validPassword;
}