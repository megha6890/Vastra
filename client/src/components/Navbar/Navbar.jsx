import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from "../Cart/Cart";
import Profile from "../../pages/Profile/Profile";

import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar=()=>{
const [open,setOpen]=useState(false);
const [openProfile,setOpenProfile]=useState(false);

    return(
        <div className="navbar">
         <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwlCGI66p4v3sK2DGfN29VQQIYEm0xvQ4lQ&usqp=CAU" alt=""/>
                    <KeyboardArrowUpIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowUpIcon/>
                </div>
                <div className="item">
                    <Link className="link" to="/products/Women">Women</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/Men">Men</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/products/Children">Children</Link>
                </div>
            </div>
            <div className="center">
                <Link className="link" to="/">VASTRA</Link>
            </div>
            <div className="right">
           
                <div className="icons">
                    <SearchIcon/>
                    <div className="personIcon" onClick={()=>setOpenProfile(!openProfile)} >
                    <PersonIcon/>
                    </div>
                    <FavoriteIcon/>
                    <div className="cartIcon" onClick={()=>setOpen(!open)}>
                        <AddShoppingCartIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
         </div>
         {open && <Cart/>}
         {openProfile && <Profile/>}
        </div>
    )
}
export default Navbar;