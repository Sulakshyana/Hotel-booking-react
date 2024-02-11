import React, {useState} from 'react';
import {Header, Footer} from "../../Common";
import {Images } from "../../Constants";
import { FaLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import image5 from "../../images/home_gallary/5.jpg";
import image6 from "../../images/home_gallary/6.jpg";
import image7 from "../../images/home_gallary/7.jpg";
import image10 from "../../images/home_gallary/10.jpeg"

const slide_images = [
  image5,
  image6,
  image7,
  image10,
];

const Homepage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
  <>
  <Header/>
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slide_images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrev}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNext}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <h5 className="text-center">RELIVE A BYGONE ERA OF NEPAL'S HISTORY</h5>
            <p>
              Hotel Aagaman, Kathmandu is a heritage hotel, housed in a 19th-century palace within walking distance to popular places Thamel and Durbar Marg, Kathmandu's tourist hubs. It was the royal residence of the rulers of Nepal from 1894 until 1964, when it was converted into a luxury hotel. The facade was kept intact but the interiors were redesigned to give travellers the kind of comfort they'd expect of a world-class hotel. The hotel is characterized by exquisite and authentic objects d'art. For example, the carved windows displayed in the lobby bar are over 200 years old.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="mb-3 text-center">
            <h5 >ADDRESS</h5>
            <p>
              Hotel Aagaman<br />
              Lazimpat, Kathmandu, Nepal<br />
              Phone: +977 1 4511055
            </p>
            <a href="https://www.google.com/maps/place/Hotel+Shanker" target="_blank" className="d-block mb-2">Our Location on Google Maps →</a>
            <a href="#" target="_blank" className="d-block">Full Address for VISA Form / GDS Codes →</a>
          </div>
        </div>
      </div>


    <div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
  <img
      src={Images.Images.image1}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={Images.Images.image2}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Images.Images.image8}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={Images.Images.image9}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src={Images.Images.image5}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={Images.Images.image10}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
  <div className="text-center  mb-5"><Link to="/photo-gallery"><button className='btn btn-lg border border-dark pb -6'>Go To Photo Gallery <FaLine/></button></Link></div>
</div>


      <div className="row mt-6">
        <div className="col-6">
          <h2 className="text-center mb-4">A FAMILY FRIENDLY HOTEL IN KATHMANDU</h2>
          <p className="text-center mb-4">DELUXE ROOMS AND SUITES</p>
          <p className="text-center">
            Open the doors to any of our rooms at Hotel Shanker Kathmandu and you will be impressed with our comfortable and cozy yet classic furnishings that evoke an air of 'Old World Elegance' only found in a few 'great' hotels around the world.
          </p>
          <p className="text-center">
            Seize the opportunity to relive a bygone era of Nepal's history at a price you cannot beat! Get the royal treatment that you have long deserved in an authentic heritage hotel in Kathmandu.
          </p>
        </div>
        <div className="col-6">
          <h4 className="mb-3">ROOM AMENITIES:</h4>
          <ul>
            <li>Individual controlled air conditioning</li>
            <li>LED TV/ Local & Cable TV (60 Channels)</li>
            <li>Wi-Fi Internet Access</li>
            <li>Personal electronic safe</li>
            <li>Full bath amenities: hair dryer, shaving mirror</li>
            <li>Refrigerator, Tea/Coffee making facilities</li>
            <li>Non-Smoking room available</li>
            <li>IDD Telephone with extension in the bathroom</li>
            <li>Iron/Ironing Board (On Request)</li>
            <li>Weighing Scale</li>
          </ul>
          </div>
          <div className="text-center"><Link to="/room&facilities"><button className='btn btn-lg border border-dark mb-4'>View The Rooms</button></Link></div>

        </div>
    </div>
  <Footer/>
  </>
  );
}

export default Homepage;
