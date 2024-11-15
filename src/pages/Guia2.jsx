import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'; // Importar useNavigate
import axios from "axios";
import '../guia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

export default function Guia2() {
    const [comentario, setComentario] = useState('');
    const [estrellas, setEstrellas] = useState('');
    const [posts, setPosts] = useState([]);
    const [userIdToShow, setUserIdToShow] = useState(null); // Estado para el ID del usuario

    const { id } = useParams(); // Obtener el ID del usuario de la URL
    const navigate = useNavigate(); // Inicializar useNavigate

    useEffect(() => {
        if (!id) {
            navigate('/guia'); // Redirigir a Guia1 si no hay ID
        } else {
            setUserIdToShow(id); // Establecer el ID del usuario desde la URL
            getUsers(); // Cargar los posts automáticamente al montar el componente
        }
    }, [id, navigate]); // Agregar navigate a las dependencias

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

    const getUsers = async () => {
        try {
            const url = "https://backend-culturas.elalto.gob.bo/api/imagens?populate=*";
            const response = await axios.get(url);
            setPosts(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const createPost = async () => {
        try {
            const url = "https://backend-culturas.elalto.gob.bo/api/imagens";
            const body = {
                data: {
                    comentario,
                    estrellas: parseInt(estrellas, 10),
                }
            };
            const response = await axios.post(url, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data.data);
            getUsers();
        } catch (error) {
            console.error(error);
        }
    }

    // Filtrar el usuario específico basado en el ID
    const userToShow = posts.find(post => post.id === parseInt(userIdToShow));

    return (
        <div className="bg-black pt-[80px]">
            <div className="container bg-white bg-opacity-5">
                <div className="form-container">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            createPost();
                        }}
                    >
                        <div className="form-group">
                            <label>Comentario:</label>
                            <textarea
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Estrellas:</label>
                            <input
                                type="number"
                                min="0"
                                max="5"
                                value={estrellas}
                                onChange={(e) => setEstrellas(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Agregar Comentario</button>
                    </form>
                </div>

                <div className="posts-container mx-auto w-full max-w-4xl p-4 scroll bg-white bg-opacity-5 backdrop-blur-sm z-50">
                    <h2 className="text-white">Guias Turisticos</h2>

                    {userToShow ? (
                        <div className="post-item">
                            <h3 className="post-title">{userToShow.attributes.nombre} {userToShow.attributes.apellidos}</h3>
                            {userToShow.attributes.foto_guia && userToShow.attributes.foto_guia.data.length > 0 ? (
                                <img
                                    className="relative inset-0 mx-auto my-auto text-white gap-6 text-xl border-2 border-white h-60 w-60 rounded-full"
                                    src={`https://backend-culturas.elalto.gob.bo${userToShow.attributes.foto_guia.data[0].attributes.url}`}
                                    alt="foto"
                                />
                            ) : (
                                <p>No hay foto disponible</p>
                            )}
                            <p><strong>Descripción:</strong> {userToShow.attributes.descripcion}</p>
                            <p><strong>Teléfono:</strong> {userToShow.attributes.telefono}</p>
                            <p><strong>Estrellas:</strong> {userToShow.attributes.estrellas !== null ? userToShow.attributes.estrellas : 'No calificado'}</p>
                            <p><strong>Comentario:</strong> {userToShow.attributes.comentario.data ? userToShow.attributes.comentario.data : 'No hay comentarios disponibles'}</p>
                            <div className="stars-container mt-2">
                                {renderStars(userToShow.attributes.estrellas)}
                            </div>
                        </div>
                    ) : (
                        <p>No hay datos disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
