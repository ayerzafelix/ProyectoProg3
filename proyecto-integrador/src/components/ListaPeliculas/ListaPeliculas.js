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
    const {peliculas} = this.state;
    console.log(peliculas);
    return (
        <div>
          {peliculas.map(pelicula => (
            <div>
             key={pelicula.id}
                  <img className="imagen" src={`https://image.tmdb.org/t/p/w500${pelicula.backdrop_path}`} alt = {pelicula.original_title} />
                  <h3 className="titulos">{pelicula.original_title}</h3>
                  <p className="titulos">Año: {pelicula.release_date}</p>
                  <p className="titulos">Descripción: {pelicula.overview}</p>
             </div>
        ))}
        </div>
    );
  }
}

export default ListaPeliculas;
