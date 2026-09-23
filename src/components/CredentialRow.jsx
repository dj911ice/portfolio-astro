import React from "react";

function CredentialRow({credential}) {
    if (credential.credentialVisibility === false) {
        return null;
    } else {
        return (
            <tr>
                <td>{credential.credentialType}</td>
                <td>{credential.credentialLevel}</td>
                <td>
                    {credential.credentialLink === null ?
                        credential.credentialField :
                        <a href={credential.credentialLink} target={"_blank"}>{credential.credentialField}</a>}
                </td>
                <td>
                    {credential.institutionalLink === null ?
                        credential.credentialCertifier :
                        <a href={credential.institutionalLink} target={"_blank"}>{credential.credentialCertifier}</a>}
                </td>
                <td>{credential.credentialCompleted === true ? "Completed" : "In Progress"}</td>
                {/*<td>{credential.conferralDate}</td>*/}
            </tr>
        )
    }

}

export default CredentialRow