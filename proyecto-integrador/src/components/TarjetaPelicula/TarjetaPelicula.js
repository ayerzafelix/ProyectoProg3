import React, { Component } from 'react';

class TarjetaPelicula extends Component {

    constructor(props){
        super(props)
        this.state ={
            textoBoton: "Agregar a favoritos",
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
                 textoBoton: 'Quitar de favoritos'
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
                textoBoton: "Agregar a Favoritos"
            })


        } else {
            arrayFavoritos.push(id);
            this.setState({
                textoBoton: "Quitar de favoritos"
            })
        }

        let arrayFavoritosAString = JSON.stringify(arrayFavoritos)
        localStorage.setItem('favoritos', arrayFavoritosAString)

        console.log(localStorage)
    }


    render(){
        return (
            <article className='character-card'>
                <img className="imagenPeliculaDetalle" src={`https://image.tmdb.org/t/p/w500${this.props.pelicula.poster_path}`} alt={this.props.pelicula.original_title} />
                <h2 className="tituloPeliculaDetalle">{this.props.pelicula.title}</h2>
                <h4 className="calificacionPeliculaDetalle">{this.props.pelicula.release_date}</h4>
                <button onClick={()=>this.agregarAFavoritos(this.props.pelicula.id)} className='link' type="button">{ this.state.textoBoton }</button>
            </article>
        )
    }

}

export default TarjetaPelicula;
