
var Cryptr=require('cryptr');
var connection=require('./../config');
const cryptr = new Cryptr('myTotalySecretKey');

module.exports.register=function(req,res)
{
    var today=new Date();
    var encryptedString=cryptr.encrypt(req.body.password);
    var data=
    {
        "name":req.body.username,
        "email":req.body.email,
        "password":encryptedString,
        
    }

    connection.query("INSERT INTO users SET ?",data,function(err,result,fields)
    {
        if(err)
        {
            console.log(err);
            res.json({
                status:false,
                message:'THERE IS SOME ERROR'
            })
        }
        else 
        {
            res.json({
                status:true,
                data:result,
                message:"CONNECTED SUCCESFULLY"
            })
        }
    });
}