import React, {Component} from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula"

class ListaPeliculas extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas : [],
        }
    }
    componentDidMount(){
        const apiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

    // Realiza una solicitud GET a la API utilizando fetch 
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Actualiza el estado con los datos de la API
        this.setState({ peliculas: data });
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }
    render(){
        const { peliculas } = this.state;
        console.log(peliculas);
        return (
          <div>
            <h2>Lista de Películas</h2>
            <div className="pelicula-lista">
              {peliculas.map(pelicula => (
                <TarjetaPelicula key={pelicula.id} pelicula={pelicula} />
              ))}
            </div>
          </div>
        );
    }
}

export default ListaPeliculas