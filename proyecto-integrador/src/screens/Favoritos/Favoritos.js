import React, {Component} from 'react';
import TarjetaPelicula from "../../components/TarjetaPelicula/TarjetaPelicula"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            peliculas:[],
            favoritos:[]
        }
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = (localStorage.getItem('favoritos'))
    
        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) 
            let listaPeliculas = [];
            console.log(favoritos);
            favoritos.map(Id => {
                let url = `https://api.themoviedb.org/3/movie/${Id}?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US`
                fetch(url)
                    .then(response => response.json())
                    .then(data => listaPeliculas.push(data))
                    .then(() => this.setState(
                        {
                            peliculas : listaPeliculas }
                            
                    ))
                    .catch(error => console.log('El error es' + error))
                  
            }) 
            
        }
    }
    render(){
        return(
            <section>
                <h2>Películas Favoritas</h2>
                   {this.state.peliculas.map((pelicula)=>{
                    return(<TarjetaPelicula pelicula = {pelicula}></TarjetaPelicula>);
                
                   })}
            </section>
         )
    }
}
export default Favoritos

