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
    ROOM1_DHT22: '031b8410-6381-11ee-8018-ffe91d7d13fc',
    ROOM1_LIGHT: '3c69ed10-6381-11ee-8018-ffe91d7d13fc',
    ROOM1_AIRCOND: '5b894d80-6381-11ee-8018-ffe91d7d13fc',
};

// Define device tokens
const DEVICE_TOKEN = {
    ROOM1_DHT22: 'ROOM1_DHT22_TOKEN',
    ROOM1_LIGHT: 'ROOM1_LIGHT_TOKEN',
    ROOM1_AIRCOND: 'ROOM1_AIRCOND_TOKEN'
};

// Define JWT token
const JWT_TOKEN_LOCAL =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWVucGh1YzI1MTFAZ21haWwuY29tIiwidXNlcklkIjoiNjUyNjZkOTAtNTQ3OC0xMWVlLWE5YTAtNGI0NGY4Yzc2Yzk1Iiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiJiM2JhNTVlZS05YTFiLTQxNWYtYTkzYi1mNDExZjdjNmZjNWIiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTY5NjUxMjQ4MSwiZXhwIjoxNjk2NTIxNDgxLCJmaXJzdE5hbWUiOiJWacOqbiBNaW5oIiwibGFzdE5hbWUiOiJQaMO6YyIsImVuYWJsZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiIyZDEwMGY2MC01NDc4LTExZWUtYTlhMC00YjQ0ZjhjNzZjOTUiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIn0.c023YYOv8aMIsX6Z0qFGUz8PMqdQXviRn50Ll34FgPgM2M8OKb-ZTEQN1YFdFRd0hFjRAagAuegxNmzxXy0Guw';

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