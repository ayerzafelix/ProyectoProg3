import React, { Component } from "react";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import Filtro from "../Filtro/Filtro";

class ListaPeliculasMasVistas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasMasVistas: [],
            masVistasFiltrado: [],
            masVistas2: [],
            pages: ""
         };
    }

    componentDidMount() {
        const apiUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=1";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ peliculasMasVistas: data.results,
                    masVistasFiltrado: data.results,
                    masVistas2: data.results,
                    pages: data.page });
            })
            .catch((error) => {
                console.error("Error al obtener los datos de la API:", error);
            });
    }
    cargarMas() {
        const urlCargar = `https://api.themoviedb.org/3/movie/top_rated?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US&page=${this.state.pages+1}`
        fetch(urlCargar)
          .then((res) => res.json())
          .then((data) =>
            this.setState({
              peliculasMasVistas: this.state.peliculasMasVistas.concat(data.results),
              masVistasFiltrado: this.state.peliculasMasVistas.concat(data.results),
              page: this.state.pages+1,
            })
          )
          .catch(function(error){
            console.log('el error fue: ' + error);
          });
          }
          filtrador(filtrar){
            let pelisFiltradas = this.state.masVistas2.filter(pelicula => pelicula.title.toLowerCase().includes(filtrar.toLowerCase()))
            this.setState({
                peliculasMasVistas: pelisFiltradas,
            })
        }
    render() {
        const {peliculasMasVistas} = this.state;
        console.log("hola")
        return (
            <div>
                <h1>Todas las Peliculas más vistas</h1>
                <div className = "filtrador">
                <Filtro filtrador={(filtrar) => this.filtrador(filtrar)} />
                </div>
                <div className="container">
                {peliculasMasVistas.length === 0 ?
                    <div>
                        <img src="/img/Loadingbar.gif" alt=""/>
                        <p>Cargando...</p>
                    </div>
                 :
                 peliculasMasVistas.map((pelicula) => (
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
       
export default ListaPeliculasMasVistas;


