// // import axios from 'axios';
// // import { default as React, useState } from "react";
// // import { Link } from "react-router-dom";


// // const Ragister = () => {
// //     const [ragisterData, setRagisterdata] = useState({
// //         username: "",
// //         email: "",
// //         password: ""
// //     });

// //     const handleRegisterChange = (e) => {
// //         setRagisterdata({
// //             ...ragisterData,
// //             [e.target.name]: e.target.value
// //         });


// //     };





// //     const handleRegisterSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             //console.log(ragisterData);

// //             const response = await axios.post('http://localhost:3000/user/ragister', ragisterData);
// //             console.log(response);

// //             alert('Registration successful!');

// //         } catch (err) {

// //             console.log(err);

// //             alert('Registration failed.');
// //         }

// //     };


// //     return (<>
// //         <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
// //             <div className="card p-4" style={{ width: '400px' }}>
// //                 <h4 className="text-center">Signup Page</h4>
// //                 <form onSubmit={handleRegisterSubmit}>
// //                     <div className="mb-3">
// //                         <label htmlFor="username" className="form-label">Username</label>
// //                         <input
// //                             type="text" className="form-control" id="username" name="username" placeholder="Enter your username" onChange={handleRegisterChange} />
// //                     </div>
// //                     <dv className="mb-3">
// //                         <label htmlFor="email" className="form-label">Email address</label>
// //                         <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" onChange={handleRegisterChange} />
// //                     </dv>
// //                     <div className="mb-3">
// //                         <label htmlFor="password" className="form-label">Password</label>
// //                         <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={handleRegisterChange} />
// //                     </div>
// //                     {/* <button type="submit" className="btn btn-primary w-100">Signup</button> */}
// //                     <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Signup</Link>

// //                     <p>
// //                         If user already ragister please click the log-in button
// //                     </p>
// //                     <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Log-In</Link>
// //                 </form>
// //             </div>
// //         </div>
// //     </>)
// // }
// // export default Ragister;

import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate(); // For redirection

    const handleRegisterChange = (e) => {
        setRegisterData({
            ...registerData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/ragister', registerData);
            console.log("Shivam");

            console.log(response);

            alert('Registration successful!');
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err) {
            console.log(err);
            alert('Registration failed.');
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="card p-4" style={{ width: '400px' }}>
                    <h4 className="text-center">Signup Page</h4>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text" className="form-control" id="username" name="username" placeholder="Enter your username" onChange={handleRegisterChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email" className="form-control" id="email" name="email" placeholder="Enter your email" onChange={handleRegisterChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={handleRegisterChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Signup</button>
                    </form>
                    <p className="mt-3 text-center">
                        Already registered? <Link to='/login'>Log in</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Register;


