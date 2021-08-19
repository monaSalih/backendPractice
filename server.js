'use strict'
const express=require('express');
const cors=require('cors');
require('dotenv').config();
const server=express()
const axios=require('axios')
server.use(cors())
server.use(express.json());
const PORT=process.env.PORT



server.get('/',(req,res)=>{
    res.send('the server is work')
})


server.get('/charTest',getCharacter)

server.listen(PORT,()=>{
    console.log('this port work ',{PORT});
})

function getCharacter(req,res){

////localHost:3001/charTest?name=value&age=value
const url='https://psychonauts-api.herokuapp.com/api/characters?limit=10'
axios.get(url).then(data=>{
    const orgnizeData=data.data.map(item=>new Char(item))

       res.send(orgnizeData)
}
  
)
   


}

class Char{

    constructor(apiData){
        this.nameUser=apiData.name
        this.userGender=apiData.gender
        this.imgUrl=apiData.img
        this.power=apiData.psiPowers[0].name

    } 
}