import React from 'react'
import { useContractRead } from "@thirdweb-dev/react";
const FetchContractData = (contract,tokenId) =>{
    const {dataContract,isLoadingContract} = useContractRead(contract,"getNFTInfo",[tokenId]);
    return {dataContract,isLoadingContract};
}

export default FetchContractData