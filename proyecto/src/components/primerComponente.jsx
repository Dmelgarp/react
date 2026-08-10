import React, {useState} from "react";

export const PrimerComponente = () => {
    const [cursos, setCursos] = useState([
        "Ingeniería Termonuclear Avanzada",
        "Cómo tomar agua",
        "Boxeo contra canguros",
    ])

    const cambiarCurso = (nuevoCurso) => {
        const nuevosCursos = [...cursos]
        nuevosCursos[1] = nuevoCurso
        setCursos(nuevosCursos)
    }

    return (
        <>
            <h1>Primer Componente</h1>
            <p>Cursos disponibles</p>
                    
            <ul>
                {
                    cursos.map( (curso, index) => {
                        return(
                           <li key={index}> <strong className={curso.length >= 4 ? 'verde': 'rojo'}> {curso}</strong> </li> 
                        );
                    })
                }
            </ul>

            <input type="text" onChange={ e => cambiarCurso(e.target.value)} placeholder="Cambia el texto del curso"/>

            <button onClick={ e => (cambiarCurso("Como tomar alcohol"))}>
                Cambiar curso
            </button>
        </>
        
    )
}