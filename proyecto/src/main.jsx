import { createRoot } from 'react-dom/client'
import './index.css'
import MyApp from './components/segundoComponente';
import Cars from './components/tercerComponente';

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

        <MyApp />

        <hr />

        <Cars />
    </>


);

createRoot(document.getElementById('root')).render(
    myElement
)
