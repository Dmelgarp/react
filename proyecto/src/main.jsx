import { createRoot } from 'react-dom/client'
import './index.css'
import Funciones from './reactES6/arrowFunctions';
import Map from './reactES6/arrayMap';
import Destructuring from './reactES6/destructuring';

const myElement = (
    <>
        <Destructuring/>
    </>
);

createRoot(document.getElementById('root')).render(
    myElement
)
