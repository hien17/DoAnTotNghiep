import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import logo from '../assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstants';

const Header = () => {
    const navigate = useNavigate();
    const pageNameStyle =
        'm-auto text-xl font-[700] bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text';
    const activeTab = 'text-lime-500 border-b-4 border-b-lime-500';
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
                        className={`${pageNameStyle} ${
                            window.location.pathname === routeConstants.HOME
                                ? activeTab
                                : ''
                        }`}
                        onClick={() => navigate(routeConstants.HOME)}
                    >
                        Home
                    </button>
                    <button
                        className={`${pageNameStyle} ${
                            window.location.pathname === routeConstants.BOOKING
                                ? activeTab
                                : ''
                        }`}
                        onClick={() => navigate(routeConstants.BOOKING)}
                    >
                        Booking
                    </button>
                    <button
                        className={`${pageNameStyle} ${
                            window.location.pathname ===
                            routeConstants.MANAGEMENT
                                ? activeTab
                                : ''
                        }`}
                        onClick={() => navigate(routeConstants.MANAGEMENT)}
                    >
                        Management
                    </button>
                    <button
                        className={`${pageNameStyle} ${
                            window.location.pathname === routeConstants.HISTORY
                                ? activeTab
                                : ''
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
