import React from 'react';
import ListaPeliculas from '../../components/ListaPeliculas/ListaPeliculas';
function Home() {
  
    return (
        <section>
            <h2 class="titulos">HOME</h2>

            <h2 class="ultimo">¡No te lo pierdas!</h2>
            


                <h2 class="ultimo">Peliculas populares</h2>

                <section class="imagen" id="popularMovies">
                <ListaPeliculas />
                </section>



                <h2 class="ultimo">Lo mas visto de peliculas</h2>

                <section class="imagen" id="masVistosPeliculas"></section>


        </section>
    )
}

export default Home