import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getPensumById } from '../../selectors/getPensumById';
import { SemestreItem } from '../semestre/SemestreItem';

import './semestre.css';
export const PesumSelection = () => {
    // hook
    // /pensum/1
    // /pesum/2
    const { pensumId } = useParams();
    // useMemo -> Memmorizar funciones
    const pensum = useMemo(() => getPensumById(pensumId), [pensumId]);

    if (!pensum) return <Redirect to="/" />;

    const { carrera, semestre } = pensum;
    return (
        <div>
            <div className="animate__animated animate__fadeIn">
                <h1>{carrera}</h1>
                <hr />
            </div>
            <div className="semestre-list animate__animated animate__fadeIn">
                {semestre.map((item, i) => (
                    <SemestreItem key={i} semestre={item} />
                ))}
            </div>
        </div>
    );
};
