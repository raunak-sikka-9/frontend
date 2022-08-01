import { Button, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';


const Signuptesting = () => {
    // 1. Submit function 
    // 2. Formik implement in JSX
    // 3. Initial values

    const navigate = useNavigate();
    const userSubmit = async (formdata) => {
        console.log(formdata);

        const response = await fetch('http://localhost:4000/user/add', {
            method: 'POST',
            body: JSON.stringify(formdata), //converting JavaScript object to JSON
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 200) {
            console.log('success');
            Swal.fire({
                icon: "success",
                title: "Well Done 👍🏻",
                text: "You have done a wonderful job!!"
            })
            navigate('/login');
        }
        else {
            console.log('error occured');
        }
    }
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    return (
        <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div>
          <div
            data-draggable="true"
            className=""
            style={{ position: "relative" }}
            draggable="false"
          >
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="overflow-hidden pt-0"
              data-v-271253ee=""
            >
              <section className="mb-10">
                {/* Jumbotron */}
                <div
                  className="px-4 py-5 px-md-5 text-center text-lg-start"
                  style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
                >
                  <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                      <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-3 fw-bold ls-tight">
                          {" "}
                          <span>Sign-up&nbsp;</span> <br />{" "}
                          <span className="text-primary">
                            Create an account with us
                          </span>{" "}
                        </h1>
                        <p style={{ color: "hsl(217, 10%, 50.8%)" }} />
                      </div>
                      <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card">
                          <div className="card-body py-5 px-md-5">
                            <Formik>
                              {/* 2 column grid layout with text inputs for the first and last names */}
                              <div className="row">
                                <div className="col-md-6 mb-4">
                                  <div className="form-outline">
                                    {" "}
                                    <input
                                      type="text"
                                      id="form3Example1"
                                      className="form-control active"
                                    />
                                    <label
                                      className="form-label"
                                      htmlFor="form3Example1"
                                      style={{ marginLeft: 0 }}
                                    >
                                      Full name
                                    </label>
                                    <div className="form-notch">
                                      <div
                                        className="form-notch-leading"
                                        style={{ width: 9 }}
                                      />
                                      <div
                                        className="form-notch-middle"
                                        style={{ width: "63.2px" }}
                                      />
                                      <div className="form-notch-trailing" />
                                    </div>
                                  </div>
                                </div>

                                <div className="form-outline mb-4">
                                {" "}
                                <input
                                  type="email"
                                  id="form3Example3"
                                  className="form-control active"
                                  autocompleted=""
                                />
                                {" "}
                                <label
                                  className="form-label"
                                  htmlFor="form3Example3"
                                  style={{ marginLeft: 0 }}
                                >
                                 Email address
                                </label>
                                <div className="form-notch">
                                  <div
                                    className="form-notch-leading"
                                    style={{ width: 9 }}
                                  />
                                  <div
                                    className="form-notch-middle"
                                    style={{ width: "93.6px" }}
                                  />
                                  <div className="form-notch-trailing" />
                                </div>
                              </div>{" "}
                              </div>{" "}

                              <div className="form-outline mb-4">
                                {" "}
                                <input
                                  type="Number"
                                  id="form3Example4"
                                  className="form-control active"
                                  autocompleted=""
                                />{" "}
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4"
                                  style={{ marginLeft: 0 }}
                                >
                                  Mobile number
                                </label>
                                <div className="form-notch">
                                  <div
                                    className="form-notch-leading"
                                    style={{ width: 9 }}
                                  />
                                  <div
                                    className="form-notch-middle"
                                    style={{ width: "64.8px" }}
                                  />
                                  <div className="form-notch-trailing" />
                                </div>
                              </div>{" "}

                              <div className="form-outline mb-4">
                                {" "}
                                <input
                                  type="Number"
                                  id="form3Example4"
                                  className="form-control active"
                                  autocompleted=""
                                />{" "}
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4"
                                  style={{ marginLeft: 0 }}
                                >
                                  Age
                                </label>
                                <div className="form-notch">
                                  <div
                                    className="form-notch-leading"
                                    style={{ width: 9 }}
                                  />
                                  <div
                                    className="form-notch-middle"
                                    style={{ width: "34.8px" }}
                                  />
                                  <div className="form-notch-trailing" />
                                </div>
                              </div>{" "}

                              <div className="form-outline mb-4">
                                {" "}
                                <input
                                  type="password"
                                  id="form3Example4"
                                  className="form-control active"
                                  autocompleted=""
                                />{" "}
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4"
                                  style={{ marginLeft: 0 }}
                                >
                                  Password
                                </label>
                                <div className="form-notch">
                                  <div
                                    className="form-notch-leading"
                                    style={{ width: 9 }}
                                  />
                                  <div
                                    className="form-notch-middle"
                                    style={{ width: "64.8px" }}
                                  />
                                  <div className="form-notch-trailing" />
                                </div>
                              </div>{" "}
                              {/* Checkbox */}
                              <div className="form-check d-flex justify-content-center mb-4">
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
                              </div>{" "}
                              {/* Submit button */}{" "}
                              <button
                                type="submit"
                                className="btn btn-primary btn-block mb-4"
                                aria-controls="#picker-editor"
                                style={{}}
                              >
                                Sign up
                              </button>{" "}
                              {/* Register buttons */}
                              <div className="text-center">
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
                              </div>
                              </Formik>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Jumbotron */}
              </section>
            </section>
            {/**/}
          </div>
        </div>
      </div>
    )
}

export default Signuptesting