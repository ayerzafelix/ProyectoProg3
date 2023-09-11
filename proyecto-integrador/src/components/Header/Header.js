import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para almacenar la consulta de búsqueda

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section>
      <div className='navbar'>
        <img src="/img/logo.png" alt="" className="logo" />
        <section className="barra">
          <form>
            <input
              type="text"
              id="input"
              placeholder="Buscar en DH Movies"
              className="buscador"
              name="search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <Link to={`/SearchResults/${searchQuery}`}>
              <button type="submit" id="search" className="bordelupa">
                <img src="/img/lupa.png" alt="" className="lupa" />
              </button>
            </Link>
          </form>
        </section>
        <nav>
          <ul className="inicio">
            <li><a className="inicio" href="/">HOME</a></li>
            <li><a className="inicio" href="/Favoritos">FAVORITOS</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Header;
