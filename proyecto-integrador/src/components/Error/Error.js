import React from 'react'

  function Error() {
    return (
      <div>
      <h1>Error 404 Not Found</h1>
      <div className="errorFoto">
        <img src="/img/error.png" alt="error" />
      </div>
      <br />
      <a className="volverahome" href="/">Click aquí para volver a la página principal</a>
    </div>
    )
  }

  export default Error