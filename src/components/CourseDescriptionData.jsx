import React from "react";

function CourseDescriptionData({course}) {
    if (course.courseVisibility === false) {
        return null;
    } else {
        return (
            <dt className={"courseDT"}>
                <dd> {course.courseIdentifier}<span>: </span>{course.courseName}</dd>
                <br/>
                <dd>{course.courseDescription}</dd>
                <br/>
                <dd>
                    <span>Course Issuer: </span>
                    {course.institutionalLink === null ?
                        course.courseIssuer :
                        <a href={course.institutionalLink} target={"_blank"}>{course.courseIssuer}</a>}
                </dd>
                <dd><span>Status: </span>{course.courseCompleted === true ? "Completed" : "In Progress"}</dd>
                <br/>
            </dt>

        )
    }
}

export default CourseDescriptionData