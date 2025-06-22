

const dotenv = require("dotenv")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const authRoutes = require("./routes/auth-routes/index")


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

app.use(cors())

app.use(express.json())

//database connection
mongoose.connect(MONGO_URI)
        .then(()=> console.log("mongoDB is Connected"))
        .catch((e)=> console.log(e))


//routes configuration
app.use("/auth", authRoutes)


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success : false,
        message : "Something went wrong",
    })
    
} )


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})
        