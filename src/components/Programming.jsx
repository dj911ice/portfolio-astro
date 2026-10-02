import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function programming() {
    return (
        <>
            <head>
                <title>JPD: Programming</title>
                <meta name="description" content="Migrated to Astro!"/>
                <meta name="viewport" content="width=device-width"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <Header/>
            <main>
                <section>
                    <h2>Programming Exposure</h2>
                    <p style={{textAlign: "center"}}>
                        Background featuring the programming languages, frameworks, etc.
                    </p>
                    <dl className={"courseDL"} >
                        <dt>Languages</dt>
                        <dd>
                            <a href={"https://www.c-language.org/"} target={"_blank"}>C</a>,&nbsp;
                            <a href={"https://legacy.cplusplus.com/"} target={"_blank"}>C++</a>,&nbsp;
                            <a href={"https://dotnet.microsoft.com/en-us/languages/csharp"} target={"_blank"}>C#</a>,&nbsp;
                            <a href={"https://crystal-lang.org/"} target={"_blank"}>Crystal</a>,&nbsp;
                            <a href={"https://www.w3.org/Style/CSS/Overview.en.html"} target={"_blank"}>CSS</a>,&nbsp;
                            <a href={"https://go.dev/"} target={"_blank"}>Go</a>,&nbsp;
                            <a href={"https://html.spec.whatwg.org/"} target={"_blank"}>HTML</a>,&nbsp;
                            <br/>
                            <a href={"https://www.java.com/en/"} target={"_blank"}>Java</a>,&nbsp;
                            <a href={"#"} target={"_self"}>JavaScript</a>,&nbsp;
                            <a href={"https://kotlinlang.org/"} target={"_blank"}>Kotlin</a>,&nbsp;
                            <a href={"https://www.python.org/"} target={"_blank"}>Python</a>,&nbsp;
                            <a href={"https://www.ruby-lang.org/en/"} target={"_blank"}>Ruby</a>,&nbsp;
                            <a href={"#"} target={"_self"}>SQL</a>
                        </dd>
                        <br/>
                        <dt>Frameworks & Runtimes</dt>
                        <dd>
                            <a href={"https://dotnet.microsoft.com/en-us/"} target={"_blank"}>.Net</a>,&nbsp;
                            <a href={"https://astro.build/"} target={"_blank"}>Astro.js</a>,&nbsp;
                            <a href={"https://react.dev/"} target={"_blank"}>React.js</a>,&nbsp;
                            <a href={"https://rubyonrails.org/"} target={"_blank"}>Ruby on Rails</a>,&nbsp;
                            <a href={"https://nextjs.org/"} target={"_blank"}>Next.js</a>,&nbsp;
                            <a href={"https://nodejs.org/en"} target={"_blank"}>Node.js</a>
                        </dd>
                        <br/>
                        <dt>Databases</dt>
                        <dd>
                            <a href={"https://mariadb.org/"} target={"_blank"}>MariaDB</a>,&nbsp;
                            <a href={"https://www.mongodb.com/"} target={"_blank"}>MongoDB</a>,&nbsp;
                            <a href={"https://www.mysql.com/"} target={"_blank"}>MySQL</a>,&nbsp;
                            <a href={"https://www.postgresql.org/"} target={"_blank"}>PostgreSQL</a>,&nbsp;
                            <a href={"https://sqlite.org/index.html"} target={"_blank"}>SQLite</a>
                        </dd>
                        <br/>
                        <dt>Environment & Cloud</dt>
                        <dd>
                            <a href={"https://developer.android.com/"} target={"_blank"}>Android</a>,&nbsp;
                            <a href={"https://aws.amazon.com/"} target={"_blank"}>AWS</a>,&nbsp;
                            <a href={"https://www.cloudflare.com/"} target={"_blank"}>Cloudflare</a>,&nbsp;
                            <a href={"https://www.apple.com/os/macos/"} target={"_blank"}>macOS</a>,&nbsp;
                            <a href={"https://system76.com/pop"} target={"_blank"}>Pop!_OS</a>,&nbsp;
                            <br/>
                            <a href={"https://render.com/"} target={"_blank"}>Render</a>,&nbsp;
                            <a href={"https://ubuntu.com/"} target={"_blank"}>Ubuntu</a>,&nbsp;
                            <a href={"https://vercel.com/"} target={"_blank"}>Vercel</a>,&nbsp;
                            <a href={"https://www.microsoft.com/en-us/windows"} target={"_blank"}>Windows</a>
                        </dd>
                        <br/>
                        <dt>Tooling & Version Control</dt>
                        <dd>
                            <a href={"https://bitbucket.org/"} target={"_blank"}>BitBucket</a>,&nbsp;
                            <a href={"https://git-scm.com/"} target={"_blank"}>Git</a>,&nbsp;
                            <a href={"https://github.com/"} target={"_blank"}>GitHub</a>,&nbsp;
                            <a href={"https://www.jetbrains.com/"} target={"_blank"}>Jetbrains</a>,&nbsp;
                            <a href={"https://www.atlassian.com/software/jira"} target={"_blank"}>Jira</a>,&nbsp;
                            <a href={"https://www.sublimetext.com/"} target={"_blank"}>Sublime Text</a>,&nbsp;
                            <a href={"https://visualstudio.microsoft.com/"} target={"_blank"}>Visual Studio</a>

                        </dd>
                    </dl>
                </section>
            </main>
            <Footer/>
        </>
    )
}