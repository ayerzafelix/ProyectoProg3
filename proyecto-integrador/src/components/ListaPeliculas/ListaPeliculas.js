import React, { Component } from "react";
import { Link } from "react-router-dom";

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

    verMas(peliculaId, esPopular) {
        const key = esPopular ? "peliculas" : "peliculasMasVistas";
        this.setState((prevState) => {
            const updatedPeliculas = prevState[key].map((pelicula) => {
                if (pelicula.id === peliculaId) {
                    return {
                        ...pelicula,
                        verMas: !pelicula.verMas,
                    };
                }
                return pelicula;
            });

            return { [key]: updatedPeliculas };
        });
    }

    render() {
        const { peliculas, peliculasMasVistas } = this.state;

        return (
            <div>
                <h2>Peliculas populares</h2>
                <div className="lista-peliculas">
<<<<<<< HEAD
                    {peliculas.slice(0, 5).map((pelicula) => (
                        <div key={pelicula.id}>
                            <Link to={`/DetallePeliculas/${pelicula.id}`}>
                                <img className="imagen" src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.original_title} />
                            </Link>
                            <h4>{pelicula.title}</h4>
                            <h5>{pelicula.release_date}</h5>
                            {pelicula.verMas ? (
                                <section>
                                    <h4 className="overviewPeliculaDetalle"> Descripcion: {pelicula.overview} </h4>
                                    <button className="boton-ver" onClick={() => this.verMas(pelicula.id, true)}>Ver menos</button>
                                </section>
                            ) : (
                                <button className="boton-ver" onClick={() => this.verMas(pelicula.id, true)}> Ver mas</button>
                            )}
                        </div>
                    ))}
=======


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

                
                    
>>>>>>> 6e5505cd339fb15e994755aa65314f839597bfc6
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
                            {pelicula.verMas ? (
                                <section>
                                    <h4 className="overviewPeliculaDetalle"> Descripcion: {pelicula.overview} </h4>
                                    <button className="boton-ver" onClick={() => this.verMas(pelicula.id, false)}>Ver menos</button>
                                </section>
                            ) : (
                                <button className="boton-ver" onClick={() => this.verMas(pelicula.id, false)}> Ver mas</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ListaPeliculas;
