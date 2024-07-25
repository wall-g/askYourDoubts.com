import mongoose from "mongoose";

const Connection = async (username, password) => {
    try {
        const URL = `mongodb+srv://${username}:${password}@cluster0.vvqcwz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(URL, { });
        console.log('database connected successfully');
    } catch (error) {
        console.log('error while connecting to database', error);
    }
}

export default Connection;