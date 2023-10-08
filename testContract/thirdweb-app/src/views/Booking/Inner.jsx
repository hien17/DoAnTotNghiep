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

const Inner = memo(() => {
  
  return (
    <div>
      Booking page 
    </div>
  )
});

Inner.displayName = 'Booking Inner';

export default Inner;
