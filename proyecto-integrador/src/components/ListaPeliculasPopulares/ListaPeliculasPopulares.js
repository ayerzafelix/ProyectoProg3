import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import Filtro from "../Filtro/Filtro";

class ListaPeliculasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasPopulares: [],
            popularFiltrado: [],
            populares2: [],
            pages: ""
         };
    }

    componentDidMount() {
        const apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ peliculasPopulares: data.results,
                    popularFiltrado: data.results,
                 pages: data.page,
                populares2: data.results});
            })
            .catch((error) => {
                console.error("Error al obtener los datos de la API:", error);
            });
    }

    cargarMas() {
        const urlCargar = `https://api.themoviedb.org/3/movie/popular?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=${this.state.pages+1}`
        fetch(urlCargar)
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              peliculasPopulares: this.state.peliculasPopulares.concat(data.results),
              popularFiltrado: this.state.peliculasPopulares.concat(data.results),
              page: this.state.pages+1,
            })
          )
          .catch(function(error){
            console.log('el error fue: ' + error);
          });
          }
          filtrador(filtrar){
            let pelisFiltradas = this.state.populares2.filter(pelicula => pelicula.title.toLowerCase().includes(filtrar.toLowerCase()))
            this.setState({
                peliculasPopulares: pelisFiltradas,
            })
        }

    render() {
        const {peliculasPopulares} = this.state;
        return (
            <div>
                <h1>Todas las Peliculas populares</h1>
                <div className = "filtrador">
                <Filtro filtrador={(filtrar) => this.filtrador(filtrar)} />
                </div>
                <div className="container">
                {peliculasPopulares.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif" alt=""/>
                        <p>Cargando...</p>
                    </div>
                 :
                 peliculasPopulares.map((pelicula) => (
                    <div className="tarjeta">
                        <TarjetaPelicula key={pelicula.id} pelicula={pelicula} />
                    </div>
                ))}
                </div>
                <div className = "filtrador">
                <button onClick={() => this.cargarMas()}> Cargar Mas ...  </button>
                </div>
            </div>
        )}
    }
       
export default ListaPeliculasPopulares;


