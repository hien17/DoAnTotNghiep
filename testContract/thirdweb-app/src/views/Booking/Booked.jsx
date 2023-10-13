import { useAddress } from '@thirdweb-dev/react';
import BookedCard from './BookedCard';
import GetBookedContracts from './GetBookedContracts';

const Booked = ({ isButtonClicked }) => {
    const address = useAddress();
    // const { contract } = useContract("0xC8339AEeCa4a529a7a0571b9654024600f5FC137");
    // const { data, isLoading } = useContractRead(contract, "getNftsIdOfRenter", [[]])

    const { data, isLoading } = GetBookedContracts();
    // Handle the data when it's available
    // useEffect(() => {
    //   if (!isLoading && data && data.length > 0) {
    //     // Process the data here
    //     console.log(data);
    //   }
    // }, [isLoading, data]);

    return (
        <>
            <div className="flex mx-40 mr-40 rounded-xl text-base rounded-2xl mt-8">
                <div className="m-[2px] bg-white rounded-xl w-full flex justify-between gap-10">
                    {isLoading && <p>Loading data...</p>}
                    {isButtonClicked && data && !isLoading && (
                        <>
                            {data.map((data, index) => (
                                <BookedCard
                                    key={index}
                                    tokenId={data}
                                ></BookedCard>
                            ))}
                        </>
                    )}
                    {!isLoading && !data && <div>Token Id does not exist!</div>}
                </div>
            </div>
        </>
    );
};

export default Booked;
