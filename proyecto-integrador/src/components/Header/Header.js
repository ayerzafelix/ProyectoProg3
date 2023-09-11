import React from 'react';

function Header() {
    return (
        <section>
            <div>
                <section class="buscador">
                    <form>
                        <input type="text" id="input" placeholder="Buscar en DH Movies" class="buscador" name="search" value="" />


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