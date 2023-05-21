import express from "express";
import { readdir } from "fs";
import {createRequire} from "module";
const require=createRequire(import.meta.url);



//.............................//Reddis Connection.....................///
const redis=require('redis');
const redisClient=redis.createClient();

console.log("Connecting to redis")

redisClient.on("ready",()=>{
    console.log("Connected!");
})
redisClient.on("error",(err)=>{
    console.log("Error in Connection");
})
//await
 redisClient.connect();
//.......................................//ReddisConnection..................//

// const temp='2';
// const value= await redisClient.get(temp);

// if(value!=null)
// console.log(value);
// else
// console.log("Value is Not Present")


// await redisClient.disconnect();

// redisClient.HSET('1',{
//     'name':"hello",
//      'cost':'1'
// })

// redisClient.set("1",JSON.stringify({
//     name:"1",
//     cost :100
// }))

// const value= JSON.parse(await redisClient.get('2'));
// console.log(value);
export default redisClient;