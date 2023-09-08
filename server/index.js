import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


const app = express();

app.use(cors());
// NOTE: we are calling the cors function and passing its return value (which is a middleware function) into app.use

app.use('/posts', postRoutes);

// NOTE: could use express.json() and express.urlencoded() middleware functions directly
app.use(bodyParser.json({ limit: '30mb', extended: true }));
// NOTE: This line is setting up middleware to parse incoming JSON data from HTTP requests, limited to 30mb and should support deep objects and arrays
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// NOTE: middleware will parse the URL-encoded form data from the request body and make it available in the req.body object


const CONNECTION_URL = "mongodb+srv://dianavitanyi:lTxK82BqL0H8b4sl@cluster0.lqwki7o.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => { console.log(`The server is running on port: ${PORT}.`) })).catch((err) => console.log(err));