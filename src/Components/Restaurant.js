import React, { Component } from 'react';
import mhouse from '../images/mhouse.jpg';
import fratelli from '../images/fratelli.jpg';
import delfin from '../images/delfin.jpg';
import grish from '../images/grish.jpg';
import {Link} from 'react-router-dom';

class Restaurant extends Component { 
    constructor(props) {
        super(props);
    }
      
      render(){
  
      return( 
          
           <div class="container" > <h1 class="card-titlee"><span></span><br></br>FOODclicks<br></br></h1>
           
      <div class="card-group vgr-cards">
        <div class="card">
          <div class="card-img-body">
          <img class="card-img" src={mhouse} alt="Card image cap"></img>
          </div>
          <div class="card-body">
            <h4 class="card-title">Juices&Coffee</h4>
            <p class="card-text"> Delivery: 10-15 min.</p>
            <a class="btn btn-outline-dark"><Link to="/menu">MENU</Link></a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-img-body">
            <img class="card-img" src={fratelli} alt="Card image cap"></img></div>
          <div class="card-body">
            <h4 class="card-title">Sandwiches and goodies</h4>
            <p class="card-text">Delivery: 10-15 min.</p>
            <a href="#" class="btn btn-outline-dark">Order</a>
          </div>
        </div>
      </div>
    
     
    <div class="card-group vgr-cards">
      <div class="card">
        <div class="card-img-body">
        <img class="card-img" src={delfin} alt="Card image cap"></img>
        </div>
        <div class="card-body">
          <h4 class="card-title">Restaurant</h4>
          <p class="card-text"> Delivery: 10-15 min.</p>
          <a href="#" class="btn btn-outline-dark">Order</a>
        </div>
      </div>
      <div class="card">
        <div class="card-img-body">
          <img class="card-img" src={grish} alt="Card image cap"></img></div>
        <div class="card-body">
          <h4 class="card-title">Food & Coffe Shop</h4>
          <p class="card-text">Delivery: 10-15 min.</p>
          <a href="#" class="btn btn-outline-dark">Order</a>
        </div>
      </div>
      
    </div>
  </div>
   );
  }}

export default Restaurant;