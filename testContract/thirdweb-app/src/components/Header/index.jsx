import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import logo from 'assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstants';

const Header = () => {
    const navigate = useNavigate();
    const pageNameStyle = 'm-auto text-xl font-[700] bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text';
    const activeTab = 'm-auto text-xl font-[1000] bg-gradient-to-r from-teal-400 via-cyan-400 via-purple-300 to-pink-300 text-transparent bg-clip-text';
    return (
        <div className="sticky border-b-2 top-0 px-2 py-2 z-50 bg-white h-[80px]">
            <div className="flex w-full justify-between items-center">
                <img className="w-16" src={logo} alt="Logo"></img>
                <div className="flex justify-between gap-16">
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
                <ConnectWallet style={{ height: '48px' }}></ConnectWallet>
            </div>
        </div>
    );
};

export default Header;
