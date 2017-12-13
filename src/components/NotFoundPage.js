import React from 'react';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
>>>>>>> 539900e701bd47232c553199b4cd4d24591f5b05

//Link tag uses client side routing vs a href serverside routing, use a href for external urls
//and use Link for clientside routing.
const NotFoundPage = () => (
    <div>
       404 - <Link to="/">Go Home</Link> 
    </div>
);

export default NotFoundPage;