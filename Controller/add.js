import { client } from "../config/mqtt.js";

const senddata=(req,res)=>{
    client.publish('topic',JSON.stringify(req.body),{},(error)=>{
        res.send('Message send')
    })
    
}  
export default senddata