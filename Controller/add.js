import { client } from "../config/mqtt.js";

const senddata=(req,res)=>{
    console.log(req.body)
    client.publish('topic','hello',{},(error)=>{
        res.send('Message send')
    })
    
}  
export default senddata