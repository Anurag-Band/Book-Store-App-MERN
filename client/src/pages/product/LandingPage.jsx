import React, { useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
// import { product } from "../assets/demoproduct";
import SaleCarousel from "../../components/layout/SaleCarousel";
import MetaData from "../../components/layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../features/product/productSlice";
import { STATUSES } from "../../utils/STATUSES";
import Loader from "../../assets/loader.svg";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const getShuffledProducts = (arr) => {
    const arrayToSort = [...arr];
    const shuffledArray = arrayToSort
      ?.sort(() => Math.random() - 0.5)
      .slice(0, 8);
    return shuffledArray;
  };

  return (
    <div className='w-full'>
      <MetaData title='Online Bookstore | Buy Books Online | Read Books Online' />
      <SaleCarousel />
      <div>
        <div>
          <h2 className='mt-4 lg:mt-14 xl:py-5 text-2xl lg:text-4xl font-medium lg:font-semibold font-primary text-center'>
            Featured Books
          </h2>
          {status === STATUSES.LOADING ? (
            <div className='flex items-center justify-center w-full min-h-[60vh]'>
              <img src={Loader} alt='Loading...' className='w-24 h-24' />
            </div>
          ) : (
            <div className='container mx-auto px-2 xl:px-16 my-10 flex overflow-x-scroll space-x-14'>
              {getShuffledProducts(products).map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className='mt-4 lg:mt-14 xl:py-5 text-2xl lg:text-4xl font-medium lg:font-semibold font-primary text-center'>
            Best Sellers
          </h2>
          {status === STATUSES.LOADING ? (
            <div className='flex items-center justify-center w-full min-h-[60vh]'>
              <img src={Loader} alt='Loading...' className='w-24 h-24' />
            </div>
          ) : (
            <div className='container mx-auto px-2 xl:px-16 my-10 flex overflow-x-scroll space-x-14'>
              {getShuffledProducts(products).map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className='mt-4 lg:mt-14 xl:py-5 text-2xl lg:text-4xl font-medium lg:font-semibold font-primary text-center'>
            Newly Launched
          </h2>
          {status === STATUSES.LOADING ? (
            <div className='flex items-center justify-center w-full min-h-[60vh]'>
              <img src={Loader} alt='Loading...' className='w-24 h-24' />
            </div>
          ) : (
            <div className='container mx-auto px-2 xl:px-16 my-10 flex overflow-x-scroll space-x-14'>
              {getShuffledProducts(products).map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className='mt-4 lg:mt-14 xl:py-5 text-2xl lg:text-4xl font-medium lg:font-semibold font-primary text-center'>
            Now Trending
          </h2>
          {status === STATUSES.LOADING ? (
            <div className='flex items-center justify-center w-full min-h-[60vh]'>
              <img src={Loader} alt='Loading...' className='w-24 h-24' />
            </div>
          ) : (
            <div className='container mx-auto px-2 xl:px-16 my-10 flex overflow-x-scroll space-x-14'>
              {getShuffledProducts(products).map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className='mt-4 lg:mt-14 xl:py-5 text-2xl lg:text-4xl font-medium lg:font-semibold font-primary text-center'>
            Featured Books
          </h2>
          {status === STATUSES.LOADING ? (
            <div className='flex items-center justify-center w-full min-h-[60vh]'>
              <img src={Loader} alt='Loading...' className='w-24 h-24' />
            </div>
          ) : (
            <div className='container mx-auto px-2 xl:px-16 my-10 flex overflow-x-scroll space-x-14'>
              {getShuffledProducts(products).map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
