import React, {useEffect, useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom"

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { MdAccessTimeFilled } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

import "./Header.css"

const Header = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const googleSearchUrl = `https://www.google.com/search?q=hopefertility.com.np ${encodeURIComponent(searchQuery)}`;
      window.open(googleSearchUrl, "_blank");
      handleCloseSearchBar();
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const handleSearchIconClick = () => {
    setIsSearchBarVisible(true);
  };

  const handleCloseSearchBar = () => {
    setIsSearchBarVisible(false);
    setSearchQuery("");
  };
  const handleInputKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
  return (
    (
      <>
          <Navbar expand="lg" className="header-nav  my-md-0 py-md-0">
              <div className="container ">
                  <Navbar.Brand href="/" title="Hope Fertility And Diagnostic Private Limited" className="mx-0" >
                      {/* <img src={Images.logo} className="h-logo img-fluid ms-0 ms-lg-0 " alt="Hope Fertility And Diagnostic Private Limited" /> */}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className="" ><GiHamburgerMenu className="hamburger" /> <ImCross className="cross" style={{ height: "0.7rem" }} /></Navbar.Toggle>
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="justify-content-end flex-grow-1 d-flex align-items-start align-items-xl-center">
                          <div className="d-flex flex-column my-2">
                              <div className=" me-0 pe-0 mt-1 mt-lg-3 d-flex flex-column flex-lg-row justify-content-lg-end">
                                  <Link to='/' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="Home" >Home</Link>
                                  <Link to='/room&facilities' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="rooms&facilities" >Room&Facilities</Link>
                                  <Link to='/review' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="review" >Review</Link>
                                  <Link to='/book-now' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="book-now" >Book-Now</Link>
                                  {/* <div to='/' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="Home" >Home</div>
                                  <div to='/services' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="Services" >Services</div>
                                  <div to='/news' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="News" >News</div>
                                  <div to='/contact-us' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-0" title="Contact Us" >Contact Us</div> */}
                                  <FaSearch className="nav-custom-edits ms-4 my-2 mt-lg-1 d-none d-lg-block"
                                      onClick={handleSearchIconClick}
                                  />
                                      {isSearchBarVisible && (
                                        <div class="overlay d-inline-block position-fixed top-0 start-0 w-100 h-100">
                                          <div class="search-container position-absolute top-50 start-50 translate-middle text-center w-55">
                                          <form className="mb-5">
                                              <div class="input-group input-group-lg">
                                                  <input type="text"
                                                  placeholder="Search"
                                                  className="search-input mb-0 fs-5 bg-transparent text-white border-0 outline-0 w-90"                                                    value={searchQuery}
                                                  onChange={handleInputChange}
                                                  onKeyDown={handleInputKeyDown}
                                                  aria-label="Sizing example input" 
                                                  aria-describedby="inputGroup-sizing-lg"
                                                  />
                                                  <button className="close-button"  onClick={handleCloseSearchBar}><FaXmark /></button>
                                              </div>
                                              <hr className="border-3 m-0 text-white"/>
                                          </form>
                                      </div>
                                      </div>
                                      )}
                              </div>
                              {/* <div className=" me-0 pe-0 mt-1 mt-lg-3 ">
                                  <Link to='/' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-2 my-xxl-3 " title="Home" >Home</Link>
                                  <Link to='/services' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-2 my-xxl-3 " title="Services" >Services</Link>
                                  <Link to='/blogs' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-2 my-xxl-3 " title="Latest News" >Blogs</Link>
                                  <Link to='/contact-us' className="text-capitalize nav-custom-edits mx-4 my-2 my-lg-2 my-xxl-3 " title="Contact Us" >Contact Us</Link>
                                  <FaSearch className="nav-custom-edits ms-4 my-2 mt-lg-0 mb-lg-2" />
                              </div> */}
                          </div>
                      </Nav>
                  </Navbar.Collapse>

              </div>
          </Navbar>
      </>
  )
  );
}

export default Header;
