// src/Navbar.js
import React from 'react';
import '../assets/css/Navbar.css';
import Logo from "../assets/Images/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineChatAlt } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {

  //OnClick
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login")
    // console.log("handleClick");
  }


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-center">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Jobs</a></li>
        <li><a href="/">Prepare</a></li>
      </ul>
      <ul className="navbar-right">
      <Link to='/login'>
         <FaRegUser style={{fontSize: '24px', margin: "0 10px", color:"black"}}   />   </Link>
         <HiOutlineChatAlt style={{fontSize: '24px', margin: "0 10px"}}   />
         <IoMdNotificationsOutline style={{fontSize: '24px', margin: "0 10px"}}    />
         <CgProfile  style={{fontSize: '24px', margin: "0 10px"}} />
      </ul>
    </nav>
  );
};

export default Navbar;


