import React from "react";

import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import SearchResults from "./screens/SearchResults/SearchResults";
import DetallePeliculas from "./screens/DetallePeliculas/DetallePeliculas";
import NotFound from "./screens/NotFound/NotFound";
import Favoritos from "./screens/Favoritos/Favoritos";
import ListaPeliculas from "./components/ListaPeliculas/ListaPeliculas";
import TarjetaPelicula from "./components/TarjetaPelicula/TarjetaPelicula";



function App() {


  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/DetallePeliculas/:id' exact={true} component={DetallePeliculas} />
          <Route path='/Favoritos' exact={true} component={Favoritos} />
          <Route path='/SearchResults' exact={true} component={SearchResults} />
          <Route path='/NotFound' exact={true} component={NotFound} />
          <Route path="/lista-peliculas" exact={true} component={ListaPeliculas} />
        </Switch>
      </main>
      <Footer />

    </React.Fragment>
  );
}
export default App