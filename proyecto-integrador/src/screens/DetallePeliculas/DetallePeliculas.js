import React, { Component } from "react";

class DetallePeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: {},
      textoBoton:'Agregar a Favoritos'
    };
  }

  componentDidMount() {
    const peliculaId = this.props.match.params.id
    const apiUrl = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US`;
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        this.setState({ pelicula: data });
        let recuperoStorage = localStorage.getItem('favoritos');
        if (recuperoStorage !== null){
        if(recuperoStorage.includes(this.props.data.id)){   
            this.setState({
                textoBoton: "Quitar de favoritos"
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
        //Si el id está en el array queremos sacar el id.
        arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

        this.setState({
            textoBoton: "Agregar a Favoritos"
        })


    } else {
        arrayFavoritos.push(id);
        this.setState({
            textoBoton: "Quitar de favoritos"
        })
    }

    //Subirlo a local storage stringifeado
    let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
    localStorage.setItem('favoritos', arrayFavoritosAString)

    console.log(localStorage)
}

  render() {
    const { pelicula } = this.state;
    console.log(pelicula);
    return (
      <div>
        <h2>Detalles de la Película</h2>
        <div>
                <img className="imagenPeliculaDetalle" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.original_title} />
                <h2 className="tituloPeliculaDetalle">Titulo: {pelicula.title}</h2>
                <h4 className="calificacionPeliculaDetalle">Rating {pelicula.vote_average}</h4>
                <h4 className="calificacionPeliculaDetalle">Fecha de estreno: {pelicula.release_date}</h4> 
                <h4 className="calificacionPeliculaDetalle">Duracion: {pelicula.runtime} minutos</h4>
                <h4 className="overviewPeliculaDetalle">Sinopsis: {pelicula.overview}</h4>
                <button onClick={()=> this.favoritos(pelicula.id)}> {this.state.textoBoton}</button>
        </div>
      </div>
    );
  }
}

export default DetallePeliculas

