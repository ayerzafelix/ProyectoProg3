import React from "react";

import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";
import SearchResults from "./screens/SearchResults/SearchResults";
import DetallePeliculas from "./screens/DetallePeliculas/DetallePeliculas";
import Error from "./components/Error/Error";
import Favoritos from "./screens/Favoritos/Favoritos";
import VerTodas from "./screens/VerTodas/VerTodas";
import MasVistas from "./screens/MasVistas/MasVistas";
import PeliculasPopulares from "./screens/PeliculasPopulares/PeliculasPopulares";




function App() {


  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/DetallePeliculas/:id' exact={true} component={DetallePeliculas} />
          <Route path='/Favoritos' exact={true} component={Favoritos} />
          <Route path='/SearchResults/:query' exact={true} component={SearchResults} />
          <Route path='/Categorias/:categoria' exact={true} component={VerTodas} />
          <Route path='/MasVistas' exact={true} component={MasVistas} />
          <Route path='/PeliculasPopulares' exact={true} component={PeliculasPopulares} />
          
          <Route path="" component={Error} />
          
        </Switch>
      </main>
      <Footer />

    </React.Fragment>
  );
}
export default App