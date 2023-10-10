// Define MQTT broker URLs
const MQTT_BROKER_CLOUD = "mqtt://demo.thingsboard.io";
const MQTT_BROKER_LOCAL = "mqtt://localhost:1883";

// Define ThingsBoard REST API URL
const API_URL_CLOUD = "https://thingsboard.cloud/api";
const API_URL_LOCAL = "http://localhost:8080/api";

// Define ThingsBoard telemetry topic
const TELEMETRY_TOPIC = "v1/devices/me/telemetry";

// Define ThingsBoard RPC topic
const RPC_TOPIC = "v1/devices/me/rpc/request/+";

// Define device IDs
const DEVICE_ID = {
    ROOM1_DHT22: 'e2390af0-65b1-11ee-8147-5d5087fc85dc',
    ROOM1_LIGHT: '03e2bfc0-65b2-11ee-8147-5d5087fc85dc',
    ROOM1_AIRCOND: '62b192a0-65b3-11ee-8147-5d5087fc85dc',
    ROOM1_OXYGEN: 'ec1d1610-65b1-11ee-8147-5d5087fc85dc',
};

// Define device tokens
const DEVICE_TOKEN = {
    ROOM1_DHT22: 'ROOM1_DHT22_TOKEN',
    ROOM1_LIGHT: 'ROOM1_LIGHT_TOKEN',
    ROOM1_AIRCOND: 'ROOM1_AIRCOND_TOKEN',
    ROOM1_OXYGEN: 'ROOM1_OXYGEN_TOKEN',
};

// Define JWT token
const JWT_TOKEN_LOCAL =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWFuZ2hheWhheTE4MDFAZ21haWwuY29tIiwidXNlcklkIjoiNDQzZjIxYzAtNTRhMS0xMWVlLWI2YmYtZjk1MjVkYzQ0YWIzIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiI4N2JlMjYzZS03ZDk0LTQwY2EtOWQzMy1jMzk4NWEzZjRkY2IiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTY5NjUwOTgzNCwiZXhwIjoxNjk4MzA5ODM0LCJmaXJzdE5hbWUiOiJNeXN0ZXJ5IiwibGFzdE5hbWUiOiJVTFRJTUFURSIsImVuYWJsZWQiOnRydWUsInByaXZhY3lQb2xpY3lBY2NlcHRlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6IjQxYmRmNTIwLTU0YTEtMTFlZS1iNmJmLWY5NTI1ZGM0NGFiMyIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAifQ.oYnBfWoNInYKew4Nr74MCYcoCVdGeqA2uMEyqKX4_YU5ZgUvrzQT1gkymDUiBRQGvLkJEkGzfwQOJ0GL7yvsLw';

module.exports = {
    MQTT_BROKER_CLOUD,
    MQTT_BROKER_LOCAL,
    API_URL_CLOUD,
    API_URL_LOCAL,
    JWT_TOKEN_LOCAL,
    TELEMETRY_TOPIC,
    RPC_TOPIC,
    DEVICE_TOKEN,
    DEVICE_ID,
};