import React, {useState} from "react";

export const PrimerComponente = () => {
    let cursos = [
        "Ingerieria Termonuclear Avanzada",
        "Como tomar agua",
        "Boxeo contra kanguros",
    ]
    const [curso, setCurso] = useState("")

    const cambiarCurso = (nuevoCurso) => {
        curso[1].setCurso(nuevoCurso)
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
            <button onClick={ e => (cambiarCurso("Como tomar alcohol"))}>
                Cambiar curso
            </button>
        </>
        
    )
}