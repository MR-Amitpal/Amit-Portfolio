import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <h2 className="logo">
                Amit<span>Pal</span>
            </h2>

            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

           <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>
                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                </li>
                
                 <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#education" onClick={() => setMenuOpen(false)}>
                        Education
                    </a>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;