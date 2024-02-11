import React, {useState}from "react";
import {Header, Footer} from "../../Common"
import { Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";

const Review = () =>{
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        email: '',
        review: ''
      });
     
      const handleFormSubmit = async (e) => {
        e.preventDefault(); 
        console.log(formData);
        postFormData();
      };
    //   const  postFormData = async () => {
    //     try {
    //       const res = await Api.submiContact_usFormData(formData);
    //       console.log('Form submission response:', res);
    //       toast.success('Form submitted successfully');
    //     } catch (error) {
    //       console.error('Form submission error:', error);
    //       toast.error('Error submitting form');
    //         }                            
    //       }

      const  postFormData = async () => {
        axios.post('http://localhost/api/user/review', formData)
      }
      const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
      const [isEmailFilled, setIsEmailFilled] = useState(false);

      const handleEmailChange = (event) => {
        setIsEmailFilled(event.target.value !== '');
      };
    
      const handlePhoneChange = (event) => {
        const sanitizedValue = event.target.value.replace(/\D/g, '');
        setIsPhoneNumberValid(sanitizedValue.length === 10);
        event.target.value = sanitizedValue;
      };
    return (
        <>
        <Header/>
      <div><ToastContainer/></div>
        <div className="container" >
          <div class="row" id="containerDiv">
            <div class="col-md-6 order-0 order-md-0 formDiv">     
              <h3 className="title mb-4 m-3">Leave your Review</h3>
              <form className="m-3" onSubmit={handleFormSubmit}>
              {/* <form className="m-3"> */}
                <div className="row mb-4">
                  <div className="col form-group">
                    <label htmlFor="exampleInput" className="form-label ">FULL NAME*</label>
                    <input 
                      type="text" 
                      name="fullname" 
                      placeholder="Full Name"  
                      className="form-control" 
                      id="exampleInput"
                      value={formData.full_name}
                      onChange={(e) => {
                        setFormData({ ...formData, fullname: e.target.value });}}
                      aria-describedby="emailHelp" 
                      required
                      aria-required="true" />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6 form-group mb-4">
                    <label htmlFor="phone" className="form-label">PHONE NUMBER*</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone_number}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          handlePhoneChange(e);}}
                        required
                        aria-required="true"
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit phone number"
                    />
                  </div>
                  <div class="col-md-6 form-group mb-4 mb-md-0">
                    <label htmlFor="Email" className="form-label">EMAIL*</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        handleEmailChange(e);}}
                      className={`form-control ${isEmailFilled ? 'filled' : ''}`} id="Email" 
                      placeholder="Email" 
                      required
                      aria-required="true" />
                  </div>
                </div>
              <div className="row mb-4">
                <div className="col form-group">
                  <label htmlFor="review" className="form-label">REVIEW*</label>
                  <textarea 
                    placeholder="Leave a review Here" 
                    name="review" 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, reiew: e.target.value });}}
                    rows="4"  
                    required
                    aria-required="true" ></textarea>
                </div>
                {/* <div className="row mb-4">
                  <div className="col form-group" >
                    <label htmlFor="suggestion" className="form-label ">SUGGESTION*</label>
                    <input 
                      type="text" 
                      name="address" 
                      placeholder="Address" 
                      className="form-control" 
                      id="exampleInput"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });}}
                      required 
                      aria-required="true" />
                  </div>
                </div> */}
              </div>
              <div className="row justify-content-end">
                <div className="col-4 d-flex justify-content-end">
                  <button type="submit" className="btn mb-3" id="sendBtn" >Send</button>    
                </div>
              </div>
            </form> 
          </div>
            <div className="col-md-6 order-1 order-md-1">
              
            </div>
          </div>
        </div>
        <Footer/>
        </>
        );
}
export default Review;