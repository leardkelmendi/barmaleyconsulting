import React from "react"
import logo from "../images/nyc5.png"

export default function Header() {
    return (
        <header>
            <nav className = "nav">
                <h1 className = "title">Barmaley Consulting</h1>
                <img src={logo} alt="logo" width="300px" className="imglogo" />
                <ul className="nav-items">
                    <li className="leftList"><a href="#services" className="nav-items">SERVICES</a></li>
                    <li className="middleList"><a href ="#partners" className="nav-items">PARTNERS</a></li>
                    <li className="rightList"><a href="#about" className="nav-items">ABOUT</a></li>
                </ul>
            </nav>
        </header>
    )
}