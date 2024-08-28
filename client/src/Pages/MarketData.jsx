import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MarketData = () => {
  const id = useParams();
  const [coinData, setCoinData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id.symbol}`)
        .then((response) => {
          setCoinData(response.data);
        })
        .catch((e) => {
          console.error(e.message);
          setError(true);
        });
    }
  }, [id]);

  if (error) {
    return <div className="text-white">Error loading data</div>;
  }

  if (!coinData) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white">
      <h2>{coinData.name}</h2>
      <p>{coinData.symbol}</p>
      <p>Current Price: ${coinData.market_data.current_price.usd}</p>
      <p>{coinData.description.en}</p>
    </div>
  );
};

export default MarketData;
