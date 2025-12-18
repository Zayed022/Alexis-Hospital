import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
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

export {app}