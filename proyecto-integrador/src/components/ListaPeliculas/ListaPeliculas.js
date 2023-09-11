import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";

class ListaPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
    };
  }

  componentDidMount() {
    const apiUrl ="https://api.themoviedb.org/3/movie/popular?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

    // Realiza una solicitud GET a la API utilizando fetch
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el estado con los datos de la API
        this.setState({ peliculas: data.results });
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }

  render() {
    const { peliculas } = this.state;
    console.log(peliculas);
    return (
      <div>
        <h2>Lista de Películas</h2>
        <div className="pelicula-lista">
          {Array.isArray(peliculas) ? (
            peliculas.map((pelicula) => (
              <TarjetaPelicula key={pelicula.id} pelicula={pelicula} />
            ))
          ) : (
            <p>No se han encontrado películas.</p>
          )}
        </div>
      </div>
    );
  }
}

export default ListaPeliculas;
