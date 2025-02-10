/**
 * Node Modules
 */
import { createBrowserRouter } from 'react-router-dom';


/**
 * components
 */
import App from '../App.jsx';
import Ticket from '../pages/Ticket.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/ticket',
        element: <Ticket />,
    }
])

export default router;