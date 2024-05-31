//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./HomestayNFT.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract Marketplace is ERC721Holder, Ownable {
    using SafeMath for uint256;

    HomestayNFT private _nft;
    uint256 private _tax = 5;

    struct Listing {
        address payable seller;
        uint256 price;
        uint256 tokenId;
    }

    mapping (uint256 => Listing) _listings;
    mapping (uint256 => bool) _isListed;
    mapping (uint256 => bool) _isHeld;

    event ListNFT(address indexed seller, uint256 tokenId, uint256 price);
    event UnlistNFT(address indexed seller, uint256 tokenId);
    event BuyNFT(address indexed buyer, address indexed seller, uint256 tokenId, uint256 price);
    event UpdateListingNFTPrice(uint256 tokenId, uint256 price);
    event SetTax(uint256 tax);

    constructor(address nft) {
        _nft = HomestayNFT(nft);
    }

    modifier onlySeller(uint256 tokenId) {
        require(_nft.ownerOf(tokenId)==msg.sender, "You are not the owner of the NFT");
        _;
    }
    modifier onlyNotListed(uint256 tokenId) {
        require(_listings[tokenId].seller==address(0),"NFT is already listed");
        _;
    }
    modifier onlyListed(uint256 tokenId){
        require(_isListed[tokenId],"NFT is not listed");
        _;
    }
    modifier onlySellerOrOwner(uint256 tokenId) {
        require(_listings[tokenId].seller == msg.sender || _nft.ownerOf(tokenId) == msg.sender, "Only seller or owner can perform this action");
        _;
    }
    modifier onlyBuyer(uint256 tokenId){
        require(_listings[tokenId].seller!=msg.sender,"You can not buy your own NFT");
        _;
    }

    function listNFT(uint256 tokenId, uint256 price) public onlySeller(tokenId) onlyNotListed(tokenId) {
        require(price>0, "Price can not be set to zero");
        _listings[tokenId]=Listing(payable(msg.sender),price,tokenId);
        _isListed[tokenId] = true;
        _nft.safeTransferFrom(msg.sender, address(this), tokenId);
        _nft.emitListNFT(msg.sender,tokenId,price);
    }
    function updateListingNFTPrice(uint256 tokenId, uint256 price) public onlySellerOrOwner(tokenId) onlyListed(tokenId){
        require(price>0, "Price can not be set to zero");
        _listings[tokenId].price = price;
        _nft.emitUpdateListingNFTPrice(tokenId,price);
    }
    function unlistNFT(uint256 tokenId) public onlySellerOrOwner(tokenId) onlyListed(tokenId) {
        _isListed[tokenId] = false;
        delete _listings[tokenId];
        _nft.safeTransferFrom(address(this), msg.sender, tokenId);
        _nft.emitUnlistNFT(msg.sender, tokenId);
    }
    function buyNFT(uint256 tokenId) public payable onlyBuyer(tokenId) onlyListed(tokenId) onlyListed(tokenId) onlyListed(tokenId) {
        require(_nft.ownerOf(tokenId)==address(this), "NFT is not in escrow");
        require(msg.value>=_listings[tokenId].price*1 wei,"Insufficient payment");
        uint256 fee = ( msg.value*_tax)/100;
        uint256 sellerProceeds = msg.value - fee;  
        _isListed[tokenId] = false;
        _listings[tokenId].seller.transfer(sellerProceeds);
        _nft.safeTransferFrom(address(this), msg.sender, tokenId);
        delete _listings[tokenId];
        _nft.emitBuyNFT(msg.sender, tokenId, msg.value);  
    }
    function withdraw() public onlyOwner(){
        payable(owner()).transfer(address(this).balance);
    }
}