import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/books/${search}`);
    } else {
      navigate(`/books`);
    }
    setSearch("");
  };
  return (
    <form onSubmit={handleSearchSubmit}>
      <label className='relative hidden sm:flex items-center lg:w-[30vw] border border-red-500'>
        <SearchIcon className='absolute left-2 text-slate-600' />
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search by Title, Author, Publisher or ISBN'
          className='px-10 py-2 focus:border focus:border-red-600 bg-gray-100 focus:bg-white focus:ring-1 focus:ring-red-500 text-red-600 border-none text-sm rounded-sm w-full transition-all delay-100'
        />
        <button type='submit' className='bg-red-600 text-white p-2'>
          <SearchIcon />
        </button>
      </label>
    </form>
  );
};

export default Search;
