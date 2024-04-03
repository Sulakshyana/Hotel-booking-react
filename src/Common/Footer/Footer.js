  import React, { useState, useEffect } from "react";
  import { Container } from "react-bootstrap";
  import { Link } from "react-router-dom"
  // import { Api, Images } from "../../Constants";
  
  import { ImFacebook } from "react-icons/im";
  import { RiInstagramLine } from "react-icons/ri";
  
  
import "./Footer.css"  
  
  const Footer = () => {
      return (
          <footer>
              <div className="footer">
                  <Container>
                      <div className="row d-flex flex-colum justify-content-center">
                          {/* <img src={Images.logo1} className="f-logo img-fluid mt-4 " alt="Hope Fertility And Diagnostic Private Limited" /> */}
                          <div className="text-center mt-2">
                              <h5 className="mt-2">Useful Links</h5>
                              <div className="d-flex flex-column flex-lg-row my-3 justify-content-center">
                                  <div className=" mt-2 mt-lg-1 mx-lg-3 footer-text">
                                     <Link to="/" className="text-white">Home</Link>
                                  </div>
                                  <div className=" mt-2 mt-lg-1 mx-lg-3 footer-text">
                                  <Link to="/room&facilities" className="text-white">Room&Facilities</Link>
                                  </div>
                                  <div className=" mt-2 mt-lg-1 mx-lg-3 footer-text">
                                  <Link to="/review" className="text-white">Review</Link>
  
                                  </div>
                                  <div className=" mt-2 mt-lg-1 mx-lg-3 footer-text">
                                     <Link to="/book-now" className="text-white">Book-Now </Link>
                                  </div>
                              </div>
                          </div>
                          <div className="text-center mb-3">
                              <h5 className="mt-2">Follow Us</h5>
                              <div className="d-flex flex-row justify-content-center my-3">
                                  <ImFacebook color="#b396b0" className="me-2 me-lg-3 f-icons" />
                                  <RiInstagramLine color='#b396b0' className="f-icons" />
                              </div>
                          </div>
                      </div>
                      {/* <div className="row d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between py-4">
                          <div className="col text-center text-lg-start me-lg-5">
                              <img src={Images.logo1} className="f-logo img-fluid" alt="Hope Fertility And Diagnostic Private Limited" />
  
  
                              <div className="mt-3 mb-4 mb-lg-2 footer-text">
                                  Fertility experts, compassionate care, cutting-edge treatments. Family-oriented approach, personlaizedd solutions. Success and support, making dreams come true. Your journey to parenthood starts here. Trust, hope and healing.
                              </div>
                          </div>
  
                          <div className="col d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between me-md-5 mb-lg-2">
                              <div className="text-center text-lg-start">
                                  <h5 className="mt-2">Useful Links</h5>
                                  <div className="row my-3">
                                      <div className="col footer-text">
                                          Home <br />
                                          Services <br />
                                          Blogs <br />
                                          Contact us
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col text-center text-lg-start">
                              <h5 className="mt-2">Follow Us</h5>
                              <div className="d-flex flex-row justify-content-center justify-content-lg-start my-3">
                                  <ImFacebook className="me-2 me-lg-3 f-icons" />
                                  <RiInstagramLine className="f-icons" />
                              </div>
                          </div>
  
                          <div className="col text-center text-lg-start ms-lg-5 mb-lg-2">
                              <h5 className="mt-2">Privacy Policy</h5>
                              <div className="row my-3">
                                  <div className="col col-md-12 d-flex justify-content-center justify-content-lg-start footer-text">
                                      At IFV Clinic, we proritize the confidentiality and security of your personal information. We collect only necessary data for fertility treatment purposes and ensure it is stored safely. Your data will not be shared with third parties without explicit consent. Trust us to handle your information with utmost care.
                                  </div>
                              </div>
                          </div>
                      </div> */}
                  </Container>

              </div>
          </footer>
      )
  }
  


export default Footer;
