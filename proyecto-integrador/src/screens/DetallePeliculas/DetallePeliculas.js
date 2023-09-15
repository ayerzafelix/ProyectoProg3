import React, { Component } from "react";

class DetallePeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: {},
      generos: [],
      boton:'Agregar a Favoritos'
    };
  }

  componentDidMount() {
    const peliculaId = this.props.match.params.id
    const apiUrl = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US`;
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        this.setState({ 
            pelicula: data,
        generos: data.genres });
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null){
        if(recuperoStorage.includes(this.props.data.id)){   
            this.setState({
                boton: "Quitar de favoritos"
            })
        }
    }
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }
  favoritos(id){
    let arrayFavoritos = []
    let recuperoStorage = localStorage.getItem('favoritos');
    
    if(recuperoStorage !== null){
       arrayFavoritos = JSON.parse(recuperoStorage);   
    }
       
    if(arrayFavoritos.includes(id)){
        arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

        this.setState({
            boton: "Agregar a Favoritos"
        })


    } else {
        arrayFavoritos.push(id);
        this.setState({
            boton: "Quitar de favoritos"
        })
    }

    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)
}

  render() {
    const { pelicula } = this.state;
    console.log(pelicula);
    return (
      <div>
        <h1>Detalles de la Película</h1>
        <div className="contenedorCentral">
        <div className="contenedorDetalles">
                <img className="imagenPeliculaDetalle" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.original_title} />
                <h2 className="tituloPeliculaDetalle">Titulo: {pelicula.title}</h2>
                <h4 className="calificacionPeliculaDetalle">Rating {pelicula.vote_average}</h4>
                <h4 className="calificacionPeliculaDetalle">Fecha de estreno: {pelicula.release_date}</h4> 
                <h4 className="calificacionPeliculaDetalle">Duracion: {pelicula.runtime} minutos</h4>
                <h4 className="overviewPeliculaDetalle">Sinopsis: {pelicula.overview}</h4>
                <ul>Generos: {this.state.generos.map((genero) => <li key={genero.name}>{genero.name}</li>)}</ul>
                <button onClick={()=> this.favoritos(pelicula.id)}> {this.state.boton}</button>
        </div>
        </div>
      </div>
    );
  }
}

export default DetallePeliculas

