import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://alexis-hospital.vercel.app"
    ],
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(cookieParser())

import homeBanner from './routes/homeBanner.routes.js'
app.use("/api/v1/homeBanner",homeBanner);

import beforeAfterCase from './routes/beforeAfterCase.routes.js'
app.use("/api/v1/beforeAfterCase",beforeAfterCase);

import service from './routes/service.routes.js'
app.use("/api/v1/service",service);

import serviceDetails from './routes/serviceDetails.routes.js'
app.use("/api/v1/serviceDetails",serviceDetails);

import ctaImage from './routes/ctaImage.routes.js'
app.use("/api/v1/ctaImage",ctaImage);

export {app}