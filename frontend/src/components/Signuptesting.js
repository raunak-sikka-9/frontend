import { Button, TextField } from "@mui/material"
import { Formik } from "formik"
import React from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import * as Yup from "yup"

const Signuptesting = () => {
    // 1. Submit function
    // 2. Formik implement in JSX
    // 3. Initial values

    const navigate = useNavigate()
    const userSubmit = async (formdata) => {
        console.log(formdata)

        const response = await fetch("http://localhost:4000/user/add", {
            method: "POST",
            body: JSON.stringify(formdata), //converting JavaScript object to JSON
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.status === 200) {
            console.log("success")
            Swal.fire({
                icon: "success",
                title: "Well Done 👍🏻",
                text: "You have done a wonderful job!!",
            })
            navigate("/loginpagetesting")
        } else {
            console.log("error occured")
        }
    }
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        mobile: Yup.number().required('Enter a minimum of 10 digits'),
    })

    return (
        <section draggable="false" className="overflow-hidden pt-0" data-v-271253ee="">
            <section className="mb-10">
                {/* Jumbotron */}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    {" "}
                                    <span>Sign-up&nbsp;</span> <br /> <span className="text-primary">Create an account with us</span>{" "}
                                </h1>
                                <p style={{ color: "hsl(217, 10%, 50.8%)" }} />
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <Formik
                                            initialValues={{
                                                name: "",
                                                mobile: "",
                                                password: "",
                                                age: "",
                                                email: "",
                                            }}
                                            onSubmit={userSubmit} validationSchema={SignupSchema}>
                                            {({ values, handleChange, handleSubmit, errors }) => (
                                                <form onSubmit={handleSubmit}>
                                                   
                                                    <div className="row">
                                                        <div className="col-md-12 mb-5">
                                                            <TextField value={values.name}
                                                                onChange={handleChange}
                                                                id="name"
                                                                fullWidth
                                                                label="Full Name"
                                                                helperText={errors.name}
                                                                error={errors.name ? true : false}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4">
                                                            <TextField value={values.email}
                                                                onChange={handleChange}
                                                                id="email"
                                                                fullWidth
                                                                label="Email"
                                                                helperText={errors.email}
                                                                error={errors.email ? true : false}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12 mt-4">
                                                            <TextField value={values.mobile}
                                                                onChange={handleChange}
                                                                id="mobile"
                                                                fullWidth
                                                                label="Mobile number"
                                                                helperText={errors.mobile}
                                                                error={errors.mobile ? true : false}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12 mt-4">
                                                            <TextField value={values.age}
                                                                onChange={handleChange}
                                                                id="age"
                                                                sx={{ mt: 3 }}
                                                                fullWidth
                                                                label="Age"
                                                                helperText={errors.age}
                                                                error={errors.age ? true : false}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12 mt-4 mb-4">
                                                            <TextField value={values.password}
                                                                onChange={handleChange}
                                                                id="password"
                                                                sx={{ mt: 3 }}
                                                                fullWidth
                                                                label="Password"
                                                                type="password"
                                                                helperText={errors.password}
                                                                error={errors.password ? true : false}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Checkbox */}
                                                    {/* <div className="form-check d-flex justify-content-center mb-4">
                                            {" "}
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                defaultValue=""
                                                id="form2Example33"
                                                defaultChecked=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="form2Example33"
                                            >
                                                Subscribe to our newsletter
                                            </label>
                                        </div>{" "} */}
                                                    {/* Submit button */}{" "}
                                                    <button type="submit" className="btn btn-primary btn-block mb-4" aria-controls="#picker-editor" style={{}}>
                                                        Sign up
                                                    </button>{" "}
                                                    {/* Register buttons */}
                                                    {/* <div className="text-center">
                                            <p>or sign up with:</p>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                {" "}
                                                <i
                                                    className="fab fa-facebook-f"
                                                    aria-controls="#picker-editor"
                                                />{" "}
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                {" "}
                                                <i
                                                    className="fab fa-google"
                                                    aria-controls="#picker-editor"
                                                />{" "}
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                {" "}
                                                <i
                                                    className="fab fa-twitter"
                                                    aria-controls="#picker-editor"
                                                />{" "}
                                            </button>{" "}
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                {" "}
                                                <i
                                                    className="fab fa-github"
                                                    aria-controls="#picker-editor"
                                                />{" "}
                                            </button>
                                        </div> */}
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* Jumbotron */}
            </section>
        </section >
    )
}

export default Signuptesting
