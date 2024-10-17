// src/CourseList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseForm from './CourseForm';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await axios.get(`http://127.0.0.1:8000/api/courses/?search=${filter}`);
            setCourses(response.data);
        };

        fetchCourses();
    }, [filter]);

    const handleCourseAdded = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    return (
        <div>
            <h1>Online Courses</h1>
            <input
                type="text"
                placeholder="Filter by category"
                className="form-control mb-3"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <CourseForm onCourseAdded={handleCourseAdded} />
            <ul className="list-group">
                {courses.map(course => (
                    <li key={course.id} className="list-group-item">
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                        <p>Price: ${course.price}</p>
                        {course.image && <img src={course.image} alt={course.name} width="100" />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;