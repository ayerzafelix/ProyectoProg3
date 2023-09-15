import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";


class ListaPeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasPopulares: [],
         };
    }

    componentDidMount() {
        const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ peliculasPopulares: data.results });
            })
            .catch((error) => {
                console.error("Error al obtener los datos de la API:", error);
            });
    }

    render() {
        const {peliculasPopulares} = this.state;
        console.log("PRUEBA DE RENDERIZADO")
        return (
            <div>
                <h1>Todas las Peliculas populares</h1>
                <div className="container">
                {peliculasPopulares.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif" alt=""/>
                        <p>Cargando...</p>
                    </div>
                 :
                 peliculasPopulares.map((peliculaPopular) => (
                    <div className="tarjeta">
                        <TarjetaPelicula key={peliculaPopular.id} peliculaPopular={peliculaPopular} />
                    </div>
                ))}
                </div>
            </div>
        )}
    }
       
export default ListaPeliculasPopulares;


