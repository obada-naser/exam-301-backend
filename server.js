const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.json());

const Flower=require('./models/Flower');
const FlowerFav=require('./models/FlowerFav');
const flowergetter=require('./models/FavGetter');


// const MainSchema=require('./Controllers/MainSchema');


const PORT=process.env.PORT || 3001;

// server.get('/',listningToServer);

server.get('/flowers',Flower);
server.post('/flowerFav',FlowerFav);
server.get('/flowergetter',flowergetter);
server.delete('flowerDelete',flowerDelete);
server.put('flowerUpdate',flowerUpdate);




// function listningToServer((req,res)=>{
//     res.send('hey I am here');

// })


server.listen(PORT,()=>console.log(`listning on ${PORT}`));