// // import axios from "axios";
// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Login = () => {
// //     const [data, setData] = useState({
// //         email: "",
// //         password: ""
// //     });

// //     const navigate = useNavigate();

// //     const handleLoginChange = (e) => {
// //         setData({
// //             ...data,
// //             [e.target.name]: e.target.value
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.post('http://localhost:3000/user/login', data);
// //             console.log(response);
// //             alert('Login successful');
// //             navigate('/addBook'); // Redirect to the AddBook component after successful login

// //         } catch (error) {
// //             console.error(error);
// //             alert('Login failed. Please check your email and password.');
// //         }
// //     };

// //     return (
// //         <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
// //             <div className="card p-4" style={{ width: '400px' }}>
// //                 <h4 className="text-center">Log-In</h4>
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="mb-3">
// //                         <label htmlFor="email" className="form-label">Email address</label>
// //                         <input
// //                             type="email"
// //                             className="form-control"
// //                             id="email"
// //                             name="email"
// //                             placeholder="Enter your email"
// //                             onChange={handleLoginChange}
// //                             value={data.email}
// //                         />
// //                     </div>
// //                     <div className="mb-3">
// //                         <label htmlFor="password" className="form-label">Password</label>
// //                         <input
// //                             type="password"
// //                             className="form-control"
// //                             id="password"
// //                             name="password"
// //                             placeholder="Enter your password"
// //                             onChange={handleLoginChange}
// //                             value={data.password}
// //                         />
// //                     </div>
// //                     <button type="submit" className="btn btn-primary w-100">Log-In</button>
// //                     <small>Forgot password</small>
// //                     <p className="mt-3">By logging in, you agree to our terms and conditions.</p>
// //                     <Link to='/addBook' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', data);
            console.log(response);
            alert('Login successful');
            navigate('/addBook'); // Redirect to the AddBook component after successful login
        } catch (error) {
            console.error(error);
            alert('Login failed. Please check your email and password.');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4" style={{ width: '400px' }}>
                <h4 className="text-center">Log-In</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleLoginChange}
                            value={data.email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleLoginChange}
                            value={data.password}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Log-In</button>
                    <div className="mt-3 text-center">
                        <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
                    </div>
                    <p className="mt-3 text-center">By logging in, you agree to our terms and conditions.</p>
                    <Link to='/ragister' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;


