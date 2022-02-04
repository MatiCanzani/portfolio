import React from 'react';
import { Link } from 'gatsby';
import { css } from "@emotion/react"
import Nav from './Nav';



const Header = () => {
    return ( 
        <header 
        css={css`
            height: 100vh;
            background: #303237;
            color: whitesmoke;
        `}
        >
            <div>
                <Link>Portofolio</Link>
                <Nav />
            </div>
        </header>

    );
}
 
export default Header;