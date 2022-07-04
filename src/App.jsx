import React, { useRef, useState } from "react";
import ExampleForwardRef from "./components/ExampleForwardRef";
import { Slide, Slider } from "./components/Slider";

const App = () => {
  const [name, SetName] = useState("");
  const [lastName, SetLastName] = useState("");
  const nameInputRef = useRef(null);
  const sliderRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("on submit", name, lastName);
  };

  const handleButtonClick = function (e) {
    e.preventDefault();
    console.log(nameInputRef);
    console.log("Hello - guys");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <ExampleForwardRef
          ref={nameInputRef}
          label={"Nombre :"}
          id={"txtNombre"}
          value={name}
          onChange={(e) => SetName(e.target.value)}
          name={"txtNombre"}
        />
        <ExampleForwardRef
          label={"Apellidos :"}
          id={"txtApellidos"}
          value={lastName}
          onChange={(e) => SetLastName(e.target.value)}
          name={"txtApellidos"}
        />
        <button type="submit">Enviar</button>
        <button onClick={(e) => handleButtonClick(e)}>Click</button>
      </form>
      <div style={{ marginTop: 50 }}>
        <Slider
          ref={sliderRef}
          options={{
            slides: {
              perView: 1,
            },
          }}
        >
          <Slide>1</Slide>
          <Slide>2</Slide>
          <Slide>3</Slide>
        </Slider>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(sliderRef);
          sliderRef.current.next();
        }}
      >
        Siguiente
      </button>
      <button>Anterior</button>
    </div>
  );
};

export default App;
