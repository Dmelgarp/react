import React from 'react';

export const SegundoComponente = () => {
    let nombre = "Diego";
    let web = "www.yo.com";
    let edad = 2;
    
    return (
        <div>
            <h1>Segundo Componente</h1>
            <ul>
                <li>Mi nombre es: {nombre}</li>
                <li>Mi edad es: {edad}</li>
                <li>Mi sitio web es: {web}</li>
            </ul>
        </div>
    )
}