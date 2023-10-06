import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react'
import logo from "../assets/logo/logo.png";
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstants';
const Header = () => {
  const navigate = useNavigate();
  const pageNameStyle = "m-auto text-2xl font-[1000] bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text ";
  return (
    <div className="header p-4 border-b-2 ml-4">
      <div className="flex gap-4 w-full justify-between">
        <div>
          <img className='w-20' src={logo}></img>
        </div>
        <div className="flex justify-between gap-16
        ">
            <div className={`${pageNameStyle}`}>
              Home
            </div>
            <div className={`${pageNameStyle}`}>
              Booking
            </div>
            <div className={`${pageNameStyle}`}>
              Management
            </div>
            <div className={`${pageNameStyle}`} onClick={() => navigate(routeConstants.HISTORY)}>
              History
            </div>
        </div>
        <div className="flex">
          <ConnectWallet ></ConnectWallet>
        </div>
      </div>
    </div>
  )
}

export default Header