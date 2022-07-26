import { Button, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

<div><Toaster/></div>
toast("Login successful")

const Signup = () => {
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
        <div>
            <h1>Signup Here</h1>
            <hr />
            <Formik initialValues={{
                name: '',
                mobile: '',
                password: '',
                age: '',
                email: ''
            }} onSubmit={userSubmit} validationSchema={SignupSchema}>
                {({ values, handleChange, handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <TextField value={values.name}
                            onChange={handleChange}
                            id="name"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Full Name"
                            helperText={errors.name}
                            error={errors.name ? true : false}
                        />
                        <TextField value={values.email}
                            onChange={handleChange}
                            id="email"
                            sx={{ mt: 5 }}
                            fullWidth
                            label="Email"
                            helperText={errors.email}
                            error={errors.email ? true : false}
                        />
                        <TextField value={values.mobile}
                            onChange={handleChange}
                            id="mobile"
                            sx={{ mt: 3 }}
                            fullWidth
                            label="Mobile Number"
                            helperText={errors.mobile}
                            error={errors.mobile ? true : false}
                        />
                        <TextField value={values.age}
                            onChange={handleChange}
                            id="age"
                            sx={{ mt: 3 }}
                            fullWidth
                            label="Age"
                            helperText={errors.age}
                            error={errors.age ? true : false}
                        />
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
                        <Button type="submit" sx={{ mt: 5 }}>Submit</Button>
                    </form>
                )}

            </Formik>

        </div>
    )
}


export default Signup