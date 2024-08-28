// import { Link } from "react-router-dom";

// function Header() {
//     return (
//         <>
//             <div className="bg-danger d-flex justify-content-around align-items-center" style={{ height: "50px" }}>
//                 <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//                     <small style={{ cursor: "pointer" }}>Home</small>
//                 </Link>
//                 <Link to="/addbook" style={{ color: "white", textDecoration: "none" }}>
//                     <small style={{ cursor: "pointer" }}>Add Book</small>
//                 </Link>
//                 <Link to="/payment" style={{ color: "white", textDecoration: "none" }}>
//                     <small style={{ cursor: "pointer" }}>Payment</small>
//                 </Link>
//                 <Link to="/ragister" style={{ color: "white", textDecoration: "none" }}>
//                     <small style={{ cursor: "pointer" }}>Ragister</small>
//                 </Link>
//                 <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
//                     <small style={{ cursor: "pointer" }}>LogIn</small>
//                 </Link>
//             </div>
//         </>
//     );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">Book Store</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">Contact</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">Signup</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">LogIn</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };






const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Book Store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/booklist">Booklist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/updatebook/:id">Update Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/order">Order</Link>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/ragister">Ragister</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">LogIn</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header





// export default Header;

// import React from 'react';
// import './Header.css'; // Ensure this file exists and is correctly styled

// function Header({ isAuthenticated, onLogout }) {
//     return (
//         <header className="header">
//             <div className="container">

//                 <nav className="nav">
//                     {isAuthenticated ? (
//                         <>
//                             <Link to="/" className="nav-link">Book Store</Link>
//                             <Link to="/" className="nav-link">Exercises</Link>
//                             <Link to="/user-exercises" className="nav-link">User Exercises</Link>
//                             <Link to="/profile" className="nav-link">Profile</Link>
//                             <Link to="/diet" className="nav-link">Diet</Link>
//                             <Link to="/bmi-calculator" className="nav-link">BMI Calculator</Link>
//                             <button className="btn btn-danger" onClick={onLogout}>Logout</button>
//                         </>
//                     ) : (
//                         <>
//                             <Link to="/" className="nav-link">Home</Link>
//                             <Link to="/about" className="nav-link">About Us</Link>
//                             <Link to="/services" className="nav-link">Services</Link>
//                             <Link to="/login" className="nav-link">Login</Link>
//                             <Link to="/signup" className="nav-link">Signup</Link>
//                         </>
//                     )}
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;
