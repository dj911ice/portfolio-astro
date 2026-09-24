import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {mernLinks} from "../utils/mernLinks";
import {devLinks} from "../utils/devLinks";
import {depLinks} from "../utils/depLinks";

function About() {
    return (
        <>
            <Header/>
            <main>
                <section>
                    <h2>About</h2>
                    <h3>Front End</h3>
                    {mernLinks.map((link, mern) => {
                        return (
                            <ul key={mern}>
                                <li style={{listStyleType: "none"}}>
                                    <p>
                                        <a href={link.path} target={"_blank"}>
                                            {link.name}
                                        </a>: {link.description}
                                    </p>
                                </li>
                            </ul>
                        )
                    })}
                    <h3>Development</h3>
                    {devLinks.map((link, dev) => {
                        return (
                            <ul key={dev}>
                                <li style={{listStyleType: "none"}}>
                                    <p>
                                        <a href={link.path} target={"_blank"}>
                                            {link.name}
                                        </a>: {link.description}
                                    </p>
                                </li>
                            </ul>
                        )
                    })}
                    <h3>Deployment</h3>
                    {depLinks.map((link, dep) => {
                        return (
                            <ul key={dep}>
                                <li style={{listStyleType: "none"}}>
                                    <p>
                                        <a href={link.path} target={"_blank"}>
                                            {link.name}
                                        </a>: {link.description}
                                    </p>
                                </li>
                            </ul>
                        )
                    })}
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default About