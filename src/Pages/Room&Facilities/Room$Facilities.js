import React from "react";
import {Header, Footer} from "../../Common"
import { Images } from "../../Constants";
import { MdHeight } from "react-icons/md";

const Room$Facilities = () =>{
  
    return (
        <>
        <Header/>
        <div class="container">
  <div class="row mb-4">
    <div class="col">
    <div class="card">
  <img src={Images.Images.image1} height="200px" width="100%" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Suite Room</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>    
</div>
    <div class="col">
    <div class="card" >
  <img src={Images.Images.image6} height="200px" width="100%" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Delux Room</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content</p>
  </div>
</div>    </div>
    <div class="col">
    <div class="card" >
  <img src={Images.Images.image3} height="200px" width="100%" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">luxury room</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>    
</div>
  </div>
</div>

        <Footer/>
        </>
        );
}
export default Room$Facilities;