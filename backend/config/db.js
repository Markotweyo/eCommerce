import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        console.log(`MONGO Connected ${conn.connection.host}`.cyan.underline.bold)
        
    } catch (error) {
        console.error(`Error:${error.message}`.red.underline.bold)
        process.exit(1)
        
    }
    

}

export default connectDB