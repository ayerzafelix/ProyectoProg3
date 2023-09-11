import React, { Component } from "react";

class TarjetaPelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: [],
    };
    console.log(props);
  }

  componentDidMount() {
    const peliculaId = this.props.match.params.id
    const apiUrl = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => { console.log(data);
        this.setState({ pelicula: data });
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }

  render() {
    const { pelicula } = this.state;
    return (
      <div>
        <h2>Detalles de la Película</h2>
        <div className="pelicula-detalle">
          <img src={pelicula.imagen} alt={pelicula.titulo} />
          <h3>{pelicula.titulo}</h3>
          <p>Año: {pelicula.anio}</p>
          <p>Director: {pelicula.director}</p>
          <p>Descripción: {pelicula.descripcion}</p>
        </div>
      </div>
    );
  }
  
}

export default TarjetaPelicula;
