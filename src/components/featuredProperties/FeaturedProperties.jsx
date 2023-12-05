import React from 'react';
import './FeaturedProperties.css'

const FeaturedProperties = () => {
    return (
        <div>
            <div className="fp">
                <div className="fpItem">
                <img src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRoYWthJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className='fpImg'/>
                <span className="fpName">Aparthotel Old City</span>
                <span className="fpCity">Dhaka</span>
                <span className="fpPrice">Starting from $50</span>
                <div className='fpRating'>
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
                </div>

                <div className="fpItem">
                <img src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRoYWthJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className='fpImg'/>
                <span className="fpName">Aparthotel Old City</span>
                <span className="fpCity">Chittagong</span>
                <span className="fpPrice">Starting from $50</span>
                <div className='fpRating'>
                    <button>8.2</button>
                    <span>Excellent</span>
                </div>
                </div>

                <div className="fpItem">
                <img src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRoYWthJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className='fpImg'/>
                <span className="fpName">Aparthotel Old City</span>
                <span className="fpCity">Sylhet</span>
                <span className="fpPrice">Starting from $50</span>
                <div className='fpRating'>
                    <button>7.9</button>
                    <span>Excellent</span>
                </div>
                </div>

                <div className="fpItem">
                <img src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRoYWthJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" className='fpImg'/>
                <span className="fpName">Aparthotel Old City</span>
                <span className="fpCity">Coxs Bazar</span>
                <span className="fpPrice">Starting from $70</span>
                <div className='fpRating'>
                    <button>9.2</button>
                    <span>Excellent</span>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedProperties;