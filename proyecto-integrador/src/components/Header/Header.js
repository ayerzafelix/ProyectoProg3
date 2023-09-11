import React from 'react';

function Header() {
    return (
        <section>
       
        <div className='navbar'>
            <img src="/img/logo.png" alt="" class="logo" /> 
            
            <section class="barra">
                <form>
                    <input type="text" id="input" placeholder="Buscar en DH Movies" class="buscador" name = "search" />
    
                    <button type="submit" id="search" class="bordelupa">
                        <img src="/img/lupa.png" alt="" class="lupa" />
                    </button>
                </form>
            </section>       
            <nav>
                <ul class="inicio">
                    <li><a class="inicio" href="/">HOME</a></li>
                    <li><a class="inicio" href="/Favoritos">FAVORITOS</a></li>
                </ul>
            </nav>
            
        </div>

    </section>
    )
}

export default Header