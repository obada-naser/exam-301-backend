const Users =require('../Controllers/MainSchema');

function getFav(req,res){

    let email=req.query.email;

    Users.find(email:email,function(err,flowerData){


        if(err){
            console.log('hello from error');

        }
        else{
            res.send(flowerData);
        }
    })
}
module.exports=getFav;