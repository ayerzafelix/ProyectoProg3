import React from "react";
import { useParams } from "react-router-dom";

function SearchResults() {
  const { query } = useParams(); // Obtiene la consulta de búsqueda de los parámetros de ruta
  const buscador = `https://api.themoviedb.org/3/search/movie?api_key=b3c4e9f716ea1c455601574fe492773b&language=en-US&query=${query}&page=1&include_adult=false`
  

  return (
    <div>
      <h2>Resultados de Búsqueda para "{query}"</h2>
      {/* Aquí muestra los resultados */}
    </div>
  );
}

export default SearchResults;