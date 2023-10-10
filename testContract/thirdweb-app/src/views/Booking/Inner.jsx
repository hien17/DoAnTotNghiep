import { useEffect, useState, memo } from "react";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import "../../styles/Home.css";
import { Header } from "components";
import BookingCard from "components/Booking/BookingCard";
import { ClassNames } from "@emotion/react";

const Inner = memo(() => {
  
  return (
    <>
    <div className="ml-40 mt-6 flex ">
      <div className="border-r-2 pr-4 w-fit text-xl font-bold text-cyan-700">
        <p>Mint NFT Stay</p>
      </div>
      <div className="pl-4 text-sm my-auto">
        <p>Booking your homestay</p>
      </div>
    </div>
      <BookingCard>
      </BookingCard>
    </>
  )
});

Inner.displayName = 'Booking Inner';

export default Inner;
