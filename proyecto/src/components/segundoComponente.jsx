"use client"

// Funciones externas
import React, {useState} from "react"

function CambiarCurso(curso, nuevoCurso){
    const nuevosCursos = [...curso]
    nuevosCursos[1] = nuevoCurso
    return nuevosCursos
}

// Estructura principal
export function SegundoComponente () {
    const nombre = "Diego Melgar Parada"
    const edad = 3
    const web = "www.odoo.com"

    const [cursos, setCursos] = useState([
        "Teoria de la ingenieria termonuclear",
        "Como tomar agua",
        "Investigacion de la materia",
    ])

// Resultado devuelto
    return(
        <>
            <h1>Segundo componente</h1>
            <p> Mi nombre es : {nombre}</p>
            <p> Mi edad es : {edad}</p>
            <p> Mi pagina web es : {web}</p>
            <hr/>
            <h2>Cursos Disponibles</h2>
            <ul>
                {
                    cursos.map((curso, index) => {
                        return (
                            <li  key={index}>{curso}</li>
                        )
                    })
                }
            </ul>
            <input type="text"/>
            <button type="button" onClick={ () => setCursos(CambiarCurso(cursos, "Como tomar alcohol"))}>
                Cambiar curso
            </button>
        </>
    )
}