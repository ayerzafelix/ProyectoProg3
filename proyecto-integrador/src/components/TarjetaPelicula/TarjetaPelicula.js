import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class TarjetaPelicula extends Component {

    constructor(props){
        super(props)
        this.state ={
            boton: "Agregar a favoritos",
            favoritos: []

        } 
    }

    componentDidMount(){
        let arrayFavoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');
        
        if(recuperoStorage !== null){
            arrayFavoritos = JSON.parse(recuperoStorage);

           if(arrayFavoritos.includes(this.props.pelicula.id)){
             this.setState({
                 boton: 'Quitar de favoritos'
             })
           }    
        }

    }

    agregarAFavoritos(id){
        let arrayFavoritos = []
        let recuperoStorage = localStorage.getItem('favoritos');
        
        if(recuperoStorage !== null){
           arrayFavoritos = JSON.parse(recuperoStorage);   
        }
           
        if(arrayFavoritos.includes(id)){
            arrayFavoritos = arrayFavoritos.filter( unId => unId !== id);

            this.setState({
                boton: "Agregar a Favoritos"
            })


        } else {
            arrayFavoritos.push(id);
            this.setState({
                boton: "Quitar de favoritos"
            })
        }

        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritos', arrayFavoritosAString)

        console.log(localStorage)
    }

    render(){
        return (
            <article className='character-card'>
                <Link to={`/DetallePeliculas/${this.props.pelicula.id}`}>
                <img className="imagen" src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`} alt={this.props.pelicula.original_title} />
                </Link>
                <h2>{this.props.pelicula.title}</h2>
                <h4>{this.props.pelicula.release_date}</h4>
                <button onClick={()=>this.agregarAFavoritos(this.props.pelicula.id)} className='link' type="button">{ this.state.boton }</button>
            </article>
        )
    }

}

export default TarjetaPelicula;
