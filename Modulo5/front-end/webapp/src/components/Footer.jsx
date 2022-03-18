import React from 'react';
import '../assets/css/style.css';
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo2.png';

export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap bg-dark justify-content-center aligne-items-center">
                <div className="item">
                    <img src={Logo} height="140" alt="logo" />
                </div>
                <div className="item">
                    <h3>Inicio</h3>
                    <a href="/" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Home</a>
                    <Link to="/Destinos" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Destinos</Link>
                    <Link to="/Promocoes" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Promoções</Link>
                </div>
                <div className="item">
                    <h3>Empresa</h3>
                    <a href="/#" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Empresa</a>
                    <a href="/#" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Contato</a>
                    <a href="/#" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Blog</a>
                </div>
                <div className="item">
                    <h3>Suporte</h3>
                    <a href="/#" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>FAQ</a>
                    <a href="/#" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Telefones</a>
                    <a href="/#" style={{display: "block", fontSize: "1.4rem", color: "#ccc"}}>Chat</a>
                </div>
                <div className="item">
                    <h3>Redes Sociais</h3>
                    <a href="https://pt-br.facebook.com" className="fa fa-facebook">&nbsp;</a>
                    <a href="https://twitter.com" className="fa fa-twitter">&nbsp;</a>
                    <a href="https://www.instagram.com" className="fa fa-instagram">&nbsp;</a>
                    
                    <a href="https://br.linkedin.com/" className="fa fa-linkedin">&nbsp;</a>
                    <a href="https://www.youtube.com/" className="fa fa-youtube">&nbsp;</a>
                </div>
            </footer>
            <div className="copy">
                &copy; 2022 Copyright - Monteiro Viagens
            </div>
        </>
    );
}
