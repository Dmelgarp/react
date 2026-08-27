import { createRoot } from 'react-dom/client'
import './index.css'
import Normal from './reactES6/arrowFunctions';

const myElement = (
    <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Diego</td>
                </tr>
                <tr>
                    <td>Mario</td>
                </tr>
            </tbody>
        </table>

        <Normal/>

    </>


);

createRoot(document.getElementById('root')).render(
    myElement
)
