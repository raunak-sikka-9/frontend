import { TextField } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Loginpagetesting = () => {
    const navigate = useNavigate();

    const userSubmit = async (formdata) => {
        console.log(formdata);

        // 1. url
        // 2. request method
        // 3. data 
        // 4. Data format

        const res = await fetch('http://localhost:4000/user/authenticate', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You are now logged in'
            });
            const data = await res.json();
            sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/dashboard");
        } else if (res.status === 400) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid username or password'
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Something went wrong'
            })
        }
    }
    return (
        <section className="vh-100" style={{ backgroundColor: "rgb(245, 245, 245)" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <Formik initialValues={{ email: '', password: '' }} onSubmit={userSubmit}>
                                            {({ values, handleChange, handleSubmit }) => (
                                                <form onSubmit={handleSubmit}>
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i
                                                            className="fas fa-lock fa-2x me-3"
                                                            style={{ color: "#ff6219" }}
                                                        />
                                                        <span className="h1 fw-bold mb-0">Login Page</span>
                                                    </div>
                                                    <h5
                                                        className="fw-normal mb-3 pb-3"
                                                        style={{ letterSpacing: 1 }}
                                                    >
                                                        Login to your account
                                                    </h5>
                                
                                                    <TextField variant='standard' fullWidth value={values.email} onChange={handleChange} id="email" label="Username" />
                                                    <TextField variant='standard' fullWidth value={values.password} onChange={handleChange} id="password" label="Password" type="password" />
                                                    
                                                    <div className="pt-1 mb-4">
                                                        <button
                                                            className="btn btn-dark btn-lg btn-block"
                                                            type="submit"
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                        Don't have an account?{" "}
                                                        <Link to="/signuptesting" style={{ color: "blue" }}>
                                                            Register here
                                                        </Link>
                                                    </p>
                                                    {/* <a href="#!" className="small text-muted">
                                                Terms of use
                                            </a>
                                            <a href="#!" className="small text-muted">
                                                Privacy policy
                                            </a> */}
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loginpagetesting
