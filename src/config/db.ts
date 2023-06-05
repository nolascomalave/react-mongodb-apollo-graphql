import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO ?? '');

        console.log('¡Connected DB!');
    } catch(e: any) {
        console.log('An error was ocurred trying to connect with database!');
        console.log(e);
        process.exit(1);
    }
};

export default connectDB;