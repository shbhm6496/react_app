import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
            
        <a className="navbar-brand" href="#">Navbar
        <span className="badge badge-secondary m-3 badge-pill">{this.props.totalCounter}</span>
            {/* Navbar <span className="badge badge-secondary"> {this.props.totalCounters}</span> */}
        </a>
      </nav> );
    }
}
 
export default Navbar;<div>
</div>