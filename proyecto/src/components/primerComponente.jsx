import React from "react";

export const PrimerComponente = () => {
    let cursos = [
        "Ingerieria Termonuclear Avanzada",
        "Como tomar agua",
        "Boxeo contra kanguros",
    ]


    return (
        <>
            <h1>Primer Componente</h1>
            <p>Cursos disponibles</p>
            <ul>
                {
                    cursos.map( (curso, index) => {
                        return(
                            <li key={index}>{curso}</li>
                        )
                    })
                }
            </ul>
            <button onClick={ e => (cambiarCurso("Tomar alcohol"))}>
                Cambiar curso
            </button>
        </>
        
    )
}