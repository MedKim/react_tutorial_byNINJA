import React from 'react';
//aタグだとreloadされるがLink使うとsmoothに遷移してくれる(navlinkだとactiveクラスが付加される)
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) =>{
   console.log(props);
   setTimeout(() => {
      props.history.push('/about')
   }, 2000);

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
//higher Order ComponentであるwithRouterでwrappingする
//propsのプロパティをsuperchargeしてくれる
export default withRouter(Navbar);