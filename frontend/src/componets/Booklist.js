

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const BookList = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/books/getBooks');
//                 const booksWithImages = response.data.map(book => {
//                     if (book.image && book.image.data) {
//                         const binary = new Uint8Array(book.image.data).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
//                         book.imageSrc = `data:image/jpeg;base64,${btoa(binary)}`;
//                     }
//                     return book;
//                 });
//                 setBooks(booksWithImages);
//             } catch (error) {
//                 console.error('Error fetching books:', error);
//             }
//         };

//         fetchBooks();
//     }, []);

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 {books.map((book) => (
//                     <div className="col-md-4 mb-4" key={book.id}>
//                         <div className="card h-100">
//                             {/* Display the book image */}
//                             {book.imageSrc && <img src={book.imageSrc} className="card-img-top" alt={book.title} />}
//                             <div className="card-body">
//                                 <h5 className="card-title">{book.title}</h5>
//                                 <p className="card-text">{book.description}</p>
//                                 <p className="card-text"><strong>Author:</strong> {book.author}</p>
//                                 <p className="card-text"><strong>Publication Year:</strong> {book.publication_year}</p>
//                                 <p className="card-text"><strong>Price:</strong> ${book.price}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookList;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/books');

                const booksWithImages = response.data.map(book => {
                    if (book.image && book.image.data) {
                        // Convert the array of bytes back to string
                        const imageUrl = String.fromCharCode(...book.image.data);
                        book.imageSrc = imageUrl;
                        console.log(book.imageSrc);
                    }
                    return book;
                });
                setBooks(booksWithImages);

            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="container mt-5">

            <div className="row">
                {books.map((book) => (
                    <div className="col-md-4 mb-4" key={book.id}>
                        <div className="card h-100">
                            {book.imageSrc && <img src={book.imageSrc} className="card-img-top" alt={book.title} style={{ height: 300, width: 415 }} />}
                            <div className="card-body">
                                <p className="card-Id">ID: {book.id}</p>
                                <h5 className="card-title">Title: {book.title}</h5>
                                <p className="card-text">Description: {book.description}</p>
                                <p className="card-text"><strong>Author:</strong> {book.author}</p>
                                <p className="card-text"><strong>Publication Year:</strong> {book.publication_year}</p>
                                <p className="card-text"><strong>Price:</strong> ${book.price}</p>
                            </div>
                            {/* Order Now Button with book data */}
                            <Link to={{
                                pathname: '/order',
                                state: { book }  // Passing the book data
                            }}>
                                <button className="btn btn-primary">Order Now</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
