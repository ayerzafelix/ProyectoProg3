import React from 'react';

function DetallePeliculas() {

    return(
        <section>
            <h2 class="titulos">DETALLE</h2>
                
                
                <section id="detallePelicula"></section>
            
                <section id="reviewPelicula"></section>
            
                <section class="" id="detalleTrailer"></section>
            
            
                <button class="botonPeliculas">Agregar a favoritos</button>
        </section>
    )
}

export default DetallePeliculas

/*componentDidMount() {
    const peliculaId = this.props.match.params.id
    const apiUrl = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=925f4b20191d3e6290b49bd816600eda&language=en-US`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => { console.log(data);
        this.setState({ pelicula: data });
      })
      .catch(error => {
        console.error('Error al obtener los datos de la API:', error);
      });
  } */