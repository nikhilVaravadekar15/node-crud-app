const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // mongo db connection
        // From the Mongoose 6.0 docs:
        // 
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false,
        //     useCreateIndex: true
        const connection = mongoose.connect(process.env.MONGODB_URI)

        console.log(`MongoDB connected: ${connection}`)
    } catch (error) {
        console.log(`ERROR: ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB
