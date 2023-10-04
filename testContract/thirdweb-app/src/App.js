import { useEffect, useState } from "react";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
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
    // <main className="main">
    //   <div className="container">
    //     <div className="header">
    //       <h1 className="title text-6xl font-bold">
    //         HNFT using {" "}
    //         <span className="gradient-text-0">
    //           <a
    //             // href="https://thirdweb.com/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             thirdweb
    //           </a>
    //         </span>
    //       </h1>

    //       <div className="connect">
    //         <ConnectWallet
    //           dropdownPosition={{
    //             side: "bottom",
    //             align: "center",
    //           }}
    //         />
    //       </div>
    //       <Web3Button
    //         contractAddress={contractAddress}
    //         action={(contract) =>
    //           contract.call("safeMint", [
    //             address,
    //             Math.floor(Math.random() * 10),
    //             Math.floor(Math.random() * 1000),
    //             3600,
    //             7200,
    //           ])
    //         }
    //       >
    //         Mint homestay NFT
    //       </Web3Button>
    //       <div>
    //         <button onClick={() => setButtonClicked(!buttonClicked)}
    //         style={{
    //           backgroundColor: "grey", // Customize the background color
    //           color: "white", // Customize the text color
    //           border: "solid black 2px", // Remove border
    //           padding: "12px 44px", // Add padding
    //           cursor: "pointer", // Change cursor on hover
    //           marginTop: "20px", 
    //         }}
    //         >
    //           Show NFT Info</button>

    //         {/* Conditionally render NFT info based on the buttonClicked state */}
    //         {isLoading && <p>Loading data...</p>}
    //         {buttonClicked && data && !isLoading && (
    //           <div>
    //             <p>Provider: {data[0]}</p>
    //             <p>Renter: {data[1]}</p>
    //             <p>Room ID: {parseBigNumber(data[2])}</p>
    //             <p>Rent Amount: {parseBigNumber(data[3])} $</p>
    //             <p>Start Time: {formatDate(parseBigNumber(data[4]))}</p>
    //             <p>Seconds Until Start Time: {parseBigNumber(data[5])} seconds</p>
    //             <p>Duration: {parseBigNumber(data[6])} seconds</p>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </main>
    <>
    <div className="border-black h-16 border-[0.5px]">

    </div>
    <div className="border-[5px] border-cyan-400 p-20 m-20 rounded-xl
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
}
