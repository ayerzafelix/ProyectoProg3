import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import TarjetaPeliculaTop from "../TarjetaPeliculaTop/TarjetaPeliculaTop";

class ListaPeliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            peliculasMasVistas: [],
        };
    }

    componentDidMount() {
        const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
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

    render() {
        const { peliculas, peliculasMasVistas } = this.state;

        return (
            <div>
                <h1>Peliculas populares</h1>
                <div className="container">


                {

                   peliculas.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif" alt=""/>
                        <p>Cargando</p>
                    </div>
                 :


                 peliculas.slice(0, 5).map((pelicula) => (
                    <div className="tarjeta">
                        <TarjetaPelicula key={pelicula.id} pelicula={pelicula} />
                    </div>
                ))}

                
                    
                </div>
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <h1>Películas Más Vistas</h1>
                <div className="container">


                {
                   peliculasMasVistas.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif" alt=""/>
                        <p>Cargando</p>
                    </div>
                 :  peliculasMasVistas.slice(0, 5).map((pelicula) => (
                    <div className="tarjeta">
                        <TarjetaPeliculaTop key={pelicula.id} pelicula={pelicula} />
                    </div>
                ))}
                </div>
            </div>
        );
    }
}

export default ListaPeliculas;


