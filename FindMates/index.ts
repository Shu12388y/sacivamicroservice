import { app } from "./server";








// listening to port 
app.listen(process.env.PORT,()=>{
    console.log("server is on " + process.env.PORT)
})