const Users =require('../Controllers/MainSchema');


function FlowerFav(req,res){

    const {email}=req.body;
    const {name}=req.name;
    const {photo}=req.photo;


    Users.find({email:email},(err,flowerData)=>{
        if(err){
            res.send('error');
        }
        else{
            flowerData[0].flowers.push({
                name:name,
                photo:photo


            })
            flowerData[0].save();

            res.send(flowerData[0].flowers);
            
        }
    })

}
module.exports=FlowerFav;



