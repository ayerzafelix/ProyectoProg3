import React, { Component } from 'react';

class TarjetaPersonaje extends Component {

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
                <img src={this.props.pelicula.poster_path} alt={this.props.original_title} />
                
                <button onClick={()=>this.agregarAFavoritos(this.props.pelicula.id)} className='link' type="button">{ this.state.textoBoton }</button>

                <h2>{this.props.pelicula.title}</h2>
                <p>{this.props.pelicula.overview}</p>
                <p>{this.props.pelicula.release_date}</p>
            </article>
        )
    }

}

export default TarjetaPersonaje;
