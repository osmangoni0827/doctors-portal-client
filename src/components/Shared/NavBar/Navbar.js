import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
<nav  className="navbar navbar-expand-lg navbar-light ">
  <div  className="container-fluid" style={{marginRight:'40px'}}>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li  className="nav-item ms-5">
          <Link to='/home'  className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li  className="nav-item ms-5">
          <Link to='/about'  className="nav-link"  >About</Link>
        </li>
        <li  className="nav-item ms-5">
          <Link to='/dashboard'  className="nav-link"  >Dashboard</Link>
        </li>
        <li  className="nav-item ms-5 ">
          <Link to='review'  className="nav-link text-white "  >Reviews</Link>
        </li>
        <li  className="nav-item ms-5 ">
          <Link to='/blog'  className="nav-link text-white "   >Blog</Link>
        </li>
        <li  className="nav-item ms-5 ">
          <Link to='/connect-us'  className="nav-link text-white"  >Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;