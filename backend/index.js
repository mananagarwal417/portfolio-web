const express=require('express')
const dotenv=require('dotenv')
//const { connectDB }=require('./connection')
const cors=require('cors')



dotenv.config()
const app=express()


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//connection to mongoDB
//connectDB();


//routes
//app.use('/user',require('./routes/user'));

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`)
})
