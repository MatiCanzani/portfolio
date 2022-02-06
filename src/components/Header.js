import React from 'react';
import { Link } from 'gatsby';
import Nav from './Nav';



const Header = () => {
    return ( 
        <header 
        >
            <div>
                <Link  to='/'>Portofolio</Link>
                <Nav />
            </div>
        </header>

    );
}
 
export default Header;