import React from 'react'

const BookedCard = ({tokenId}) => {
  console.log(tokenId);
  return (
    <>
      <div className='flex mx-auto rounded-xl bg-gradient-to-r from-teal-200 via-cyan-300 
      via-purple-400 to-pink-400 text-base rounded-2xl'>
        <div className="m-[2px] bg-white rounded-xl w-full p-10">
            <div className='w-fit mx-auto'>
                Booked Card
            </div>
        </div>
      </div>
    </>
  )
}

export default BookedCard