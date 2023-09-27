from thirdweb import ThirdwebSDK
import random 
from thirdweb.types import SDKOptions
from dotenv.main import load_dotenv
import os

# Set your RPC_URL
RPC_URL = "https://binance-testnet.rpc.thirdweb.com"

# And now you can instantiate the SDK with it
sdk = ThirdwebSDK(RPC_URL)

load_dotenv()

# This PRIVATE KEY is coming from your environment variables. Make sure to never put it in a tracked file or share it with anyone.
private_key = 'c0bc171ed75934afa072a2c2101fdaee648af1ec7f7388e7811c9bb85779ed0e'
secret_key = "HlIWfWu1MqABhHTP36NaCkhbEXRjMJV_M9wiMI6QjcLn4YzYeQBUrPOtGliY_wDWprL86kPOdzgEkAIwWOdgng"

# Now you can create a new instance of the SDK with your private key
sdk = ThirdwebSDK.from_private_key(private_key, RPC_URL, options=SDKOptions(secret_key=secret_key))
contract = sdk.get_contract("0x7e15935f8ae6FCbBAc0211D2E15A2166143707B3")

#GET DATA
# call to function of contract to get data 

tokenId = 4
data = contract.call("getNFTInfo", tokenId)
print(data)

#POST DATA
# write on blockchain (can observe changes at https://testnet.bscscan.com/address/0x7e15935f8ae6FCbBAc0211D2E15A2166143707B3)

# to = "0x5360D8952D040e1d2D3d9941485C0E4d8B2F22fF"
# roomId = random.randint(0,9)
# rentAmount = random.randint(0,999)
# secondsUntilStartTime = random.randint(3600,7200)
# duration = random.randint(7200,10000)

# data = contract.call("safeMint", to, roomId, rentAmount, secondsUntilStartTime, duration)

