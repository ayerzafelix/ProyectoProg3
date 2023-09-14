import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import { Link } from "react-router-dom";
class ListaPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            peliculasMasVistas: [],
            verMas: false,
            texto: "ver más"
        };
    }

    componentDidMount() {
        const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

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
        const apiUrlMasVistas = "https://api.themoviedb.org/3/movie/top_rated?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

        fetch(apiUrlMasVistas)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ peliculasMasVistas: data.results });
            })
            .catch((error) => {
                console.error("Error al obtener los datos de la API (Más Vistas):", error);
            });
    }
    verMas(){
        if (this.state.verMas === false) {
            this.setState({
                verMas: true,
                texto: "ver menos"
            });
        } else {
            this.setState({
                verMas: false,
                texto: "ver mas" 
            })
        }
    }

    render() {
        const { peliculas, peliculasMasVistas } = this.state;

        return (
            <div>
                <h2>Peliculas populares</h2>
                <div className="lista-peliculas">


                {

                   peliculas.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif"/>
                        <p>Cargando</p>
                    </div>
                 :


                 peliculas.slice(0, 5).map((pelicula) => (
                    <div key={pelicula.id}>
                        <Link to={`/DetallePeliculas/${pelicula.id}`}>
                        <img className="imagen" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.original_title} />
                        </Link>
                        <h4>{pelicula.title}</h4>
                        <h5>{pelicula.release_date}</h5>
                        <button onClick={()=> this.verMas()}>{this.state.texto}</button>
                    </div>
                ))}

                
                    
                </div>

                <h2>Películas Más Vistas</h2>
                <div className="lista-peliculas">


                {
                   peliculas.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif"/>
                        <p>Cargando</p>
                    </div>
                 :


                    peliculasMasVistas.slice(0, 5).map((pelicula) => (
                        <div key={pelicula.id}>
                            <Link to={`/DetallePeliculas/${pelicula.id}`}>
                            <img className="imagen" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.original_title} />
                            </Link>
                            <h4>{pelicula.title}</h4>
                            <h5>{pelicula.release_date}</h5>
                            <button onClick={()=> this.verMas()}>{this.state.texto}</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListaPeliculas;


