import React from 'react';
import {Link} from 'react-router-dom';

//Link tag uses client side routing vs a href serverside routing, use a href for external urls
//and use Link for clientside routing.
const NotFoundPage = () => (
    <div>
       404 - <Link to="/">Go Home</Link> 
    </div>
);

export default NotFoundPage;