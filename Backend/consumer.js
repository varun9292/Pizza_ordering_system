import express from "express";
import {createRequire} from "module";
const require=createRequire(import.meta.url);
const amqp= require('amqplib/callback_api');
let ch;
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
    })
})

const consumeQueue=async(queueName)=>{
    console.log("Message Recived to Queue");
    ch.consume(queueName,(msg)=>
    {
        console.log("order taken and being prepared");
        //console.log(JSON.parse(msg.content));
        // ch.ack("Order Taken");
    },
    {
        noAck:true
    }
    )
}

export default consumeQueue;