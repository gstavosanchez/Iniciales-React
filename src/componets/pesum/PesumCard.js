import React from 'react';
import { Link } from 'react-router-dom';
import './pesum.css';
// Props
export const PesumCard = ({ id, carrera, semestre, imagen }) => {
    return (
        <>
            <Link
                className="card-item-link animate__animated animate__fadeIn"
                to={`/pesum/${id}`}
            >
                <div className="card-item">
                    <div className="card-item-body">
                        <h4 className="card-item-title">
                            {id} Ing.{carrera}
                        </h4>
                        <div className="card-item-img">
                            <img src={imagen} alt={`${carrera}.png`} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};
