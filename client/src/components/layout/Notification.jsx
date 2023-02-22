import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BOOK_CATEGORIES } from "../../utils/booksData";

const Notification = () => {
  const navigate = useNavigate();

  return (
    <header className='hidden md:block bg-white border-b border-red-600 mb-[5px]'>
      <nav className='container mx-auto flex items-center p-2 lg:px-8 space-x-10'>
        <div className='relative flex items-center justify-center z-50'>
          <button className='peer'>
            <div className='flex items-center justify-center w-14 overflow-hidden'>
              <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
                Book
              </h2>
            </div>
          </button>

          <div className='hidden peer-hover:flex peer-hover:flex-col hover:flex hover:flex-col w-[15rem] -m-3 flex-col bg-white drop-shadow-lg absolute top-9 text-md font-medium rounded-md'>
            {BOOK_CATEGORIES.map((cate) => (
              <p
                key={cate}
                onClick={() =>
                  navigate(`/books`, {
                    state: {
                      menuCategory: cate,
                    },
                  })
                }
                className='px-5 py-2 hover:bg-gray-200 cursor-pointer text-center'
              >
                {cate}
              </p>
            ))}
          </div>
        </div>
        <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
          New Arrivals
        </h2>
        <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
          Box Sets
        </h2>
        <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
          Best Sellers
        </h2>
        <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
          Friction Books
        </h2>
        <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
          Award Winners
        </h2>
        <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
          Featured Authers
        </h2>
        <h2 className='cursor-pointer border-r border-red-600 pr-5 hover:font-semibold'>
          Request a Book
        </h2>
        <Link to={"/myorders"} className='cursor-pointer hover:font-semibold'>
          Track Order
        </Link>
      </nav>
    </header>
  );
};

export default Notification;
