//Importing project dependancies that we installed earlier

import express from 'express'
import cors from 'cors' 
import helmet from 'helmet'
import bodyParser from 'body-parser';
import db from './config/db';
import applicationsRoutes from './routes/applicationsRoutes';
//Importing .env validation 



//intializing the express app 
const app = express(); 

// make sure to connect to the database
db;

//using the dependancies
app.use(helmet()); 
app.use(cors()); 
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//using the routes


app.use('/applications', applicationsRoutes);


//exporting app

export default app;


