const {User} = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    User.findOne({
        where:{
            email : req.body.email
        }
    }).then( (user)=>{
        if(!user){
          return  res.status(401).send({message:"Datos invalidos"})
        }
        var valided=bcrypt.compareSync(req.body.password,user.password);

        if(!valided){
          return  res.status(401).send({message:"Datos invalidos"})
        }

        var tokenAccess= jwt.sign({id:user.id},process.env.SECRET,{
            expiresIn:86400
        });
        user.token=tokenAccess;
        res.status(200).send({
            user,
            tokenAccess
        })

    })
}
module.exports = login