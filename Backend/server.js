import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
import express from "express";
import {createRequire} from "module";
import database_client from "./database.js"
import redisClient  from './reddis.js';
import rabbit_publisher,{queueName} from "./publisher.js";
import rabbit_consuner from "./consumer.js";



const require=createRequire(import.meta.url);
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}))
var path = require('path');
var cors = require('cors')
app.use(cors())
app.use(express.json());


// .....................................................Routingnode...........................................................................//
var pizza_id_number=1,pizza_name,pizza_cost,row_count,customer_name,customer_email_id,random_number,customer_phone_number,message;




//......................................................Menu Section................................................./
app.post("/Menu",async function(req,res){
     pizza_id_number=req.body.id_number;


    ///..................Fetching pizza details.................../////
    var pizza_details=JSON.parse(await redisClient.get(pizza_id_number.toString()));
    if(pizza_details!=null)
    {
        console.log("Fetching data from reddis surver");
        pizza_cost=pizza_details.cost;
        pizza_name=pizza_details.name;
    }
    else if(pizza_details==null)
    {
        console.log("Fettching details from database")
        try
        {
            pizza_cost=(await database_client.query("select cost from pizza_details where id ="+" "+pizza_id_number)).rows[0].cost;
            pizza_name=(await database_client.query("select name from pizza_details where id="+" "+pizza_id_number)).rows[0].name;
        }
        catch(err)
        {
            console.log(err);
        }
        redisClient.set(pizza_id_number.toString(),JSON.stringify({
            name:pizza_name,
            cost:pizza_cost
        }))
    }
    ///.......................Fetching pizza details............/////


    ///..................ADDING INO THE CARD DATABASE............//

    try
    {
         row_count=(await database_client.query("select * from cart where id="+""+pizza_id_number)).rowCount;
        

         if(row_count==0)
         {
            (await database_client.query("insert into cart values($1,$2,$3,1)", [pizza_id_number,pizza_name.toString(),pizza_cost]));
         }
         else if(row_count==1)
         {

           const currnet_quantity=(await database_client.query("select quantity from cart where id="+""+pizza_id_number)).rows[0].quantity;
           const x = currnet_quantity + 1;
            (await database_client.query("update cart set quantity ="+""+x+"where id="+""+pizza_id_number));
         }

    }
    catch(err)
    {
        console.log(err);
    }

    ///..................ADDING INTO THE CART DATABASE..............///

    res.send("Item added into the cart");
})

/////..................................MenuSection.........................................................................///






//////////.................................CartSection....................................................................///


app.get("/Cart",async function(req,res){
    var cart_database=(await database_client.query("select * from cart")).rows;
    res.send(cart_database);
})












////////////////////////............CartSection........................................................./////////////











////////////////////////.....................contact section....................................///////////////////////



app.post("/Contact",async function(req,res)
{          
    customer_name=req.body.customer_name;
    customer_phone_number=req.body.customer_phone_number;
    random_number=Math.floor((Math.random() * 10) + 1);
    var orders=(await database_client.query("select * from cart")).rows;
     message={Name:customer_name,phone_number:customer_phone_number,order_number:random_number,order_details:orders};

    rabbit_publisher(message);

    rabbit_consuner(queueName); 
    res.send("Thanks for the order");

    try
    {
         console.log("Delete cart database");
        (await database_client.query("delete from cart"));
    }
    catch(err)
    {
        console.log(err);
    }
})

app.get("/Submit",async function(req,res)
{
    var k=[random_number];
    res.send(k);
})

/////........................contact section.................................////






app.listen(5000,function(){
    console.log("Server Started Executin in 5000");
})
