import React from 'react';


const Home = () => {
    return (
        <div className="home-container">
            <div className="jumbotron text-center p-5 bg-light">
                <h1 className="display-4" style={{ color: "black" }}>Welcome to Our Book Store</h1>
                <p className="lead" style={{ color: "black" }}>Discover your next favorite book</p>
                <hr className="my-4" />
                <p style={{ color: "black" }}>Explore our wide collection of books across various genres.</p>
            </div>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <img
                            src="../Image\bookStore.jpg"
                            alt="Book Display"
                            className="img-fluid rounded shadow"
                        />
                        <h2 className="mt-4" style={{ color: "black" }}>Featured Book of the Month</h2>
                        <p className="lead" style={{ color: "black" }}>Dive into the thrilling world of our featured book. Don't miss out!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
