import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

const Connector = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/hotels' element={<List/>} />
                    <Route path='/hotel/:id' element={<Hotel/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Connector;