import React from "react"
import "./Navbar.css"

function Navbar(){
    return(
        <nav className="navbar">
            <h1>TwitterChina</h1>
            <div className="links">
                <a href="/" >Home</a>
                {/* <a href="/create" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>New Item</a> */}
            </div>
        </nav>
    )
}

export default Navbar