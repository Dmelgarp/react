import React, {useState} from "react";

export const PrimerComponente = () => {
    const [cursos, setCursos] = useState([
        "Ingerieria Termonuclear Avanzada",
        "Como tomar agua",
        "Boxeo contra kanguros",
    ])

    const cambiarCurso = (nuevoCurso) => {
        setCursos[0]()
    }

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