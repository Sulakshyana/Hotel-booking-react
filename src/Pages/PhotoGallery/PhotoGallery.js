import React from "react";
import { Header, Footer } from "../../Common";
import { Images } from "../../Constants";
const PhotoGallery =() =>{
    const imagesData = [
 
        { src: Images.Images.image4, alt: 'Image 4' },
        { src: Images.Images.image5, alt: 'Image 5' },
        { src: Images.Images.image7, alt: 'Image 7' },
        { src: Images.Images.image3, alt: 'Image 3' },
        { src: Images.Images.image11, alt: 'Image 11' },
        { src: Images.Images.image9, alt: 'Image 9' },
        { src: Images.Images.image10, alt: 'Image 10' },
        { src: Images.Images.image8, alt: 'Image 8' },
        { src: Images.Images.image17, alt: 'Image 16' },
        { src: Images.Images.image13, alt: 'Image 13' },
        { src: Images.Images.image16, alt: 'Image 16' },
        { src: Images.Images.image12, alt: 'Image 12' },
        { src: Images.Images.image1, alt: 'Image 1' },
        { src: Images.Images.image6, alt: 'Image 6' },
        { src: Images.Images.image2, alt: 'Image 2' },
        { src: Images.Images.image14, alt: 'Image 14' },
        { src: Images.Images.image15, alt: 'Image 15' },
      ];
    return(
      <div>
        <Header/>
             <div className="position-relative mb-4">
                <img src={Images.Images.photo}  alt="team" className="img-fluid img-container1 w-100 p-1"/> 
                <div className='news-div-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center'>
                    <div className="page-title-wrapper">
                        <h1 className="page-title fs-1" data-content-field="title">Photo Gallery</h1>
                        <br/> 
                        <div className="page-desc" data-content-field="description"><p className="fs-4 fs-lg-3">Centrally located hotel in the heart of Kathmandu with a quiet and family friendly atmosphere</p></div>
                        </div>
                    </div>
                  </div>

                  <div className="container">
                  <div className="row">
      {imagesData.map((image, index) => (
        <div key={index} className="col-lg-4 col-md-12">
          <img
            src={image.src}
            className="w-100 shadow-1-strong rounded mb-4"
            alt={image.alt}
            height="200px"
            weight="100%"
          />
        </div>
      ))}
    </div>
    </div>
        <Footer/>
        </div>
    );
}
export default PhotoGallery;