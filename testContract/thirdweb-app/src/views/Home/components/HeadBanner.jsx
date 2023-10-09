import { useState, useEffect, memo } from 'react';
import background1 from 'assets/image/background1.jpg';
import background2 from 'assets/image/background2.jpg';
import background3 from 'assets/image/background3.jpg';

const HeadBanner = () => {
    const [bgIndex, setBgIndex] = useState(0);
    const backgroundImages = [background1, background2, background3];

    useEffect(() => {
        // Change background every 7 seconds
        const interval = setInterval(() => {
            setBgIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
        }, 7000);

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, [backgroundImages.length]);

    return (
        <div>
            <div className="relative h-screen">
                {/* Background image */}
                <img
                    src={backgroundImages[bgIndex]}
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{ opacity: '100%' }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                {/* Content */}
                <div className="flex flex-col items-center justify-center gap-y-8 h-full relative z-1 text-white">
                    <div>
                        <div className="text-xl text-center w-full">
                            SHSC HOMESTAY TRAVELS
                        </div>
                        <div className="mt-16 text-6xl font-[600] text-center w-full">
                            <p className="w-2/3 mx-auto leading-normal">
                                Let's embark on your dream journey
                            </p>
                        </div>
                        <div className="text-xl text-center w-full mt-16 font-[400]">
                            <p>
                                Discover inspiring destinations, create
                                unforgettable memories
                            </p>
                            <p>
                                Travel with confidence - Your adventure starts
                                here
                            </p>
                        </div>
                    </div>
                    {/* <input
                        placeholder="Search place"
                        className="mt-20 border-2 rounded-xl bg-black rounded-xl font-[1000] 
            text-5xl bg-gradient-to-r from-sky-500 to-purple-500 text-transparent 
            bg-clip-text p-2 w-full min-w-[400px] max-w-[600px]"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default memo(HeadBanner);
