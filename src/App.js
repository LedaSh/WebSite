import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css'; 
 import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import {Provider} from './Components/Context';
import Menu from './Components/Menu';
import MenuCards from './Components/MenuCards';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Restaurant from './Components/Restaurant';
import Fastfood from './Components/Fastfood';

function App() {
  return (
  <Provider>
   <Router>
    <div className="App">
      <Header/>
  
      <Switch>
     <Route exact path ="/home" component={Home}/> 
     <Route exact path ="/restaurant" component={Restaurant}/>
     <Route exact path ="/fastfood" component={Fastfood}/>
     
      </Switch>
      <Footer/>
      
    </div>
    </Router>
    </Provider>
  );
}

export default App;
