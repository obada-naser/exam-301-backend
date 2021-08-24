const axios=require('axios');


function getFlowers(req,res){
    const URL='https://flowers-api-13.herokuapp.com/getFlowers';
    axios.get(URL)
    .then(item=>{
            let flowersData=item.data;

            res.send(flowerObj(flowersData));



    })

    .catch(err=>{
        res.send(err);
    })



}


const flowerObj=(flowerArr)=>{
    let newArr=flowerArr.flowerslist;

    const flowerJson=[];
    newArr.map(item=>{
        const instructions=item.instructions;
        const photo=item.photo;
        const name=item.name;
        flowerJson.push(new flowerlists(instructions,photo,name));
    })
    return flowerJson;
    
}


class flowerlists{


    constructor(instructions,photo,name){

        this.instructions=instructions,
        this.photo=photo,
        this.name=name
    }



}



module.exports=getFlowers;