import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import logo from '../assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstants';

const Header = () => {
    const navigate = useNavigate();
    const pageNameStyle =
        'm-auto text-xl font-[700] bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text';
    const activeTab = 
        'm-auto text-xl font-[1000] bg-gradient-to-r from-teal-400 via-cyan-400 via-purple-300 to-pink-300 text-transparent bg-clip-text';
    return (
        <div className="header p-2 border-b-2 ml-4">
            <div className="flex gap-4 w-full justify-between">
                <div>
                    <img className="w-16" src={logo} alt="Logo"></img>
                </div>
                <div
                    className="flex justify-between gap-16
        "
                >
                    <button
                        className={`${
                            window.location.pathname === routeConstants.HOME
                                ? activeTab
                                : pageNameStyle
                        }`}
                        onClick={() => navigate(routeConstants.HOME)}
                    >
                        Home
                    </button>
                    <button
                        className={`${
                            window.location.pathname === routeConstants.BOOKING
                                ? activeTab
                                : pageNameStyle
                        }`}
                        onClick={() => navigate(routeConstants.BOOKING)}
                    >
                        Booking
                    </button>
                    <button
                        className={`${
                            window.location.pathname ===
                            routeConstants.MANAGEMENT
                                ? activeTab
                                : pageNameStyle
                        }`}
                        onClick={() => navigate(routeConstants.MANAGEMENT)}
                    >
                        Management
                    </button>
                    <button
                        className={`${
                            window.location.pathname === routeConstants.HISTORY
                                ? activeTab
                                : pageNameStyle
                        }`}
                        onClick={() => navigate(routeConstants.HISTORY)}
                    >
                        History
                    </button>
                </div>
                <div className="flex">
                    <ConnectWallet></ConnectWallet>
                </div>
            </div>
        </div>
    );
};

export default Header;
