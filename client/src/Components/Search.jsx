import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchComponent = ({ setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-11/12 m-auto mb-4">
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-5 flex items-center">
            <CiSearch size={24} className="text-neutral-500" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-6 py-4 pl-14 text-sm text-white placeholder:text-neutral-500 placeholder:font-bold font-bold border-0 rounded-full bg-darkgrey focus:ring-0"
            placeholder="Search Crypto's"
            autoComplete="off"
            required
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
