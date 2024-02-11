import React from "react";
import { useState } from "react";
import {Header, Footer} from "../../Common"
import { CiPhone,CiUser} from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const genderOption = [
    {
        value: 'male',
        label: 'Male'
    },
    {
        value: 'female',
        label: 'Female'
    },
    {
        value: 'other',
        label: 'Others'
    }
]
const Booking = () => {

    const [maxHeight, setMaxHeight] = useState(0);
    const [gender, setGenderOption] = useState(genderOption);
    const [selectedGender, setSelectedGender] = useState(gender[0].value);
    const [selectedinDate, setSelectedinDate] = useState(null);
    const [selectedoutDate, setSelectedoutDate] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const doctorDetails =()=>{ setShowDetails(!showDetails)}
    const datePickerRef = useRef(null);



    const toggleDetails = () => {
        console.log("Button clicked!");
        setShowDetails(!showDetails);
      };

  const showCalendar = (pickerRef) => {
    if (pickerRef.current) {
      pickerRef.current.setOpen(true);
    }
  };
    return(
        <div>
        <Header/>
        <div className=" form-container ">
        <div className="container  px-3 ">
        <div className="row ">
            <h3 className="title pb-3  pt-5">Book an Appointment </h3>
          </div>
          <div className="row ">
            <div className="col-12 col-md-4 my-2 my-md-0 ">
              <div className="form-group">
                <label className="form-label font-style">
                  <span>Check-in :</span>
                </label>
                <DatePicker
                  className="form-control date-picker"
                  selected={selectedinDate}
                  onChange={(date) => setSelectedinDate(date)}
                />
                <SlCalender className="icon" onClick={() => showCalendar} />
              </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-md-0 ">
              <div className="form-group">
                <label className="form-label font-style">
                  <span>Check out</span>
                </label>
                <DatePicker
                  className="form-control date-picker"
                  selected={selectedoutDate}
                  onChange={(date) => setSelectedoutDate(date)}
                />
                <SlCalender className="icon" onClick={() => showCalendar} />
              </div>
            </div>
            <div className="col-12 col-md-4 my-2 my-md-0 ">
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  onClick={() => toggleDetails()}>                
                  Check Availability
                </button>
              </div>
            </div>
          </div>
          {showDetails && (
            <div className="row  my-3   ">
                <div className="card-div col-12 ">
                    
                       <div className="box p-3  my-2" >
                       <div className="row mb-md-3  mt-2 mt-md-3">
                            <div className="col-12 col-md-4 my-2 my-md-0">
                            <div className="form-group">
                                <label className="form-label font-style"><span>FULL NAME *</span></label>
                                <input type="text" className="form-control " placeholder="Full Name"/>
                                <CiUser className="icon"/>
                               </div> 
                            </div>
                             <div className="col-12  col-md-4 my-2 my-md-0">
                             <div className="form-group">
                                <label className="form-label font-style" ><span>EMAIL *</span></label>
                                 <input type="text" className="form-control" />
                                 <MdOutlineEmail className="icon"/>
                            </div> 
                             </div>
                            <div className="col-12  col-md-4 my-2 my-md-0">
                            <div className="form-group">
                                  <label className="form-label font-style" ><span>PHONE *</span></label>
                                  <input type="text" className="form-control" />
                                  <CiPhone className="icon"/>
                            </div>
                             </div>
                    </div>
                   
                    <div className="row mb-md-3 ">
                        <div className="col-12 col-md-4">
                            <div className="row">
                                <div className="col-12 col-md-4 pe-md-0 my-2 my-md-0">
                                <div className="form-group">
                                     <label className="form-label font-style"><span>SEX *</span></label>
                                        <select className="form-select select-placeholder" defaultValue={selectedGender} onChange={(e)=>setSelectedGender(e.target.value)}>
                                         {gender.map(elem => <option key={elem.value} value={elem.value}>{elem.label}</option>
                                         )}
                                </select>
                                </div>
                                </div>
                                <div className="col-12 col-md-8 my-2 my-md-0">
                                    <div className="form-group">
                                        <label className="form-label font-style"><span>DATE OF BIRTH *</span></label>
                                        <input className="form-control " type="text"placeholder="mm/dd/yyyy"/>
                                        
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 my-2 my-md-0">
                            <div className="form-group">
                                <label className="form-label font-style"><span>COUNTRY *</span></label>
                                <select className="form-select">
                                    <option  value=""></option>
                                </select>
                                
                            </div>        
                        </div>

                        <div className="col-12 col-md-4 my-2 my-md-0">
                            <label className="form-label font-style"><span>PROVINCE *</span></label>
                             <select className="form-select">
                                        
                             </select>
                            
                        </div> 
                   </div>
                  
                    <div className="row  mb-md-3 ">
                         <div className="col-12">
                              <div className="form-group">
                                 <div className="row">
                                    <div className="col-12 col-md-4 my-2 my-md-0">
                                         <div className="form-group">
                                            <label className="form-label font-style"><span>CITY *</span></label>
                                            <input className="form-control"/>
                                             
                                         </div>    
                                     </div>
                                    <div className="col-12 col-md-4 my-2 my-md-0">
                                         <div className="form-group">
                                            <label className="form-label font-style"><span>ADDRESS *</span></label>
                                            <input className="form-control"/>
                                            
                                         </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                     <div className="row mb-2 mb-md-3">
                         <div className="col-12 my-2 my-md-0">
                            <div className="form-group">
                                 <label className="form-label font-style "><span>NOTE *</span></label>
                                <input className="form-control note" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                    
             </div>
             <div className="row d-flex justify-content-end">
                <div className="col-6 col-md-4 d-flex justify-content-end">
                <button className="btn btn-primary"  onClick={() => toggleDetails()}>Book Now</button> 
                </div>
            </div>
            </div>)}
                

        </div>
       
    </div>
        <Footer/>
    </div>
    )


}
export default Booking