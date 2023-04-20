import { client } from "../config/mqtt.js";

const senddata=(req,res)=>{
    client.publish('topic','hello',{},(error)=>{
        res.send('Message send')
    })
    
}  
export default senddata