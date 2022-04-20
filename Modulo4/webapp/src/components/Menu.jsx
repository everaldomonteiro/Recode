import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo2.png";

export default function Menu() {
    return (
        <div className="bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto container">
                <a className="navbar-brand" href="/">
                    <img className="logo" height="140" src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse fix-mobil" id="navbarColor01">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Destinos">Destinos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Promocoes">Promoções</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contato">Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}