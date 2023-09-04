import React from "react";

import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";


function App() {
  
  
  return (
    <React.Fragment>
      <Navbar />
      <h1>HOME</h1>
      <main>       
      <Switch>
  <Route path='/' exact={true} component={Home}/>

</Switch>
      </main>
      <Footer />
      
    </React.Fragment>
  );
}
export default App