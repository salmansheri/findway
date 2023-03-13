import React from "react";

const Search = ({ searchItem, setSearchItem }) => {
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="bg-white mt-10  flex rounded-lg overflow-hidden">
      <input
        className="w-full p-3 rounded-l-lg"
        placeholder="Search..."
        onChange={handleSearch}
      />
      <button
        className="bg-red-600 px-6 rounded-r-lg text-white font-semibold shadow-md"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
