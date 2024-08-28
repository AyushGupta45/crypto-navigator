import React, { useEffect } from "react";

const Wallet = () => {
  // const { currentUser } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // const wallet = useSelector(selectWallet);
  // const initialBalance = 1000000;

  // useEffect(() => {
  //   if (currentUser) {
  //     dispatch(fetchWallet());
  //   }
  // }, [currentUser, dispatch]);

  // const calculatePercentageChange = () => {
  //   const difference = wallet - initialBalance;
  //   const percentageChange = (difference / initialBalance) * 100;
  //   return percentageChange.toFixed(2);
  // };

  // const percentageChange = calculatePercentageChange();
  // const isProfit = wallet >= initialBalance;

  return (
    // <>
    //   {currentUser ? (
    //     <div className="bg-black w-full rounded-xl p-4 py-5 mb-6">
    //       <div className="flex flex-row justify-between">
    //         <div className="flex flex-col text-white gap-1">
    //           <p className="text-sm">Total PortFolio</p>
    //           <p className="text-xl font-bold">
    //             {wallet.toLocaleString("en-IN", {
    //               style: "currency",
    //               currency: "INR",
    //             })}
    //           </p>
    //         </div>
    //         <div
    //           className={`flex flex-row items-center ${
    //             isProfit ? "text-green-500" : "text-red-500"
    //           }`}
    //         >
    //           <p>{percentageChange}%</p>
    //           {isProfit ? <FaArrowUp /> : <FaArrowDown />}
    //         </div>
    //       </div>
    //     </div>
    //   ) : null}
    // </>
    <div className="text-white">Wallet</div>
  );
};

export default Wallet;
