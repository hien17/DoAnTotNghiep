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
import { Slider } from "components";

const Inner = memo(() => {
  
  return (
    <div>
      <Slider/>
    </div>
  )
});

Inner.displayName = 'Home Inner';

export default Inner;
