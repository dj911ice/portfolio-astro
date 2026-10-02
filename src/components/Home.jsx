import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    const [resumeValue, setResumeValue] = React.useState(0);

    function resumeDownload (resumeValue) {
        if (resumeValue === 0) {

        } else if (resumeValue === 1) {
            return (
                <>
                    <a href={"/resume/JPD1PageResume_090426.pdf"} target={"_blank"}>
                        <button id={"pdf"}>Resume PDF</button>
                    </a> &nbsp;
                    <a href={"/resume/JPD1PageResume_090426.docx"}>
                        <button id={"docx"}>Resume DOCX</button>
                    </a>
                </>

            )

        } else if (resumeValue === 2) {
            return (
                <>
                    <a href={"/resume/JPD1PageResumeDSE_090426.pdf"} target={"_blank"}>
                        <button id={"pdf"}>Resume PDF</button>
                    </a> &nbsp;
                    <a href={"/resume/JPD1PageResumeDSE_090426.docx"}>
                        <button id={"docx"}>Resume DOCX</button>
                    </a>
                </>

            )
        }
    }

    return (
        <>
            <head>
                <title>JPD: CS & SWE</title>
                <meta name="description" content="Migrated to Astro!"/>
                <meta name="viewport" content="width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <Header/>
            <main>
                <section>
                    <h2>Professional Site</h2>
                    <h3>Introduction</h3>
                    <p>
                        Welcome! I am Justin, a computer scientist and software engineer specializing in custom
                        software solutions for individuals and businesses. Looking to collaborate? View my resume/cv via the
                        dropdown below and send me an email detailing your project requirements. To learn more about
                        my background, checkout the Credentials and Experience section within the navigation. You can also
                        connect with me or view my source code via the icons in the header. <br/><br/>Have a great day!
                    </p>

                    <h2>Resume/CV</h2>
                    <section style={{"textAlign": "center" }}>
                        <form>
                            <select className={"center-middle"}
                                    name={"resumeValue"}
                                    id="resumeValue"
                                    value={resumeValue}
                                    onChange={e => {
                                        setResumeValue(parseInt(e.target.value))
                                    }}>
                                <option disabled={false} value={0}>Select to Download</option>
                                <option value={1}>Software Engineering</option>
                                <option value={2}>Data Science</option>
                            </select>
                        </form>
                        {resumeDownload(resumeValue)}
                    </section>
                </section>
            </main>
            <Footer/>
        </>
    )
}
