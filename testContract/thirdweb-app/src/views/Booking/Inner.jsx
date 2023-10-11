import { memo,useState } from 'react';
import '../../styles/Home.css';
import BookingCard from 'components/Booking/BookingCard';
import Booked from 'views/Booking/Booked';

const Inner = memo(() => {
    const [isButtonClicked,setButtonClicked] = useState(true);
    // const handleButtonClick = () => {
    //     setButtonClicked(!isButtonClicked);
    // }
    return (
        <>
            <div className="ml-40 mt-6 flex ">
                <div className="border-r-2 pr-4 w-fit text-xl font-bold text-cyan-700">
                    <p>Mint NFT Stay</p>
                </div>
                <div className="pl-4 text-sm my-auto">
                    <p>Booking your homestay</p>
                </div>
            </div>
            <BookingCard></BookingCard>
            <div className="ml-40 mt-6 flex ">
                <div className="border-r-2 pr-4 w-fit text-xl font-bold text-cyan-700">
                    <p>Your NFT Stay</p>
                </div>
                <div className="pl-4 text-sm my-auto">
                    <p>Booked contract</p>
                </div>
            </div>
            {/* <button className='border-2 ml-40 mt-6'
            onClick={handleButtonClick}>
                Display my nft
            </button> */}
            <Booked isButtonClicked={isButtonClicked}></Booked>
        </>
    );
});

Inner.displayName = 'Booking Inner';

export default Inner;
