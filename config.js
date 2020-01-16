var mysql=require('mysql');
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        database:'test',
        password:'MariaDB'
    });
    connection.connect(function(err)
    {
        if(!err)
        {
            console.log("CONNECTION IS ESTABLISHED SUCCESFULLY");
        }
        else 
        {
            console.log("SOME ERROR OCCURED WHILE CONNECTING TO DATABSE");
        }
    });
    module.exports = connection;