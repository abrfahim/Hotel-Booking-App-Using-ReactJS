import React from 'react';
import './SearchItem.css'

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121624706.webp?k=af7d2292ae04dc4e938b69891e5cada8980c401020985c65710b7d3600c1e0dd&o=" alt="" className="searchItemImg" />
            <div className="searchItemDescription">
                <h1 className="searchItemTitle">Tower Street Apartments</h1>
                <span className="searchItemDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubTitle">Studio Apratment with Airconditiong</span>
                <span className="siFeatures">
                    Entire Studio . 1 Bathroom . 25msqr 1 Full Bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="searchItemDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">$120</span>
                    <span className="siTaxOp">Includes Taxes and fees!</span>
                    <button className='siCheckButton'>See Availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;