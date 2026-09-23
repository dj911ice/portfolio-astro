import React from "react";
import {navLinks} from "../utils/navLinks";
import {FaGithub, FaLinkedin} from "react-icons/fa";

function Header() {
    return (
        <>
            <header>
                <span>
                    <div>
                        <p id={"myName"}>Justin P. Dickerson</p>
                        <p>Computer Scientist & Software Engineer</p>
                        <a href={"https://www.linkedin.com/in/justinpdickerson/"}
                              target={"_blank"}><FaLinkedin id={"linkedin"}></FaLinkedin></a>
                        <span> </span>

                        <a href={"https://github.com/dj911ice"}
                              target={"_blank"}> <FaGithub id={"github"}></FaGithub></a>
                    </div>
                    <nav>
                        {navLinks.map((link, navigation) => {
                            return (
                                <ul key={navigation}>
                                    <li>
                                        <a href={link.path}>
                                            <div >{link.name}</div>
                                        </a>
                                    </li>
                                </ul>
                            );
                        })}
                    </nav>
                </span>
            </header>
        </>
    );
}

export default Header