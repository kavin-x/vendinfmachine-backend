import * as dotenv from "dotenv";
import mqtt from "mqtt";
dotenv.config();

const sendProduct = async (req, res) => {
  const connectMqtt = () => {
    try {
      var options = {
        host: "68aecd2a8d5249ff883391ecb2c0534e.s1.eu.hivemq.cloud",
        port: 8883,
        protocol: "mqtts",
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD,
      };

      // initialize the MQTT client
      let client = mqtt.connect(options);

      // setup the callbacks
      client.on("connect", function () {
        return "connected"
        console.log("Connected");
      });

      client.on("error", function (error) {
        console.log(error);
      });

      let data = client.publish("topic", "hi");
    } catch (error) {}
  };
  res.json({ message: "sent" });
};
export default sendProduct;
