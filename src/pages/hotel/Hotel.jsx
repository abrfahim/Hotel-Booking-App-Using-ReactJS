import React, { useState } from 'react';
import './HotelStyle.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons';
import MailList from './../../components/mailList/MailList';
import Footer from './../../components/footer/Footer'

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    
    const handleOpen=(i)=>{
        setSlideNumber(i);
        setOpen(true);
    }

    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];

    return (
        <div>
            <Navbar/>
            <Header type='list'/>
            <div className="hotelContainer">
                { open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className='close'/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow'/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocation}/>
                        <span>Gulshan 2, Dhaka-1212</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent Location 500m From Center
                    </span>
                    <span className="hotelPriceHighLight">
                        Book a stay over 80$ at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">Stay in the heart of city</h1>
                            <p className="hotelDesc">
                            At the hotel all rooms include air conditioning, a desk, a terrace with a city view, a private bathroom, a flat-screen TV, bed linen and towels. Each room comes with a safety deposit box and certain rooms also offer garden views. All guest rooms will provide guests with a wardrobe and a kettle.
                            Guests at Empyrean Dhaka City Centre can enjoy a buffet breakfast. At the accommodation you will find a restaurant serving American, Brazilian and Chinese cuisine. Vegetarian, halal and vegan options can also be requested.
                            BRAC University is 2.6 km from Empyrean Dhaka City Centre, while AUST is 2.8 km from the property. The nearest airport is Hazrat Shahjalal International Airport, 7 km from the hotel.
                            </p>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a night stay</h1>
                                <span>
                                    Located in the real heart of city. This property has an excellent ratings score 9.2!
                                </span>
                                <h2><b>$80 </b> per Night</h2>
                                <button>Book now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};

export default Hotel;