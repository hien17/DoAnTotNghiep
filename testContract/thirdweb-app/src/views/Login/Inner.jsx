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

const Inner = memo(({ handleLogin }) => {
const address = useAddress();
  const contractAddress = "0x7e15935f8ae6FCbBAc0211D2E15A2166143707B3";
  const tokenId = 3;
  const { contract } = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "getNFTInfo", [tokenId]);

  const [buttonClicked, setButtonClicked] = useState(false);

  // useEffect(() => {
  //   if (!isLoading && data) {
  //     setButtonClicked(true);
  //   }
  // }, [isLoading, data]);
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
    <div className="header p-4 border-b-2 ml-4">
      <div className="flex gap-4 w-full justify-between">
        <div className="flex justify-between gap-16
        ">
            <div className="m-auto text-5xl font-[1000]
        bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 text-transparent 
        bg-clip-text ">
              Logo
            </div>
            <div className="m-auto text-5xl font-[1000]
        bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 text-transparent 
        bg-clip-text ">
              Home
            </div>
            <div className="m-auto text-5xl font-[1000]
        bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 text-transparent 
        bg-clip-text ">
              Booking
            </div>
            <div className="m-auto text-5xl font-[1000]
        bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 text-transparent 
        bg-clip-text ">
              Management
            </div>
            <div className="m-auto text-5xl font-[1000]
        bg-gradient-to-r from-sky-400 via-indigo-500 to-cyan-400 text-transparent 
        bg-clip-text ">
              History
            </div>
        </div>
        <div className="flex">
          <ConnectWallet ></ConnectWallet>
        </div>
      </div>
      
      
    </div>
    <div className="body border-[5px] border-cyan-400 p-20 m-20 rounded-xl
   space-y-10 ">
      <div className="grid grid-cols-2 w-full ">
        <div className="text-3xl font-extrabold text-sky-800 ">
        Contract Address
        </div>
        <div className="font-[1000] text-4xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
               bg-clip-text">
            {contractAddress}
        </div>
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="text-3xl font-extrabold text-sky-800 ">
        Number of room
        </div>
        <div className="font-[1000] text-5xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
               bg-clip-text">
          10
        </div>
      </div>
      
    </div>
    </>
  );
});

Inner.displayName = 'Login Inner';

export default Inner;
