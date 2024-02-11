import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { Homepage } from "../Pages";
import { Booking } from "../Pages/BookingPage";
import Review from "../Pages/Review/Review";
import Room$Facilities from "../Pages/Room&Facilities/Room$Facilities";
import { PhotoGallery } from "../Pages/PhotoGallery";
import Login from "../Pages/Admin/Login";
const AppRouter = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <BrowserRouter basename="">
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/book-now" element={<Booking/>}/>
                <Route path="/review" element={<Review />} />
                <Route path="/room&facilities" element={<Room$Facilities />} />
                <Route path="/photo-gallery" element={<PhotoGallery />} />
                <Route path="/login" element={<Login />} />                
                <Route path="*" element={<Navigate to="/" />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;