import React from "react";
import { Link } from "gatsby";
import "./header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="inner">
                <h1>Austin Rovge</h1>
                <nav className="links">
                    <Link to="/">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/photography">Photography</Link>
                </nav>
            </div>
        </header>
    );
}
