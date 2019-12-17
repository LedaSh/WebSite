import React, { Component } from 'react';
import mhouse from '../images/mhouse.jpg';
import {Consumer} from './Context';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import './Header.css'; 
import Home from './Home';
import {Link} from 'react-router-dom';
import MenuCards from '../Components/MenuCards';



class Menu extends Component{
 state=this.props.state 
     
  
  render () {
    let { id,name,text,src, text1} = this.props.state.cards;

    return( 
        
       
        <div className="card-deck">
        <div className="card">
          <img src={mhouse} class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-thetitle">SWEATSHIRT</h5>
            <p className="card-text">1,590.00 MKD</p>
              
          </div>
        </div>
        <div className="card">
          <img src={mhouse} class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-thetitle">BLAZER WITH CONTRASTING LAPELS</h5>
            <p className="card-text"> 4,590.00 MKD</p>
             
          </div>
    </div>
    
    </div>

 );
}}

export default Menu;
