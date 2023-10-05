import { Button, Input } from 'antd';
import { useEffect, useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstants';
import {
    ConnectWallet,
    Web3Button,
    useAddress,
    useContract,
    useContractRead,
  } from "@thirdweb-dev/react";
  import { Header } from 'components';
  import { shortenAddress } from 'utils/shortenAddress';

const Inner = memo(({ handleLogin }) => {
  const address = useAddress();
  const contractAddress = "0x7e15935f8ae6FCbBAc0211D2E15A2166143707B3";
  const [tokenId,setTokenId] = useState(3);
  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "getNFTInfo", [tokenId]);

  const [buttonClicked, setButtonClicked] = useState(false);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Use 24-hour format
      timeZoneName: "short",
    };
    return date.toLocaleString("en-US", options);
  };

  const parseBigNumber = (value) => {
    return value ? value.toString() : "";
  };

  return (
    <>
    <Header></Header>
    <div className="body border-[5px] border-cyan-400 p-20 m-20 rounded-xl
   space-y-10 ">
      <div className="flex flex-row justify-between">
        <div className="text-3xl font-extrabold text-sky-600 ">
        Contract Address
        </div>
        <div className="font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
               bg-clip-text w-fit">
            {contractAddress} 
        </div>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="text-3xl font-extrabold text-sky-600 ">
        Number of room
        </div>
        <div className="font-[1000] text-5xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
               bg-clip-text w-fit">
          10
        </div>
      </div>
      <div className="py-6 flex flex-col justify-center  ">
        <div className='flex justify-center pb-6'>
          <input className="border-y-2 border-l-2 rounded-l-xl p-6 
          font-[1000] text-xl border-cyan-500
          bg-gradient-to-r from-sky-500 to-purple-500 
          text-transparent bg-clip-text w-fit"
          type="number">

          </input>
          <button 
          onClick={(e) => setButtonClicked(!buttonClicked)}
          className="border-y-2 border-r-2 p-6 rounded-r-xl border-sky-500"
          onchange={(e)=>setTokenId(e.target.value)}>
            <a className="font-[1000] text-xl 
            bg-gradient-to-r from-sky-500 to-purple-500 
            text-transparent bg-clip-text w-fit">
              SHOW NFT INFO</a>
          </button>
        </div>
        {/* Conditionally render NFT info based on the buttonClicked state */}
        {isLoading && <p>Loading data...</p>}
        {buttonClicked && data && !isLoading && (
          <div className='border-2 p-16 space-y-16 border-cyan-500 rounded-xl'>
          <div className='flex flex-row justify-between gap-4'>
            <div className='w-full'>
              <p className='flex justify-center text-3xl font-extrabold text-sky-600'>
                Provider
              </p>
              <p className='flex justify-center 
              font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
              bg-clip-text '>{shortenAddress(data[0])}</p>
            </div>
            <div className='w-full'>
              <p className='flex justify-center text-3xl font-extrabold text-sky-600'>
                Renter
              </p>
              <p className='flex justify-center 
              font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
              bg-clip-text '>{shortenAddress(data[1])}</p>
            </div>
          </div>
          <div className='flex flex-row justify-between gap-4'>
            <div className='w-full'>
              <p className='flex justify-center text-3xl font-extrabold text-sky-600'>
                Room ID
              </p>
              <p className='flex justify-center 
              font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
              bg-clip-text '>{parseBigNumber(data[2])}</p>
            </div>
            <div className='w-full'>
              <p className='flex justify-center text-3xl font-extrabold text-sky-600'>
                Rent Amount
              </p>
              <p className='flex justify-center
              font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
              bg-clip-text'>{parseBigNumber(data[3])} $</p>
            </div>
          </div>
          <div className='flex flex-row justify-between gap-4'>
            <div className='w-full'>
              <p className='flex justify-center text-3xl font-extrabold text-sky-600'>
                Seconds Until Start Time
              </p>
              <p className='flex justify-center
              font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
              bg-clip-text'>{parseBigNumber(data[5])} seconds</p>
            </div>
            <div className='w-full'>
              <p className='flex justify-center text-3xl font-extrabold text-sky-600'>
                Duration
              </p>
              <p className='flex justify-center
              font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
              bg-clip-text'>{parseBigNumber(data[6])} seconds</p>
            </div>
          </div>
          <div className='justify-center'>
            <p className='flex w-full justify-center text-3xl font-extrabold text-sky-600'>
              Start Time
            </p>
            <p className='flex w-full justify-center
            font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
            bg-clip-text'>{formatDate(parseBigNumber(data[4]))}</p>
          </div>
        </div>
        
        )}
      </div>
    </div>
    </>
  );
});

Inner.displayName = 'Login Inner';

export default Inner;
