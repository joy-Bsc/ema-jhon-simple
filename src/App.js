import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Shop from './components/Shop/Shop';
//import Cart from './components/Cart/Cart';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header></Header>
      <Input></Input>
      <Router>
        <Switch>
          <Route  path="/shop">
          <Shop></Shop>
          </Route>
          </Switch>
          </Router>
           
          <Router>
        <Switch>
          <Route  path='/review'>
            <Review></Review>
          </Route>
          </Switch>
      </Router>
           
      <Router>
        <Switch>
          <Route  path='/manage'>
            <Inventory></Inventory>
          </Route>

        </Switch>
      </Router>
      
      
            
         
      
  
 
     
      
    </div>
  );
}

export default App;
