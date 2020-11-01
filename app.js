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
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.get('/', (req, res) => {

    res.send({ message: "Welcome to my web Brand!!!!!" });
});
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on('open', () => {
    console.log('db connected...');
});
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log("server is running...") });
export default app;
