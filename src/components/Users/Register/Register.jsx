import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import UsersContext from '../../../context/UsersContext';
import { registerUser } from './../../../db/fb';

const Register = () => {

  const [initialValues] = useState({ email: '', password: '', confirmPassword: '' });
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const { setUser } = useContext(UsersContext);
  const navigate = useNavigate();

  const register = useCallback(
    () => {
      registerUser(formValues.email, formValues.password)
        .then((userCredential) => {
          setUser({ email: userCredential.user.email });
          navigate('/');
        }).catch(err => {
          setFormErrors({ email: 'This email already exists.' });
          setIsSubmit(false);
        });
    }, [navigate, setUser, formValues])

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      register();
    } else {
      setIsSubmit(false);
    }
  }, [formErrors, formValues, isSubmit, register]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

    if (!regex.test(values.email)) {
      errors.email = 'Enter valid email address.';
    }

    if (!values.password) {
      errors.password = 'The password is required.';
    } else if (values.password.length < 6) {
      errors.password = "The password must be more than 6 characters.";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "The password's don't match.";
    }

    return errors;
  }

  return (
    <div className='forms-container'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Email
          <input
            type="text"
            name="email"
            defaultValue={initialValues.email}
            onChange={(event) => handleChange(event)}
            placeholder='Enter your email address...' />
            {formErrors.email ? <div className="error">{formErrors.email}</div>: ''}
        </label>
        <label>Password
          <input
            type="password"
            name="password"
            onChange={(event) => handleChange(event)}
            defaultValue={initialValues.password}
            placeholder='Enter your password...' />
            {formErrors.password ? <div className="error">{formErrors.password}</div>: ''}
        </label>
        <label>Confirm Password
          <input
            type="password"
            name="confirmPassword"
            onChange={(event) => handleChange(event)}
            defaultValue={initialValues.confirmPassword}
            placeholder='Confirm your password...' />
            {formErrors.confirmPassword ? <div className="error">{formErrors.confirmPassword}</div>: ''}
        </label>
        <button disabled={isSubmit} type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;