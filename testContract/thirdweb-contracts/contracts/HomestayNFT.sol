// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract HomestayNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Address for address;
    using SafeMath for uint256;

    Counters.Counter private _tokenIdCounter;
    uint256 internal immutable _startTime;
    mapping(uint256=>bool) _roomValidity;
    uint256 public _noRooms;
    mapping (address=>uint256) private _noNftOfRenter;
    mapping (address=>uint256) private _noNftOfProvider;

    constructor(uint256 noRooms) ERC721("HomestayNFT","HNFT") Ownable() {
        _startTime = block.timestamp;
        _noRooms = noRooms;
        for (uint256 i = 0; i < noRooms; i++) {
            _roomValidity[i] = true;
        }
    }

    //rental contract between provider and renter
    struct NFT{
        address provider;
        address renter;
        uint256 roomId; 
        uint256 rentAmount;
        uint256 startTime;
        uint256 secondsUntilStartTime; // time remain by seconds until valid renting
        uint256 duration; // duration of order by seconds
    }

    struct IoTdevices{
        uint256 fanValidable;
        uint256 ledValidable;
        uint256 televisionValidable;
    }
    
    mapping(uint256 => NFT) public _nfts;
    mapping(uint256 => IoTdevices) public _IoTdevices; 

    function setNoRooms(uint256 noRooms) public {
        _noRooms = noRooms;
    }
    function getRoomValidity(uint256 roomId) public view returns(bool){
        return _roomValidity[roomId];
    }
    //function to change validity of a specific room
    function setRoomValidity(uint256 roomId, bool isValid) public onlyOwner {
        require(roomId>0, "Invalid room id");
        _roomValidity[roomId] = isValid;
    }

    //function to change validity of many rooms at one time
    function setMultipleRoomsValidity(uint256[] calldata roomIds,bool[] calldata isValid) public onlyOwner{
        require(roomIds.length == isValid.length, "Arrays length mismatch");
        for (uint256 i = 0; i < roomIds.length; i++) {
            _roomValidity[roomIds[i]] = isValid[i];
        }
    }

    function safeMint(address to, uint256 roomId, uint256 rentAmount, uint256 secondsUntilStartTime, uint256 duration) public {
        require(_roomValidity[roomId]==true,"This room is not available");

        uint256 tokenId = _tokenIdCounter.current();
        
        //create a nft in address of msg.sender
        _safeMint(msg.sender,tokenId);
        _nfts[tokenId] = NFT(to,msg.sender,roomId,rentAmount,block.timestamp,secondsUntilStartTime,duration);
        _tokenIdCounter.increment();
        _noNftOfProvider[to]++;
        _noNftOfRenter[msg.sender]++;
    }

    function getNFTInfo(uint256 tokenId) public view returns (
        address provider,
        address renter,
        uint256 roomId,
        uint256 rentAmount,
        uint256 startTime,
        uint256 secondsUntilStartTime,
        uint256 duration
    ) {
        require(_exists(tokenId), "Token ID does not exist");

        NFT memory nft = _nfts[tokenId];

        return (
            nft.provider,
            nft.renter,
            nft.roomId,
            nft.rentAmount,
            nft.startTime,
            nft.secondsUntilStartTime,
            nft.duration
        );
    }


    function tokenURI(uint256 tokenId) public view  override(ERC721) returns (string memory){
        return super.tokenURI(tokenId);
    }

    function getTime() public view returns(uint){
        return block.timestamp-_startTime;
    }


}