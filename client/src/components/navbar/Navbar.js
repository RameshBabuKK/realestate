import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a className="navbar-brand" href="#">My Real Estate projects</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/aboutus">About Us</NavLink></li>
                    </ul>
                </div>
            </nav>

         /*{ <nav className="navbar navbar-expand-lg navbar-light navbg">
            <div className="logo">
                <img src = {require ('./../../assets/brand_icon.png') } width="100" height="50"/>
            </div>
            <a className="navbar-brand" href="#">My Real Estate projects</a>
                <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                            href="#" id="navbarDropdown" 
                            role="button" data-toggle="dropdown" 
                            aria-haspopup="true" aria-expanded="false">Project
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/newproject">New project</a>
                                <a className="dropdown-item" href="/listproject">List project</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contactus">Contact us</a>
                        </li>
                    </ul>
                </div>
        </nav> }*/
    )}
}

export default withRouter(Navbar);