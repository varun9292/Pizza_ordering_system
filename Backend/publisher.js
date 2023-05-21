import express from "express";
import {createRequire} from "module";
const require=createRequire(import.meta.url);
const amqp= require('amqplib/callback_api');
let ch=null,queueName;
amqp.connect('amqp://localhost',(err,connection)=>{

    if(err)
    {
        console.log(err);
    }
    connection.createChannel((err,channel)=>{

        if(err)
        {
            console.log(err);
        }
        ch=channel;
        queueName ="pizza";
        channel.assertQueue(queueName,{
            durable:false
        })
    })
    // setTimeout(()=>{
    //     connection.close();
    //   },1000)
})

const publishtoQueue= async(message)=>{  
    ch.sendToQueue(queueName,Buffer.from(JSON.stringify(message)));
  //ch.sendToQueue(queueName,Buffer.from(message));
    console.log("message sent to queue");
}

export default publishtoQueue;

export {queueName};