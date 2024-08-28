import React from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
    const location = useLocation();
    const { book } = location.state || {}; // Access the book data passed via Link

    return (
        <div className="container mt-5">
            {book ? (
                <div>
                    <h2>Order Now: {book.title}</h2>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                    <p><strong>Price:</strong> ${book.price}</p>
                    {/* Include any additional order processing logic here */}
                </div>
            ) : (
                <p>No book selected</p>
            )}
        </div>
    );
};

export default Order;
