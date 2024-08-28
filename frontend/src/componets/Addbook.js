import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState } from "react";


// const AddBook = () => {
//     const [bookList, setBookList] = useState([]);
//     let titleInput = useRef();
//     let authorInput = useRef();
//     let publication_yearInput = useRef();
//     let priceInput = useRef();
//     let descriptionInput = useRef();
//     let imageInput = useRef();

//     const addBook = () => {
//         let title = titleInput.current.value;
//         let author = authorInput.current.value;
//         let publication_year = publication_yearInput.current.value;
//         let price = priceInput.current.value;
//         let description = descriptionInput.current.value;
//         let image = imageInput.current.value;

//         let book = { title, author, publication_year, price, description, image }
//         setBookList([...bookList, book]);
//     }
//     useEffect(() => {
//         loadBooklist();
//     }, []);
//     const loadBooklist = async () => {
//         try {
//             let response = await axios.post("http://localhost:3000/books/addBook");
//             console.log(response.data);
//             setBookList(response.data);
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }


//     return (
//         <>
//             <div className="container p-5">
//                 <div className="row">
//                     <div className="col">
//                         <label htmlFor="username" className="form-label">Title</label>
//                         <input ref={titleInput} type="text" className="form-control" id="title" name="title" placeholder="Enter Book Title" />
//                     </div>
//                     <div className="col">
//                         <label htmlFor="author" className="form-label">Author</label>
//                         <input ref={authorInput} type="text" className="form-control" id="author" name="author" placeholder="Enter Book Author Name" />
//                     </div>
//                     <div className="col">
//                         <label htmlFor="publication_year" className="form-label">publication_year</label>
//                         <input ref={publication_yearInput} type="text" className="form-control" id="publication_year" name="publication_year" placeholder="Enter publication_year" />
//                     </div>
//                     <div className="col">
//                         <label htmlFor="price" className="form-label">Price</label>
//                         <input ref={priceInput} type="text" className="form-control" id="price" name="price" placeholder="Enter Book Price" />
//                     </div>
//                     <div className="w-100">
//                         <label htmlFor="description" className="form-label">Description</label>
//                         <textarea ref={descriptionInput} type="text" className="form-control" id="description" name="description" placeholder="Enter Book Description" />
//                     </div>
//                     <div className="w-100">
//                         <label htmlFor="image" className="form-label">File</label>
//                         <input ref={imageInput} type="file" accept="image/*" className="form-control" multiple="false" />
//                     </div>
//                     <div className="w-100">

//                         <button onClick={add}>AddBook</button>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

const AddBook = () => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        publication_year: '',
        price: '',
        description: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...bookData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setBookData({
            ...bookData,
            image: e.target.files[0],
        });
    };

    const addBook = async () => {
        const formData = new FormData();
        formData.append('title', bookData.title);
        formData.append('author', bookData.author);
        formData.append('publication_year', bookData.publication_year);
        formData.append('price', bookData.price);
        formData.append('description', bookData.description);
        formData.append('image', bookData.image);

        console.log(bookData.image);


        try {
            const response = await axios.post('http://localhost:3000/api/book', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Book added:', response.data);
            alert("Book Added successfully")
            // Clear the form after successful submission
            setBookData({
                title: '',
                author: '',
                publication_year: '',
                price: '',
                description: '',
                image: null,
            });

        } catch (err) {
            console.log('Error adding book:', err.message);
            alert("Book not added")
        }
    };

    return (
        <div className="container p-5" style={{ color: 'black' }}>
            <div className="row">
                <div className="col">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={bookData.title}
                        onChange={handleChange}
                        placeholder="Enter Book Title"
                    />
                </div>
                <div className="col">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={bookData.author}
                        onChange={handleChange}
                        placeholder="Enter Book Author Name"
                    />
                </div>
                <div className="col">
                    <label htmlFor="publication_year" className="form-label">Publication Year</label>
                    <input
                        type="text"
                        className="form-control"
                        id="publication_year"
                        name="publication_year"
                        value={bookData.publication_year}
                        onChange={handleChange}
                        placeholder="Enter Publication Year"
                    />
                </div>
                <div className="col">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={bookData.price}
                        onChange={handleChange}
                        placeholder="Enter Book Price"
                    />
                </div>
                <div className="w-100">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={bookData.description}
                        onChange={handleChange}
                        placeholder="Enter Book Description"
                    />
                </div>
                <div className="w-100">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="w-100 mt-3">
                    <button className="btn btn-primary" onClick={addBook}>Add Book</button>
                </div>
            </div>
        </div>
    );
};

export default AddBook;



