import { useState, memo } from 'react';
import { useAddress, useContract } from '@thirdweb-dev/react';
import { Modal } from 'antd';

const BookingCard = () => {
    const address = useAddress();
    const { contract } = useContract(
        '0x7e15935f8ae6FCbBAc0211D2E15A2166143707B3'
    );

    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [duration, setDuration] = useState('');
    const [roomId, setRoomId] = useState('');

    const handleStartDateChange = e => {
        setStartDate(e.target.value);
    };

    const handleStartTimeChange = e => {
        setStartTime(e.target.value);
    };

    const handleEndDateChange = e => {
        setEndDate(e.target.value);
    };

    const handleEndTimeChange = e => {
        setEndTime(e.target.value);
    };

    const handleDurationChange = e => {
        setDuration(e.target.value);
    };

    const handleRoomIdChange = e => {
        setRoomId(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Validate input here (you can use a library like moment.js for more advanced date-time handling)

        // Combine start date and time
        const startDateTime = new Date(`${startDate}T${startTime}`);

        // Combine end date and time
        const endDateTime = new Date(`${endDate}T${endTime}`);

        // Handle the captured date, time, and duration values as needed
        console.log('Start Date:', startDateTime);
        console.log('End Date:', endDateTime);
        console.log('Duration:', duration);
        console.log('Room ID:', roomId);

        // Call the safeMint function with your contract
        if (contract) {
            try {
                // Convert duration to a number if needed
                const durationInSeconds = parseInt(duration);

                // Call the safeMint function
                const data = await contract.call('safeMint', [
                    address,
                    roomId,
                    1000,
                    2000,
                    durationInSeconds,
                ]);

                // Handle the response from the contract here
                console.log('safeMint Response:', data);
            } catch (error) {
                console.error('Error calling safeMint:', error);
            }
        } else {
            console.error('Contract not loaded or not connected to Web3');
        }
    };

    return (
        <>
            <div
                className="flex mx-40 rounded-lg bg-gradient-to-r from-teal-200 via-cyan-300 
      via-purple-400 to-pink-400 text-base rounded-2xl mt-8"
            >
                <div className="m-[2px] bg-white rounded-lg w-full flex">
                    <div to="/home" className="p-8 w-full flex flex-col">
                        <div className="w-full flex justify-end">
                            <button
                                className="rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 
            dark:focus:ring-cyan-800 font-medium
            text-sm px-5 py-2.5 text-center"
                            >
                                <p>Change homestay contract</p>
                            </button>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col "
                        >
                            <label>Homestay name</label>
                            <input
                                className="border-gray-300 border-2 rounded-lg py-1.5 px-4
                 text-sky-500 disabled:border-slate-300 mt-4 w-fit"
                                style={{ color: '#3B82F6' }}
                                placeholder="Alexander Homestay"
                                disabled
                            />
                            <div className="flex flex-col mt-6">
                                <div className="flex">
                                    <label className="mt-6 mr-4">Room ID</label>
                                    <input
                                        className="mt-4 border-2 py-1.5 px-4 rounded-lg 
                  focus:border-sky-500 focus:border-2 focus:outline-none 
                  w-fit"
                                        placeholder="Room No"
                                        type="number"
                                        onChange={handleRoomIdChange}
                                    />
                                </div>
                                {/* <div className="flex mt-[18px]">
                                    <label className="mt-6 mr-4">
                                        Duration by second
                                    </label>
                                    <input
                                        className="mt-4 border-2 py-1.5 px-4 rounded-lg focus:border-sky-500 focus:border-2 focus:outline-none "
                                        placeholder="36000 (1 day), etc..."
                                        type="number"
                                        value={duration}
                                        onChange={handleDurationChange}
                                    />
                                </div> */}
                            </div>
                            <div className="mt-6 flex flex-row">
                                <label className="mt-4 mr-8">Start Date</label>
                                <input
                                    type="time"
                                    className="mt-2 mr-4 border-2 py-1.5 px-4 rounded-lg focus:border-sky-500 focus:border-2 focus:outline-none "
                                    placeholder="Select time start"
                                    value={startTime}
                                    onChange={handleStartTimeChange}
                                />
                                <input
                                    type="date"
                                    className="mt-2 border-2 py-1.5 px-4 rounded-lg focus:border-sky-500 focus:border-2 focus:outline-none "
                                    placeholder="Select date start"
                                    value={startDate}
                                    onChange={handleStartDateChange}
                                />
                            </div>
                            <div className="mt-6 flex flex-row">
                                <label className="mt-4 mr-10">End Date</label>
                                <input
                                    type="time"
                                    className="mt-2 mr-4 border-2 py-1.5 px-4 rounded-lg focus:border-sky-500 focus:border-2 focus:outline-none "
                                    placeholder="Select time end"
                                    value={endTime}
                                    onChange={handleEndTimeChange}
                                />
                                <input
                                    type="date"
                                    className="mt-2 border-2 py-1.5 px-4 rounded-lg focus:border-sky-500 focus:border-2 focus:outline-none "
                                    placeholder="Select date end"
                                    value={endDate}
                                    onChange={handleEndDateChange}
                                />
                            </div>
                            <div className="w-full flex justify-center mt-10">
                                <button
                                    type="submit"
                                    className="rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                  hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 
                  dark:focus:ring-cyan-800 font-medium rounded-lg 
                  text-sm py-4 px-12 text-center flex w-fit text-lg"
                                    onClick={() => {
                                        Modal.confirm({
                                            title: 'Confirm Booking',
                                            content:
                                                'Are you sure to confirm this booking?',
                                            onOk: () => handleSubmit,
                                            onCancel: () => {},
                                        });
                                    }}
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

BookingCard.displayName = 'Booking card';
export default memo(BookingCard);
