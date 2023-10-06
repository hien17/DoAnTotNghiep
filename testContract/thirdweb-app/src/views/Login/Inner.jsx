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
import {BodyManagement} from 'components';


const Inner = memo(({ handleLogin }) => {
  const address = useAddress();
  const contractAddress = "0x7e15935f8ae6FCbBAc0211D2E15A2166143707B3";
  const [inputValue, setInputValue] = useState(0);
  const [isButtonClicked, setButtonClicked] = useState(false);

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
          type="number"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}>
          
          </input>
          <button 
          onClick={() =>{setButtonClicked(!isButtonClicked)}}
          className="border-y-2 border-r-2 p-6 rounded-r-xl border-sky-500"
          >
            <a className="font-[1000] text-xl 
            bg-gradient-to-r from-sky-500 to-purple-500 
            text-transparent bg-clip-text w-fit">
              SHOW NFT INFO</a>
          </button>
        </div>
        <BodyManagement tokenId={inputValue} isButtonClicked={isButtonClicked}></BodyManagement>
      </div>
    </div>
    </>
  );
});

Inner.displayName = 'Login Inner';

export default Inner;
