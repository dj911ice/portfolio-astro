import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CredentialsTable from "../components/CredentialsTable";
import {navigate} from "astro:transitions/client";

function Credentials({credentials}) {
    const credentialAdmin = () => {
        navigate('/credential/');
    }

    return (
        <>
            <head>
                <title>JPD: Credentials</title>
                <meta name="description" content="Migrated to Astro!"/>
                <meta name="viewport" content="width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <Header/>
            <main>
                <section>
                    <button hidden={true} className={"admin"} onClick={credentialAdmin}>Credentials Admin</button>
                    <h2>Credentials, Courses, and Trainings</h2>
                    <p style={{textAlign: "center"}}>
                        Table of highlighted & relevant credentials, courses, and trainings.
                    </p>
                    <CredentialsTable
                        credentials={credentials.sort((a, b) => a.credentialType > b.credentialType ? -1 : 1)}
                    />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Credentials