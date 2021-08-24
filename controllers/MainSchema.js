'use strict';

require('dotenv').config();

const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/Flowers', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
const flowerSchema = new mongoose.Schema({

    instructions:String,
    photo:String,
    name:String,

  });

  const userSchema= new mongoose.Schema({

    email:String,
    flowers:[myFavouriteFlowers]

  })




  const Users = mongoose.model('Users', userSchema);


  function flowersSeeds(){


    const user1=new Users({
        email:'obadanaser135@gmail.com',
        flowers:[

            {
                "instructions":"gsjpms",
               "photo":"photo",
               "name":"anything"
            }
        ]
    })
    user1.save();
    const user2=new Users({
        email:'roaa.abualeeqa@gmail.com',
        flowers:[

            {
                "instructions":"gsjpms",
               "photo":"photo",
               "name":"anything"
            }
        ]
    })
    user2.save();
  }
  flowersSeeds();


  module.exports=Users;



