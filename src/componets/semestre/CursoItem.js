import React from 'react';
import './items.css';
export const CursoItem = (props) => {
    const { cursos } = props;
    // console.log(cursos);
    return (
        <div>
            {cursos.map((curso, i) => (
                <div className="curso-item">
                    <p key={i}>{curso}</p>
                </div>
            ))}
        </div>
    );
};
