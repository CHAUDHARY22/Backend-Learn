import express from "express";
import { configDotenv } from "dotenv";
import Database from "../DB/Database.js";
configDotenv();

const app = express();
const Port = process.env.PORT;
const URL = process.env.URL;

const Server = (URL) =>{
    try {
        Database(URL)
            app.get('/', (req,res,next) =>{
                res.status(200).send("Pravin Chaudhary")
            })
            app.post('/',(req,res) =>{
                req.params(Name = "Pravin");
            })
    } catch (error) {
        console.log(error);
    }
}

Server(URL)

app.listen(Port, () => {
    console.log(`Server is Running... At ${Port}`);
});