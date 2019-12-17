import React, { Component } from 'react';
import mhouse from '../images/mhouse.jpg';

const Context=React.createContext();


export class Provider extends Component{
    state = {
        cards: [
          {
            id: 1,
            name: "Mhouse",
            text: "Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups.The customer is at    the heart of our unique business model, which includes design, production, distribution and sales through our extensive retail network. It is a Spanish fashion chain offering on-trend house-brand clothing, shoes & accessories. Address: Ljubljanska 3, Skopje 1000. Opens 10AM-Mon Phone: 02 308 7901. Now you can find us in Macedonia too, in Skopje -City Mall",
            src:mhouse,
            text1: "https://www.mhouse.com/"
        } ,
        {
          id: 2,
          name: "Bershka",
          text: "Bershka presents itself as a reference point for fashion targeting this increasingly demanding public and, in just 2 years, hasconsolidated its brand image in 100 shops; Today, after 18 years, the chain has more than 1000 stores in over 70 markets, with sales that represent 9% of the total revenue for the whole group. Address: Ljubljanska 3, Skopje 1000. Opens 10AM-Mon. Now you can find us in Macedonia too, in Skopje -City Mall ",
          src:mhouse,
          text1: "https://www.bershka.com/"
        } ,
     
                      
      ]
    }
        

        render(){
            return(
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            )
        }
      
  }
  export const Consumer=Context.Consumer;