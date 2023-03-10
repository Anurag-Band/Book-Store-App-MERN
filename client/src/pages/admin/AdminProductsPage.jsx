/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDeleteProduct,
  adminGetAllProducts,
} from "../../features/product/productSlice";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { STATUSES } from "../../utils/STATUSES";
import Loader from "../../assets/loader.svg";

const AdminProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allProducts, status } = useSelector((state) => state.product);

  const rows = [];

  allProducts &&
    allProducts.length > 0 &&
    allProducts.forEach((product) =>
      rows.push({
        id: product?._id,
        name: product.name,
        stock: product.stock,
        price: product.price,
      })
    );

  const handleProductDelete = (id) => {
    dispatch(adminDeleteProduct(id));
  };

  const columns = [
    {
      field: "id",
      headerName: "Product ID",
      minWidth: 50,
      flex: 0.2,
      headerClassName: "admin-dashboard-header",
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.3,
      headerClassName: "admin-dashboard-header",
    },
    {
      field: "stock",
      headerName: "Stock",
      minWidth: 100,
      type: "number",
      flex: 0.1,
      headerClassName: "admin-dashboard-header",
      cellClassName: (params) => (params.row.stock === 0 ? "redColor" : ""),
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 0.1,
      headerClassName: "admin-dashboard-header",
      renderCell: (params) => `$${params.row.price}`,
    },
    {
      field: "reviews",
      headerName: "Reviews",
      flex: 0.1,
      headerClassName: "admin-dashboard-header",
      minWidth: 100,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <button
            type='button'
            onClick={() => navigate(`/admin/reviews/${params.row.id}`)}
          >
            <VisibilityIcon />
          </button>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.1,
      headerClassName: "admin-dashboard-header",
      minWidth: 100,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <div className='space-x-3'>
            <button type='button' onClick={() => {}}>
              <EditIcon />
            </button>
            <button
              type='button'
              onClick={() => handleProductDelete(params.row.id)}
            >
              <DeleteForeverIcon />
            </button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    reFetchProducts();
  }, []);

  async function reFetchProducts() {
    dispatch(adminGetAllProducts());
  }

  const handleAllNewBook = () => {
    navigate("/admin/book/new");
  };

  return (
    <main className='w-full h-full flex flex-col'>
      <div className='text-2xl lg:text-4xl flex justify-around items-center pb-5 font-semibold text-slate-600 h-[10vh]'>
        <h2>All Books</h2>
        <button
          onClick={handleAllNewBook}
          className='py-1 px-6 rounded-sm w-40 text-xl text-blue-600 border border-blue-500 hover:bg-blue-200 active:bg-blue-400 active:text-white cursor-pointer'
        >
          Add New
        </button>
      </div>
      <div className='h-[80vh] bg-white'>
        {status === STATUSES.LOADING ? (
          <div className='flex items-center justify-center w-full h-full'>
            <img src={Loader} alt='Loading...' className='w-24 h-24' />
          </div>
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            getCellClassName={(params) =>
              params.row.stock === 0 ? "outOfStock" : "sec-cell"
            }
          />
        )}
      </div>
    </main>
  );
};

export default AdminProductsPage;
