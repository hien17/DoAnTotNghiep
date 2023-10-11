import React from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import logo from 'assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import routeConstants from 'route/routeConstants';

const Header = () => {
    const navigate = useNavigate();
    const pageNameStyle =
        'm-auto text-l font-[700] bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text';
    const activeTab = 'text-lime-500 border-b-2 border-b-lime-500';
    return (
        <div className="sticky border-b-2 top-0 px-2 py-2 z-50 bg-white h-[80px]">
            <div className="flex w-full justify-between items-center">
                <img className="w-16" src={logo} alt="Logo"></img>
                <div className="flex justify-between gap-16">
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
                <ConnectWallet style={{ height: '48px' }}></ConnectWallet>
            </div>
        </div>
    );
};

export default Header;
