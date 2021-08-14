import React from 'react';
import { CursoItem } from './CursoItem';
import './items.css';
export const SemestreItem = (props) => {
    const { primero, segundo } = props.semestre;
    return (
        <div>
            {primero && (
                <div className="semestre-item">
                    <h3>1 Semestre</h3>
                    <CursoItem key={1} cursos={primero} />
                </div>
            )}
            {segundo && (
                <div className="semestre-item">
                    <h3>2 Semestre</h3>
                    <CursoItem key={1} cursos={segundo} />
                </div>
            )}
        </div>
    );
};
