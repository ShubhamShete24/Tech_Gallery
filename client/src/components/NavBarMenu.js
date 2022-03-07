import React from 'react'
import { Link } from 'react-router-dom'

const NavBarMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Gadgets</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="products-nav nav-link" aria-current="page" to="/">Products Info</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="products-nav nav-link" to="/addProduct">Add Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBarMenu