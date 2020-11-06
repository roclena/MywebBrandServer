import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/router';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.URL_config;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.use((req, res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    res.send('cors problem fixed:)');
    res.send({ message: "Welcome to my web Brand!!!!!" });
    next();
});
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log('db connected...');
});
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("server is running...") });
export default app;
