import React from 'react';
import './MailList.css'

const MailList = () => {
    return (
            <div className="mail">
                <h1 className="mailTitle">Save Time, Save Money</h1>
                <span className="description">Signup and make a best deal.</span>
                <div className="mailInputContainer">
                    <input type="text" placeholder='Your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
    );
};

export default MailList;