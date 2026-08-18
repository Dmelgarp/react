// Funciones externas
import React, {useState} from "react"

function CambiarCurso(cursos, nuevoCurso, index){
    const nuevosCursos = [...cursos]
    nuevosCursos[index] = nuevoCurso
    return nuevosCursos

}
// Estructura principal
export function TercerComponente () {
    const nombre = "Diego Melgar Parada"
    const edad = 3
    const web = "www.yo.com"
    const [cursos, setCursos] = useState([
        "curso 1",
        "curso 2",
        "curso 3",
    ]
    )

// Resultado devuelto
    return(
        <>
            <h1>Tercer Componente</h1>
            <p>{nombre}</p>
            <p>{edad}</p>
            <p>{web}</p>

            <ul>
                {
                    cursos.map((curso, index) => {
                        return (
                            <li key={index}> <strong className={curso.length < 4 ? "rojo": "verde"}>{curso}</strong> </li>
                        )
                    })
                }
            </ul>
            <button type ="button" onClick={() => setCursos(CambiarCurso(cursos,"curso 213012", 1))}>
                Cambiar curso
            </button>
            <input type="text" onChange={(e) => setCursos(CambiarCurso(cursos,(e.target.value), 0))}/>
        </>
    )
}