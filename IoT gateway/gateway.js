// Import libraries
const mqtt = require("mqtt");

// Import global variables
const { MQTT_BROKER_LOCAL, MQTT_BROKER_CLOUD, DEVICE_TOKEN, TELEMETRY_TOPIC, RPC_TOPIC } = require("./_global");

// Define clients list
const clients = ['ROOM1_DHT22', 'ROOM1_LIGHT', 'ROOM1_AIRCOND', 'ROOM1_OXYGEN'];

// Define publish interval in seconds
const seconds = 10;
const PUBLISH_INTERVAL = seconds * 1000;

// Generate data
const prepareJsonData = (client, data) => {
    if (client === 'ROOM1_DHT22') {
        const TEMP_RANGE = (Math.round(Math.random() * 201) + 200) / 10;
        const HUMI_RANGE = (Math.round(Math.random() * 201) + 800) / 10;
        return {
            temperature: TEMP_RANGE,
            humidity: HUMI_RANGE,
        };
    } else if (client === 'ROOM1_OXYGEN') {
        const OXYGEN_RANGE = (Math.round(Math.random() * 51) + 940) / 10;
        return {
            oxygen: OXYGEN_RANGE,
        };
    }
    else if (client === 'ROOM1_LIGHT') {
        return {
            status: data,
        };
    }
    else if (client === 'ROOM1_AIRCOND') {
        return {
            degree: data,
        };
    }
}

// Publish timeseries data
const publishData = (client, clientName, sampleData) => {
    const data = prepareJsonData(clientName, sampleData);
    client.publish(TELEMETRY_TOPIC, JSON.stringify(data), (err) => {
        if (err) {
            console.error("Failed to publish telemetry data:", err);
        } else {
            if (clientName === 'ROOM1_DHT22') {
                console.log(`TEMP = ${data.temperature} & HUMI = ${data.humidity} published successfully`);
            }
            else if (clientName === 'ROOM1_OXYGEN') {
                console.log(`OXYGEN = ${data.oxygen} published successfully`);
            }
            // else if (clientName === 'ROOM1_LIGHT') {
            //     console.log(LIGHT = ${data.status} published successfully);
            // }
            // else if (clientName === 'ROOM1_AIRCOND') {
            //     console.log(AIRCOND = ${data.degree} published successfully);
            // }
        }
    });
};

const isSensor = (name) => {
    return name === 'ROOM1_DHT22' || name === 'ROOM1_OXYGEN';
}


clients.forEach((clientItem) => {
    // Initialize MQTT client
    const client = mqtt.connect(MQTT_BROKER_CLOUD, {
        username: DEVICE_TOKEN[clientItem],
    });

    // Connect and publish data every [PUBLISH_INTERVAL] seconds
    client.on("connect", () => {
        console.log(`${clientItem} connected!`);
        client.subscribe(RPC_TOPIC);
        console.log('Subscribed!');
        setInterval(() => {
            if (isSensor(clientItem)) {
                publishData(client, clientItem);
            }

        }, PUBLISH_INTERVAL);
    });


    // Receive RPC commands
    client.on("message", (topic, message) => {
        const msg = JSON.parse(message.toString());
        if (msg.method === 'setLightValue') {
            console.log(msg.params ? 'Light is turned on!' : 'Light is turned off!');
            publishData(client, clientItem, msg.params);
        }
        else if (msg.method === 'setAirConditioner') {
            console.log(`Air conditioner degree is set to ${msg.params}!`);
            publishData(client, clientItem, msg.params);
        }

        else if (msg.method === 'getAirConditioner') {
            console.log('Get air conditioner degree!');
        }
    });
});

// Handle ctrl+c event
process.on('SIGINT', () => {
    console.log('Disconnecting...');
    client.end();
    console.log('Exited!');
    process.exit(2);
});

// Handle uncaught exception
process.on('uncaughtException', (e) => {
    console.log('Uncaught Exception...');
    console.error(e);
    process.exit(99);
});