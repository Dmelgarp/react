import { createRoot } from 'react-dom/client'
import './index.css'
import Funciones from './reactES6/arrowFunctions';
import ArrowFun from './reactES6/arrowFunctions2';
import ArrowHead from './reactES6/arrowFunctions3';

const myElement = (
    <>
        <ArrowHead/>
    </>
);

createRoot(document.getElementById('root')).render(
    myElement
)
