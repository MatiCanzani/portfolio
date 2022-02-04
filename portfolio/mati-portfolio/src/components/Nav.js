import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (  
        <nav>
            <Link to="/">works</Link>
            <Link to="/">about me</Link>
            <Link to="/">contact</Link>
        </nav>

    );
}
 
export default Nav;