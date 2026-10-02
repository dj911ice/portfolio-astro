import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Experience(){
    return (
        <>
            <head>
                <title>JPD: Experience</title>
                <meta name="description" content="Migrated to Astro!"/>
                <meta name="viewport" content="width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <Header/>
            <main>
                <section>
                    <h2>Professional Experience</h2>
                    <p>Software Engineering</p>
                    <ul>
                        {/*<li>Software Engineer at Actually Independent LLC</li>*/}
                        <li>Former Ruby Developer at Prota Ventures</li>
                        <li>Former Android Engineer as an Independent Consultant</li>
                        <li>Former Android Developer at a Fortune 500 Company</li>
                    </ul>
                    <p>Former Teaching Assistant (Oregon State University)</p>
                    <ul>
                        <li>CS 261: Data Structures</li>
                        <li>CS 340: Introduction to Databases</li>
                        <li>CS 362: Software Engineering 2 (Software Testing & Verification)</li>
                    </ul>
                    <p>Volunteer</p>
                    <ul>
                        <li>Former Webmaster at Ballroom Club at the University of Michigan</li>
                    </ul>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Experience
