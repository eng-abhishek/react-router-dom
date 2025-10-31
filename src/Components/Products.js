import React from "react";
import {Link, Outlet} from 'react-router-dom';
function Products(){

    return(<>
    <div>
        <h3>Products Page</h3>
    </div>
    <nav className="main-nav">
    
    <Link to="shirt">Shart</Link>
    <Link to="jeans">Jeans</Link>
    </nav>
    <Outlet/>
    </>);
}

export default Products;
