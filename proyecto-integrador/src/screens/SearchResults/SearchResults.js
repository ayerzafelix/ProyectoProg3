import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    componentDidMount() {
        const { query } = this.props.match.params; // Obtén la consulta de búsqueda de los parámetros de ruta
        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&query=${query}&page=1&include_adult=false`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ peliculas: data.results });
            })
            .catch((error) => {
                console.error("Error al obtener resultados de búsqueda:", error);
            });
    }

    render() {
        const { peliculas } = this.state;
        const { query } = this.props.match.params; 

        return (
            <div>
                <h2>Resultados de Búsqueda para "{query}"</h2>
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id}>
                        <Link to={`/DetallePeliculas/${pelicula.id}`}>
                            <img
                                className="imagenPeliculaDetalle"
                                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                                alt={pelicula.original_title}
                            />
                        </Link>
                        <h4>{pelicula.title}</h4>
                        <h5>{pelicula.release_date}</h5>
                    </div>
                ))}
            </div>
        );
    }
}

export default SearchResults;
