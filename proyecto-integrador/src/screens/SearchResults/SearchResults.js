import React, { Component } from "react";
import TarjetaPelicula from "../../components/TarjetaPelicula/TarjetaPelicula";
class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    componentDidMount() {

        const { query } = this.props.match.params; 
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

    componentDidUpdate() {

        const { query } = this.props.match.params; 
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
        const { query } = this.props.match.params; 
        console.log(this.state.peliculas)

        return (
            <div>
                <div className='container'>
                       {this.state.peliculas.length === 0 ?
                    <div>
                        <h1>No se han encontrado resultados para "{query}":</h1>
                    </div>
                 :  
                       this.state.peliculas.map((pelicula)=>{
                        return(<div className='tarjeta'>
                            <TarjetaPelicula pelicula = {pelicula}></TarjetaPelicula>
                        </div>);
                
                       })}   
            </div>
            </div>
        );
    }
}

export default SearchResults;
