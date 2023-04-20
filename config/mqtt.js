import * as dotenv from "dotenv";
import mqtt from "mqtt";
dotenv.config();
let client;
const connectMqtt = async (req, res) => {
  var options = {
    host: "68aecd2a8d5249ff883391ecb2c0534e.s1.eu.hivemq.cloud",
    port: 8883,
    protocol: "mqtts",
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
  };
  // initialize the MQTT client
  client = mqtt.connect(options);
  // setup the callbacks
  client.on("connect", function () {
    console.log("Connected");
  });
  client.on("error", function (error) {
    console.log(error);
  });
};
export default connectMqtt;
export { client as client };
