import paho.mqtt.client as mqttclient
import time
import json
from random import uniform

# Define the access tokens and device names
devices = [
    {"access_token": "gkwcF9WXnZ2rWIUCWk0Z", "name": "DHT22", "temperature_range": (19, 28), "humidity_range": (50, 70)},
    {"access_token": "O5u5JSAxji9tPYF1zooI", "name": "Oxygen", "oxygen_range": (19, 24)},
]

BROKER_ADDRESS = "demo.thingsboard.io"
PORT = 1883

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print(f"{userdata['name']} connected successfully!")
        client.subscribe("v1/devices/me/rpc/request/+")
    else:
        print(f"{userdata['name']} connection failed")

clients = []

# Create MQTT clients for each device
for device in devices:
    client = mqttclient.Client(f"Gateway_Thingsboard_{device['name']}")
    
    # Set userdata to the device information
    client.user_data_set({"name": device["name"]})
    
    client.on_connect = on_connect
    client.username_pw_set(device["access_token"])
    client.connect(BROKER_ADDRESS, PORT)
    client.loop_start()
    client.on_subscribe = lambda c, u, m, gq: print(f"{u['name']} Subscribed...")
    
    clients.append({"client": client, "device": device})

while True:
    for client_data in clients:
        device = client_data["device"]
        data = {}
        
        if "temperature_range" in device:
            data["temperature"] = uniform(*device["temperature_range"])
            data["humidity"] = uniform(*device["humidity_range"])
        elif "oxygen_range" in device:
            data["oxygen"] = uniform(*device["oxygen_range"])
        
        client_data["client"].publish('v1/devices/me/telemetry', json.dumps(data), 1)
    
    time.sleep(5)