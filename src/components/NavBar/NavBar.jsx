import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {
    return (
        <div className="flex justify-between items-center px-4 text-white bg-[rgb(17,17,17)]">
            <div className='left flex'>
                <div className="flex">
                    <img src="/img/en.png" alt="flag" />
                    <KeyboardArrowDownIcon />
                </div>

                <div className="flex">
                    <span>IND</span>
                    <KeyboardArrowDownIcon />
                </div>

                <div className='flex mx-1'>
                    <div className="mx-1"><Link to="/products/1">
                        Men
                    </Link></div>
                    <div className="mx-1"><Link to="/products/2">
                        Women
                    </Link></div>
                    <div className="mx-1"><Link to="/products/3">
                        Children
                    </Link></div>
                    <div className="mx-1"><Link to="/products/4">
                        Accessories
                    </Link></div>
                </div>

            </div>


            <div>
                <img className="h-10" src="/img/logo bw.png" alt="" />
            </div>
            <div className="flex">
                <div className="mx-1"><Link to="/">
                    Home Page
                </Link></div>
                <div className="mx-1"><Link to="/products/2">
                    About
                </Link></div><div className="mx-1"><Link to="/products/2">
                    Contact
                </Link></div>
                <div className="mx-1"><Link to="/products/2">
                    Stores
                </Link></div>

                <div className="flex text-gray-500">
                    <div className="cursor-pointer">
                        <SearchIcon />
                    </div>

                    <div className="cursor-pointer">
                        <PersonIcon />
                    </div>
                    <div className="cursor-pointer">

                        <FavoriteBorderOutlinedIcon />
                    </div>
                    <div className="flex cursor-pointer">
                        <div className="relative">
                            <ShoppingCartOutlinedIcon />
                        </div>
                        <span className="cart-count w-4 h-4 bg-sky-500 text-white text-center absolute right-4 top-1 justify-center">
                            <div>99</div>
                        </span>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default NavBar