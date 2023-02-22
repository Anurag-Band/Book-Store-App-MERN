import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GroupIcon from "@mui/icons-material/Group";

const AdminSidebar = () => {
  return (
    <aside className='min-h-screen w-[5rem] md:w-[25vw] xl:w-[17vw] flex flex-col bg-white text-slate-600'>
      <header className='p-2 my-5 flex items-center justify-start pl-10'>
        <img src={Logo} alt='Books Wagon' />
      </header>
      <section className='flex flex-col'>
        <Link className='admin-sidebar-tab' to={"/admin/dashboard"}>
          <DashboardIcon /> <span className='hidden md:block'>Dashboard</span>
        </Link>
        <Link className='admin-sidebar-tab' to={"/admin/books"}>
          <ImportExportIcon /> <span className='hidden md:block'>Products</span>
        </Link>
        <Link className='admin-sidebar-tab' to={"/admin/orders"}>
          <LocalShippingIcon /> <span className='hidden md:block'>Orders</span>
        </Link>
        <Link className='admin-sidebar-tab' to={"/admin/users"}>
          <GroupIcon /> <span className='hidden md:block'>Users</span>
        </Link>
      </section>
    </aside>
  );
};

export default AdminSidebar;
