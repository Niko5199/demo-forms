import "keen-slider/keen-slider.min.css";

import React, { forwardRef, useImperativeHandle } from "react";
import { useKeenSlider } from "keen-slider/react";

// * Componente Hijo
const Slide = ({ children }) => {
  return <div className="keen-slider__slide">{children}</div>;
};

// * Componente Padre
const ForwardSlider = ({ children, options }, ref) => {
  /*
   * Inicializamos nuestro slider
   * refCallback es la ref al componente en donde
   * * se montara.
   *
   * Los demas el slider y  sliderNode, es informacion,
   * con el sliderNode nos da la opcion de ir directamente
   * al elemento del DOM, no a la ref si no al elemento
   * del HTML.
   *
   * Y slider es toda la configuracion, con metodos internos
   * de la libreria.
   */
  const [refCallback, slider, sliderNode] = useKeenSlider(options);

  useImperativeHandle(ref, () => {
    return { slider, element: refCallback };
  });

  return (
    <div ref={refCallback} className="keen-slider">
      {children}
    </div>
  );
};

// * Este componente regresa Slider y  Slide devuelve
// *  2 componentes en uno solo
const Slider = forwardRef(ForwardSlider);
export { Slide, Slider };
