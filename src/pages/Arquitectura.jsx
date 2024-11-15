import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/arquitectura.css'; // Asegúrate de que la ruta sea correcta

export default function Arquitectura() {
    const [arquitecturas, setArquitecturas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArquitecturas = async () => {
            try {
                const response = await axios.get("https://backend-culturas.elalto.gob.bo/api/arquitecturas?populate=*");
                setArquitecturas(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching arquitecturas:", error);
                setLoading(false);
            }
        };

        fetchArquitecturas();
    }, []);

    if (loading) {
        return <div>Cargando arquitecturas...</div>;
    }

    return (
        <div className="arquitectura-container">
            <h2>Arquitecturas</h2>
            <div className="arquitectura-list">
                {arquitecturas.map((item) => (
                    <div key={item.id} className="arquitectura-item">
                        <div className="image-container">
                            {item.attributes.foto_arq && item.attributes.foto_arq.data ? (
                                <img
                                    src={`https://backend-culturas.elalto.gob.bo${item.attributes.foto_arq.data.attributes.url}`}
                                    alt={item.attributes.titulo}
                                />
                            ) : (
                                <p>No hay foto disponible</p>
                            )}
                        </div>
                        <div className="data-container">
                            <h3>{item.attributes.titulo}</h3>
                            <p>{item.attributes.descrip}</p>
                            <p><strong>Ubicación:</strong> {item.attributes.ubicacion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 