import { getRandomValues } from 'crypto';
import express, {Express,Request,Response} from 'express';
import { Mongoose } from 'mongoose';
import { generateRandom, generateRandomDecimal, getRandomDate, getRandomStatus } from './utils/helperFunctions';
const dotenv = require("dotenv");
const appliancesModel = require("./models/appliances")

const mongoose: Mongoose = require("mongoose");

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

mongoose.connect("mongodb+srv://qubetask:QubeTask@qube.8vlrcd6.mongodb.net/Qube")

mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});

app.get("/api/v1/appliances", async(req: Request, res: Response) => {
    try {
        const appliances = await appliancesModel.find({},{
            serialNo: true,
            theatreName: true,
            location: true,
            bandwidth: true,
            avgBandwidth: true,
            deviceStatus: true,
            downloadStatus: true,
            osVersion: true,
        })
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "PUT, POST, GET, DELETE, PATCH, OPTIONS"
        );
        res.json({
            appliances: appliances
        });
    } catch (e) {
        if (typeof e === "string") {
            console.log(e.toUpperCase())
        } else if (e instanceof Error) {
            console.log(e.message)
        }
    }
});

app.get("/api/v1/appliances/:serialNo/info", async(req: Request, res: Response) => {
    try {
        const serialNo = req.params.serialNo
        const appliance = await appliancesModel.find({serialNo:serialNo},{_id:false,__v:false})
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "PUT, POST, GET, DELETE, PATCH, OPTIONS"
        );
        if(appliance.length === 0){
            res.json({
                httpStatus: 404,
                httpCode: "Not Found",
                requestId: serialNo,
                errors: {
                    code: "Not Found",
                    message: "Appliance not found"
                }
            })
        }
        res.json(appliance[0]);
    } catch (e) {
        if (typeof e === "string") {
            console.log(e.toUpperCase())
        } else if (e instanceof Error) {
            console.log(e.message)
        }
    }
});

app.post("/api/v1/add_appliances", async (req: Request, res: Response) => {
    try {
        for(let i = 0; i < 100; i++){
            const appliances = new appliancesModel({
                serialNo: generateRandom('alphaNumeric'),
                theatreName: `${generateRandom('chars')} theatre`,
                location:{
                    city: "Chennai",
                    state: "Tamil Nadu",
                    country: "India"
                },
                bandwidth: `${generateRandom('number')} kbps`,
                avgBandwidth: `${generateRandom('number')} kbps`,
                deviceStatus: getRandomStatus(["online","offline"]),
                downloadStatus: getRandomStatus(["failed", "cancelled", "downloading", "succeeded"]),
                osVersion: generateRandomDecimal(),
                ispPaymentResponsibility: "Qube",
                planStartDate: getRandomDate(),
                billingCycle: getRandomStatus(["monthly", "quarterly", "annual"]),
                storage: `${generateRandom('number')} GB`,
            })
            await appliances.save()
        }
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "PUT, POST, GET, DELETE, PATCH, OPTIONS"
        );
        res.json({
            Httpcode: 200,
            Message: "Appliance added successfully"
        });
    } catch (e) {
        if (typeof e === "string") {
            console.log(e.toUpperCase())
        } else if (e instanceof Error) {
            console.log(e.message)
        }
        
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});