
var Cryptr=require('cryptr');
var connection=require("./../config");
const cryptr = new Cryptr('myTotalySecretKey');

module.exports.authenticate=function(req,res)
{
    var email=req.body.email;
    var password=req.body.password;

    connection.query('SELECT * FROM users WHERE email=?',[email],function(err,results,fields)
    {
         if(err)
         {
             console.log(err);
             res.json({
                 status:false,
                 message:'THERE IS SOME ERROR'
             })
         }//if block
         else
         {
             if(results.length>0)
             {
                 decrytString=cryptr.decrypt(results[0].password);
                 if(password==decrytString)
                 {
                     res.redirect('welcome.html');
                     res.json(
                         {
                            status:true,
                            message:"CONNECTED SUCCESFULLY"
                         })
                 }//if block of password verification
                 else 
                 {
                     res.redirect('login.html')
                    res.json(
                        {
                           status:false,
                           message:"NOT CONNECTED SUCCESFULLY"
                        });
                 }//else inside main else block
             }//if block inside main else block
             else{
                res.json({
                    status:false,    
                  message:"Email does not exits"
                });
         }//else main block
    }
});//connection block
}//function block
