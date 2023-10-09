import React, { useState } from 'react';

const BookingCard = () => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = (e) => {
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
  };

  return (
    <>
      <div className='flex p-25 mx-20 mr-20 rounded-xl bg-gradient-to-r from-teal-200 via-cyan-300 
      via-purple-400 to-pink-400 text-base rounded-2xl mt-8'>
        <div className="m-[2px] bg-white rounded-xl w-full flex">
          <div to="/home" className="p-20 mr-0 w-full flex flex-col">
            <div className='w-full flex justify-end'>
              <button className='rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 
            dark:focus:ring-cyan-800 font-medium rounded-lg 
            text-sm px-5 py-2.5 text-center flex w-fit'>
                <p className=''>
                  Change homestay contract
                </p>
              </button>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col '>
              <label>
                Homestay Name
              </label>
              <input
                className='border-gray-300 border-2 rounded-xl py-1.5 px-4 pr-80 text-sky-500 disabled:border-slate-300 mt-4'
                style={{ color: '#3B82F6' }}
                placeholder='Alexander Homestay'
                disabled
              />
              <label className='mt-6'>
                Room ID
              </label>
              <input
                className='mt-4 border-2 py-1.5 px-4 pr-80 rounded-xl focus:border-sky-500 focus:border-2 focus:outline-none '
                placeholder='Room No'
                type='number'
              />
              <label className='mt-6'>
                Duration by second
              </label>
              <input
                className='mt-4 border-2 py-1.5 px-4 pr-80 rounded-xl focus:border-sky-500 focus:border-2 focus:outline-none '
                placeholder='36000 (1 day), etc ...'
                type='number'
                value={duration}
                onChange={handleDurationChange}
              />
              <div>
                <label className='mt-6'>
                  Start Date
                </label>
                <input
                type="time"
                className='mt-2 border-2 py-1.5 px-4 pr-80 rounded-xl focus:border-sky-500 focus:border-2 focus:outline-none '
                placeholder='Select time start'
                value={startTime}
                onChange={handleStartTimeChange}
                />
                <input
                  type="date"
                  className='mt-4 border-2 py-1.5 px-4 pr-80 rounded-xl focus:border-sky-500 focus:border-2 focus:outline-none '
                  placeholder='Select date start'
                  value={startDate}
                  onChange={handleStartDateChange}
                />
              </div>
              <div>
                <label className='mt-6'>
                  End Date
                </label>
                <input
                type="time"
                className='mt-2 border-2 py-1.5 px-4 pr-80 rounded-xl focus:border-sky-500 focus:border-2 focus:outline-none '
                placeholder='Select time end'
                value={endTime}
                onChange={handleEndTimeChange}
                />
                 <input
                type="date"
                className='mt-4 border-2 py-1.5 px-4 pr-80 rounded-xl focus:border-sky-500 focus:border-2 focus:outline-none '
                placeholder='Select date end'
                value={endDate}
                onChange={handleEndDateChange}
                />
              </div>
              <div className='w-full flex justify-center mt-10'>
                <button
                  type="submit"
                  className='rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 
                  dark:focus:ring-cyan-800 font-medium rounded-lg 
                  text-sm py-4 px-16 text-center flex w-fit '
                >
                  <p className='text-xl'>Submit</p>
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
