import express from "express";
import Connection from "./database/db.js";
import * as dotenv from "dotenv";
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Router);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})

Connection(process.env.MONGODB_URL);