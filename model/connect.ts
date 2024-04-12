import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


export async function connectToDatabase() {
    const mongoDBURL = process.env.MONGODB_CONNECT_URL;

    if (!mongoDBURL) {
        console.error('Please set the MONGODB_CONNECT_URL environment variable');
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoDBURL as string);
        console.log('Database connected!');
    } catch (err) {
        console.error(err);
    }
}
