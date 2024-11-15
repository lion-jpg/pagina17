import axios from 'axios';
const url ="https://backend-culturas.elalto.gob.bo/api/imaguias?populate=*";
export const readImaguias = () =>axios.get(url);
export const createImaguia = newImaguia => axios.post(url,newImaguia);
export const updateImaguia = (id,updatedImaguia) => axios.put(`${url}//${id}`,updatedImaguia);
export const deleteImaguia = (id) => axios.delete(`${url}//${id}`);