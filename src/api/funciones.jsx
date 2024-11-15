import axios from "axios";

const imagenes = async (setState) => {
  try {
    // Realizar la solicitud GET a la API
    const response = await axios.get('https://backend-culturas.elalto.gob.bo/api/imagens?populate=*');
    
    // Verificar que la respuesta tenga datos
    if (response.data && response.data.data) {
      // Aquí puedes acceder al arreglo de eventos
      const eventos = response.data.data;
      
      // Por ejemplo, puedes establecer el estado con los eventos
      setState(eventos);
      
      // También puedes imprimir los datos para verificar en la consola
      console.log(eventos);
    } else {
      console.error('La respuesta no contiene los datos esperados.');
    }
  } catch (error) {
    // Manejar errores de la solicitud
    console.error('Error al obtener los datos:', error);
  }
};
const actualizarEstrellas = async (id, nuevasEstrellas) => {
  try {
    const response = await axios.patch(`https://backend-culturas.elalto.gob.bo/api/imagens/${id}`, 
      { 
        data: {
          estrellas: nuevasEstrellas
        }
      }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Estrellas actualizadas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar las estrellas:', error);
  }
};
export { imagenes, actualizarEstrellas };