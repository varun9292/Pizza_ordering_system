


//..............................................DataBaseConnection...............................///
import express from "express";
import {createRequire} from "module";
const require=createRequire(import.meta.url);
const {Client}= require('pg');
const client= new Client({
    user : "postgres",
    password: "varun",
    host:"localhost",
    port:5432,
    database:"pizzashop"
})


client.connect();
//..............................................DataBaseConnection...................................///
export default client;



