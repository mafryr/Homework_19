import React from 'react';
import Search from "./Search.js"
import "./Navbar.css"

function Navbar(){
    // used as the navbar for the site.
    return(
        <div className="navbar">
            <div className="logo bold">Rivera Inc. Employee Directory</div>
            <div className="descriptor">
                <div className="bold">Search for Employee (By Name): </div>
                <Search />
            </div>
        </div>
    )
}
export default Navbar;