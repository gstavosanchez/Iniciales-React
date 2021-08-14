import React, { useState } from 'react';
import { pensumList } from '../data/dataFacultad';
import { PesumCard } from './pesum/PesumCard';

import './pesum/pesum.css';

export const Inicio = () => {
    const [pensums] = useState(pensumList);

    return (
        <div>
            <div className="card-item-link animate__animated animate__fadeIn">
                <h2>Listado de Pensum</h2>
                <hr />
            </div>
            <div className="card-padre">
                {pensums.map((pensum, contador) => (
                    // <p key={contador}>{pensum.carrera}</p>
                    <PesumCard key={contador} {...pensum} />
                ))}
            </div>
        </div>
    );
};
