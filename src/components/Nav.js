import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (  
        <nav>
            <Link to="/work">works</Link>
            <Link to="/about">about me</Link>
            <Link to="/contact">contact</Link>
        </nav>

    );
}
 
export default Nav;