import express from 'express';
import {connectToDatabase} from "./model/connect";
import { Request, Response, Application } from 'express';
import cors from 'cors';
import { getAllWeekMenuItems, getPaginatedWeekMenuItems, getWeekMenuById } from './controllers/controllers'

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.SERVER_PORT;

// Define an asynchronous function for starting the server
async function startServer() {
    // Wait for the database connection to be established
    await connectToDatabase();

    // Now you can define your routes and middleware
    app.get('/', (_req: Request, res: Response) => {
        res.send('Welcome !');
    });

    app.get('/api/weekMenus', getAllWeekMenuItems);
    app.get('/api/weekMenus/:page/:limit', getPaginatedWeekMenuItems);
    app.get('/api/weekMenus/:id', getWeekMenuById);


    app.listen(PORT, () => {
        console.log('Server is running on port : ', PORT);
    });
}

// Call the asynchronous function to start the server
startServer().catch(err => {
    console.error('Failed to start server:', err);
});

