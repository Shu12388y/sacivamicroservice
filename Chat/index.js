import { config } from "dotenv";
config({path:'.env'})

import { server } from "./server.js";



server.listen(process.env.PORT,()=>{
    console.log("server is on " + process.env.PORT)
})