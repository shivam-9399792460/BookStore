import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBook = () => {
    const { id } = useParams(); // Get the book ID from the URL
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate(); // For navigation after success

    useEffect(() => {
        // Fetch the book details and pre-fill the form
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/book/${id}`);
                const book = response.data;
                console.log(book);


                setTitle(book.title);
                setAuthor(book.author);
                setPublicationYear(book.publication_year);
                setPrice(book.price);
                setDescription(book.description);
            } catch (error) {
                console.error("Error fetching book details:", error.response?.data || error.message);
            }
        };
        fetchBookDetails();
    }, [id]);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]); // Store the selected file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('publication_year', publicationYear);
        formData.append('price', price);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await axios.put(`http://localhost:3000/api/book/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                alert('Book updated successfully!');
                navigate('/books'); // Redirect to the books page or another page as needed
            } else {
                alert('Failed to update the book.');
            }
        } catch (error) {
            console.error('Error updating the book:', error.response?.data || error.message);
            alert('An error occurred while updating the book.');
        }
    };

    return (
        <div className="container p-5" style={{ color: 'black' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Update Book</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-1">
                            <label htmlFor="title" className="form-label">Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="author" className="form-label">Author:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="publicationYear" className="form-label">Publication Year:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="publicationYear"
                                value={publicationYear}
                                onChange={(e) => setPublicationYear(e.target.value)}
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="image" className="form-label">Image:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Update Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBook;
