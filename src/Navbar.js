import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = props=>{
    return(
        <header>
        <h2><a>SeedTrust</a></h2>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/relatorios">Relatórios</Link></li>
          <li><Link to="/green-hub">Green Hub</Link></li>
        </nav>
      </header>
    );
}

export default Navbar;