const app = require('./app');
const dotenv =quire('dotenv');
const connectDatabase = require('./config/database')

dotenv.config({path:'backend/config/config.env'})

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on ${process.env.PORT}`)
})


hi theis sdkljfaklhf