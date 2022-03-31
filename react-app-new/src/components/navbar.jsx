import React, { Component } from 'react';

//StateLess Functional Component

const Navbar = ({totalCounter}) => {
    return ( 
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar 
                <span className="badge badge-secondary m-2 badge-pill">
                    {totalCounter}
                </span>
            </a>
      </nav>
     );
}

export default Navbar;