import React, {useState} from 'react';
import {Header, Footer} from "../../Common";
import {Images } from "../../Constants";
import { FaLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const slide_images = [
  Images.Images.image5,
  Images.Images.image6,
  Images.Images.image7,
  Images.Images.image10,
];

const gallery_images = [
  Images.Images.image1,
  Images.Images.image2,
  Images.Images.image8,
  Images.Images.image9,
  Images.Images.image5,
  Images.Images.image10,

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
              <img src={image} height="500px" width="100%" className="d-block w-100" alt={`Slide ${index + 1}`} />
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
              Hotel Aagaman,Kathmandu's tourist hubs converted into a luxury hotel gives travellers the kind of comfort they'd expect of a world-class hotel.
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
          </div>
        </div>
      </div>


    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 my-lg-1 my-xxl-2">
    {gallery_images.map((image, index) => (
  <div key={index} className='px-3 mb-3 mb-md-4 mb-xl-2'>
  <img
      src={image}
      className="w-100 shadow-1-strong rounded mb-4"
      alt=""
      height="200px"
      width="100%"
    />
  </div>

  ))}

</div>
<div className="text-center  mb-5"><Link to="/photo-gallery"><button className='btn btn-lg border border-dark pb -6'>Go To Photo Gallery <FaLine/></button></Link></div>


      <div className="row mt-6">
        <div className="col-6">
          <h2 className="text-center mb-4">A FAMILY FRIENDLY HOTEL IN KATHMANDU</h2>
          <p className="text-center mb-4">DELUXE ROOMS AND SUITES</p>
          <p className="text-center">
            Open the doors to any of our rooms at Hotel and you will be impressed with our comfortable and cozy furnishings.
          </p>
          <p className="text-center">
            Seize the opportunity to relive a luxury at a price you cannot beat! Get the treatment that you have long deserved.
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
