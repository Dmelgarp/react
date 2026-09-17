import { createRoot } from 'react-dom/client'
import './index.css'
import Funciones from './reactES6/arrowFunctions';
import ArrowFun from './reactES6/arrowFunctions2';

const myElement = (
    <>
        <ArrowFun/>

    </>
);

createRoot(document.getElementById('root')).render(
    myElement
)
