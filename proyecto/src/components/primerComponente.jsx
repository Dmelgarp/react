import React, {useState} from "react";

export const PrimerComponente = () => {
    const [cursos, setCursos] = useState([
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
            <button onClick={ e => (cambiarCurso("Como tomar alcohol"))}>
                Cambiar curso
            </button>
        </>
        
    )
}