import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/amazon.svg';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

const Header = () => {
    const [{ basket, user }] =useStateValue();
    const login =()=> {
        if(user) {
            auth.signOut();
        }
    }
    return (
      <nav className="header">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="search__wrapper">
          <input type="text" />
          <SearchSharpIcon className="search-icon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
              <span>Hello, {user ? user?.email : "Sing in"}</span>
              <span>{user ? "Sign out" : "Account & Lists"}</span>
            </div>
          </Link>
          <Link to={"/"} className="header__link">
            <div className="header__option">
              <span>Returns</span>
              <span> & Orders</span>
            </div>
          </Link>
          <Link to={"/checkout"} className="header__cart">
            <div className="header__option">
              <span>
                <ShoppingCartOutlinedIcon />
                <span className="count">{basket?.length}</span>
              </span>
              <span>Cart</span>
            </div>
          </Link>
        </div>
      </nav>
    );
}

export default Header;