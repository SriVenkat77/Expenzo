import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = 'mongodb+srv://venkateshwaran1112:37POSLsSvdfScvOx@cluster.x71ug.mongodb.net/expenseTracker';

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);
}