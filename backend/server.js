// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

// const PORT = process.env.PORT
const app = express();

// app.use(cors({
//    origin: ['https://pay-nows.vercel.app', 'https://pay-nows-yu5w.vercel.app'],  // Allow frontend origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
//   }));

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);