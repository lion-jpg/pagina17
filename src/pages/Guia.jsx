import React, { useState, useEffect } from "react";
import { imagenes } from '../api/funciones';
import vrede from '../assets/vrede.jpg';
import mount from '../assets/mount.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

const Guia = () => {
  const [eventos, setEventos] = useState([]);


  useEffect(() => {
    imagenes(setEventos);
  }, []); // Esto asegura que se llame solo una vez cuando el componente se monte
  //constante para agrtegar estrellas
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
      } else if (rating >= i + 0.5) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarEmpty} className="text-gray-400" />);
      }
    }
    return stars;
  };


  return (
    <div className="relative">
      <div className="h-screen relative">
        <video
          className="fixed inset-0 object-cover w-full h-full z-[-1]"
          autoPlay
          loop
          muted
        >
          <source src={mount} type="video/mp4" />
        </video>
        {/* <img className="fixed inset-0 object-cover w-full h-full z-[-1]" src={vrede} alt="pop" /> */}
        {/* <div className=" top-60 left-0 right-0 mx-auto w-full  p-4 h-64 overflow-y-auto bg-gray-200 bg-white bg-opacity-5 backdrop-blur-sm z-50"> */}
        <div className="mt-[50px]">
          <div className=" top-0 left-0 right-0 h-full overflow-y-auto bg-gray-200 bg-white bg-opacity-5 backdrop-blur-sm z-50 p-4">
            <h1 className="text-center text-3xl font-bold mb-4 text-white">Guias Turisticos</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {eventos.map(evento => (
                <li className="bg-black/85 h-auto text-white w-full rounded-md text-center relative p-4"
                  key={evento.id}>

                  {evento.attributes.foto_guia && evento.attributes.foto_guia.data.length > 0 && (
                    <img className="relative inset-0 mx-auto my-auto text-white gap-6 text-xl border-2 border-white  h-60 w-60 rounded-full"
                      // <img className="relative inset-0 mx-auto my-auto text-white gap-6 text-xl border-2 border-white  h-60 w-60 rounded-full"
                      src={`https://backend-culturas.elalto.gob.bo${evento.attributes.foto_guia.data[0].attributes.url}`}
                      alt="foto"
                    />
                  )}
                  <p>{evento.attributes.nombre}</p>
                  <p>{evento.attributes.apellido}</p>
                  <p>{evento.attributes.descripcion}</p>
                  <p>{evento.attributes.telefono}</p>
                  <div className="stars-container mt-2">
                    {renderStars(evento.attributes.estrellas)}
                  </div>

                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Guia;