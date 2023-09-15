import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";


class ListaPeliculasMasVistas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasMasVistas: [],
         };
    }

    componentDidMount() {
        const apiUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ peliculasMasVistas: data.results });
            })
            .catch((error) => {
                console.error("Error al obtener los datos de la API:", error);
            });
    }

    render() {
        const {peliculasMasVistas} = this.state;
        console.log("hola")
        return (
            <div>
                <h1>Todas las Peliculas mas vistas</h1>
                <div className="container">
                {peliculasMasVistas.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif" alt=""/>
                        <p>Cargando...</p>
                    </div>
                 :
                 peliculasMasVistas.map((peliculaMasVista) => (
                    <div className="tarjeta">
                        <TarjetaPelicula key={peliculaMasVista.id} peliculaMasVista={peliculaMasVista} />
                    </div>
                ))}
                </div>
            </div>
        )}
    }
       
export default ListaPeliculasMasVistas;


