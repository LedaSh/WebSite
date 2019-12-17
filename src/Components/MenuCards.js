import React, { Component } from 'react';
import {Consumer} from './Context';
import Menu from '../Components/Menu';


class MenuCards extends Component {
  render () {
    
    return(
     <Consumer>
      
       {value=>{
        
          return(
            value.cards.map(cards => {
              return (
                
                 <div className="container">
                   
                  <Menu key={cards.id}
                   cards={cards} />
                  </div>
            )
            })
         )
          }}
   
      </Consumer>
    )}}

export default MenuCards;