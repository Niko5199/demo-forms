import React from "react";

const App = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("on submit");
  };

  const handleButtonClick = function (e) {
    // e.stopPropagation();
    // * Este efecto es muy bueno ya que sabemos
    // * que es un compotamiento de propagacion,
    // * que activa el otro metodo, pero especificamente
    // * en este comportamiento no es una propagacion
    // * estamos activando el comportamiendo por defecto
    // * del formulario. Ya que el boton dispara el submit
    // * y como sabemos tenemos un evento que escucha ese cambio
    e.preventDefault();
    console.log("Hello - guys");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="txtNombre" id="" />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name="txtApellidos" id="" />
        </div>
        <button type="submit">Enviar</button>
        <button onClick={(e) => handleButtonClick(e)}>Click</button>
      </form>
    </div>
  );
};

export default App;
