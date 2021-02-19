import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';

function Header() {
    return (
        <div className='header'>
            <img className="header__logo" 
            src="https://www.ingic.com/assets-web/images/our-work/smart-mart/biglogo.jpg"
            />

            <div className='header__search'>
                <input className="header__searchInput"
                type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

        
            <div className="header__nav">
                <div className="header__option">
                    <span
                    className='header__optionLineOne'>Hello User</span>
                    <span
                    className='header__optionLineTwo'>Sign In
                    </span>
                </div>
                
                <div className="header__option">
                    <span
                    className='header__optionLineOne'>Returns</span>
                    <span
                    className='header__optionLineTwo'>& Orders
                    </span>
                </div>
                <div className="header__optionBasket">
                    <ShopTwoIcon/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
                    
            </div>
        </div>
        
        
    )
}

export default Header
