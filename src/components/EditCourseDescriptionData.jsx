import React from "react";
import {navigate} from "astro:transitions/client";

function EditCourseDescriptionData({course, onEdit}) {
    const viewCourses = () => {
        navigate('/courses/');
    }

    const courseAdmin = () => {
        navigate('/course/');
    }

    return (
        <dt className={"courseDT"}>
            <dd> {course.courseIdentifier}<span>: </span>{course.courseName}</dd>
            <br/>
            <dd>{course.courseDescription}</dd>
            <br/>
            <dd><span>Course Issuer: </span>{course.courseIssuer}</dd>
            <dd><span>Status: </span>{course.courseCompleted === true ? "Completed": "In Progress"}</dd>
            <br/>
            <button id={"editButton"} onClick={() => onEdit(course)} disabled={true}>Modify</button>
            <button id={"viewCourses"} onClick={viewCourses} >View Courses</button>
            <button className={"admin"} onClick={courseAdmin}>Courses Admin</button>
        </dt>
    )
}

export default EditCourseDescriptionData