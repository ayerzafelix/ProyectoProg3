import React from "react";

import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SearchResults from "./components/SearchResults/SearchResults";
import DetallePeliculas from "./components/DetallePeliculas/DetallePeliculas";
import NotFound from "./components/NotFound/NotFound";
import Favoritos from "./components/Favoritos/Favoritos";



function App() {


  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/DetallePeliculas' exact={true} component={DetallePeliculas} />
          <Route path='/Favoritos' exact={true} component={Favoritos} />
        </Switch>
      </main>
      <Footer />

    </React.Fragment>
  );
}
export default App