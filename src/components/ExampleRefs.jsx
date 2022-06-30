import React, { useRef } from "react";
// * UseRef hacemos una referencia, a algo

export const ExampleRefs = () => {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    // * La referencia nos devolvera un objeto o un null
    console.log(inputRef);
    if (inputRef) {
      inputRef.current.focus();
    }
    // * Esto esta mal ya que queremos acceder al estado
    // * de este elemento, y para eso tenemos hooks que
    // * acceden al estado
    // inputRef.current.value
  };

  return (
    <>
      <p>Example Refs</p>
      {/* Hacemos la referencia al input para poder obtener su informacion, ademas tenemos la 
    asociacion hacia el elemento input  */}
      <input ref={inputRef} type="text"></input>
      <button onClick={handleFocusInput}>Focus Input</button>
    </>
  );
};
