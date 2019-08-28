import React from 'react';
//aタグだとreloadされるがLink使うとsmoothに遷移してくれる(navlinkだとactiveクラスが付加される)
import { Link, NavLink } from 'react-router-dom';

const Navbar = () =>{
   return(
      <nav className="nav-wrapper red darken-3">
         <div className="container">
            <a className="brand-logo">Router</a>
            <ul className="right">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">about</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar;