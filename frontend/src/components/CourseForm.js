// src/CourseForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = ({ onCourseAdded }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('image', image);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/courses/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onCourseAdded(response.data);
            // Reset form
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setImage(null);
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3 s ">
            <h2>Add New Course</h2>
            <div className="mb-3 ">
                <label >Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Description</label>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Price</label>
                <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Category</label>
                <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label>Image</label>
                <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} required />
            </div>
            <button type="submit" className="btn btn-primary">Add Course</button>
        </form>
    );
};

export default CourseForm;