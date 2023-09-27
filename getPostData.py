from thirdweb import ThirdwebSDK
from thirdweb.types import SDKOptions
from dotenv.main import load_dotenv
import os

load_dotenv()
secret_key = os.environ['SECRET_KEY']
private_key = os.environ['PRIVATE_KEY']

sdk = ThirdwebSDK.from_private_key(private_key, "mumbai", SDKOptions(secret_key=secret_key))
contract = sdk.get_contract("0x7e15935f8ae6FCbBAc0211D2E15A2166143707B3")

tokenId = 0
data = contract.call("getNFTInfo", tokenId)