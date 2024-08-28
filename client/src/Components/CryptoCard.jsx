import React from "react";
import { Link } from "react-router-dom";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const CryptoCard = ({ crypto, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.2,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={`w-[350px] border-2 border-darkgrey bg-darkgrey shadow-lg rounded-lg p-8 ${
        crypto.price_change_percentage_24h > 0
          ? "hover:border-green"
          : "hover:border-red"
      }`}
    >
      <Link
        className="flex flex-col gap-2 justify-center items-start"
        to={`/markets/${crypto.id}`}
      >
        <div className="flex flex-row items-center gap-4">
          <img
            src={crypto.image}
            alt={crypto.name}
            className="w-16 h-16 object-contain"
          />
          <div className="flex flex-col overflow-hidden">
            <h2 className="text-xl text-white font-bold">
              {crypto.symbol.toUpperCase()}
            </h2>
            <h2 className="text-xs text-grey font-bold truncate">{crypto.name}</h2>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center mt-4 gap-4">
          <div
            className={`text-base font-semibold border-2 px-6 py-2 rounded-full ${
              crypto.price_change_percentage_24h > 0
                ? "border-green text-green hover:bg-green hover:text-white"
                : "border-red text-red hover:bg-red hover:text-white"
            }`}
          >
            {crypto.price_change_percentage_24h > 0
              ? `+${crypto.price_change_percentage_24h.toFixed(2)} %`
              : `${crypto.price_change_percentage_24h.toFixed(2)} %`}
          </div>

          {crypto.price_change_percentage_24h > 0 ? (
            <FaArrowTrendUp
              size={42}
              className="text-green border-2 border-green p-1.5 rounded-full hover:bg-green hover:text-white"
            />
          ) : (
            <FaArrowTrendDown
              size={42}
              className="text-red border-2 border-red p-1.5 rounded-full hover:bg-red hover:text-white"
            />
          )}
        </div>

        <div
          className={`text-2xl font-semibold mt-4 ${
            crypto.price_change_percentage_24h > 0 ? " text-green" : " text-red"
          }`}
        >
          ${crypto.current_price.toLocaleString()}
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <p className="text-gray-400 text-sm">
            Market Cap:{" "}
            <span className="text-white">
              ${crypto.market_cap.toLocaleString()}
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            Volume:{" "}
            <span className="text-white">
              ${crypto.total_volume.toLocaleString()}
            </span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CryptoCard;
