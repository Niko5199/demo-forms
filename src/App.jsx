import React, { useState } from "react";

const App = () => {
  const [name, SetName] = useState("");
  const [lastName, SetLastName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("on submit", name, lastName);
  };

  const handleButtonClick = function (e) {
    e.preventDefault();
    console.log("Hello - guys");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="txtNombre"
            id="txtNombre"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            name="txtApellidos"
            id="txtApellidos"
            value={lastName}
            onChange={(e) => SetLastName(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
        <button onClick={(e) => handleButtonClick(e)}>Click</button>
      </form>
    </div>
  );
};

export default App;
