import { memo } from 'react';
import BookingCard from 'components/Booking/BookingCard';

const Inner = memo(() => {
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
        </>
    );
});

Inner.displayName = 'Booking Inner';

export default Inner;
