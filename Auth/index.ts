import { app } from "./server";
import { ConnectDatabase } from "./Database/DataBase";




// Initial connection
ConnectDatabase().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is on "+process.env.PORT)
    })

}).catch(error=>{
    console.log(error)
    process.exit(0)
})



