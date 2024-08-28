import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SearchComponent from "../Components/Search";
import Skeleton from "../Components/Skeleton";
import CryptoCard from "../Components/CryptoCard";
import { Pagination } from "flowbite-react";
import { paginationTheme } from "../theme";

const Market = () => {
  const [cryptos, setCryptos] = useState([]);
  const [filteredCryptos, setFilteredCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250",
          {
            headers: {
              accept: "application/json",
              "x-cg-api-key": "CG-krFyFt9NRcCW2ywuCQEbc7KQ",
            },
          }
        );
        setCryptos(response.data);
        setFilteredCryptos(response.data);
      } catch (error) {
        toast.error("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = cryptos.filter(
        (crypto) =>
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCryptos(filtered);
    } else {
      setFilteredCryptos(cryptos);
    }
  }, [searchTerm, cryptos]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const totalPages = Math.ceil(filteredCryptos.length / itemsPerPage);
  const currentCryptos = filteredCryptos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full">
      <SearchComponent setSearchTerm={setSearchTerm} />{" "}
      {loading ? (
        <div className="flex flex-row flex-wrap justify-center p-4 gap-5">
          {[...Array(itemsPerPage)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div>
          {currentCryptos.length === 0 ? (
            <div className="p-4 px-20">
              <p className="text-center text-white">
                No Crypto Currencies Found
              </p>
            </div>
          ) : (
            <div className="flex flex-row flex-wrap justify-center p-4 gap-5">
              {currentCryptos.map((crypto) => (
                <div
                  key={crypto.id}
                >
                  <CryptoCard crypto={crypto} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          theme={paginationTheme}
          layout="pagination"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          previousLabel="Go back"
          nextLabel="Go forward"
          showIcons
        />
      </div>
    </div>
  );
};

export default Market;
