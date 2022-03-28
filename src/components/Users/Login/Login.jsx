import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../../context/UsersContext';
import { loginUser } from './../../../db/fb';

const Login = () => {

  const [initialValues] = useState({ email: '', password: '' });
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { setUser } = useContext(UsersContext);
  const navigate = useNavigate();
  const [credentialsError, setCredentialsError] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const login = useCallback(
    () => {
      loginUser(formValues.email, formValues.password)
        .then((userCredential) => {
          setUser({ email: userCredential.user.email });
          navigate('/');
        }).catch(err => {
          setCredentialsError('The email or password is wrong.');
          setIsSubmit(false);
        });
    }, [navigate, formValues, setUser]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      login();
    } else {
      setIsSubmit(false);
    }
  }, [login, isSubmit, formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

    if (!regex.test(values.email)) {
      errors.email = 'Enter valid email address.';
    }

    if (!values.password) {
      errors.password = 'The password is required.';
    }

    return errors;
  }

  return (
    <div className='forms-container'>
      <h1>Login</h1>
            {credentialsError ? <div className="error">{credentialsError}</div>: ''}
      <form onSubmit={handleSubmit}>
        <label>Email
          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder='Enter your email address...' />
            {formErrors.email ? <div className="error">{formErrors.email}</div>: ''}
        </label>
        <label>Password
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder='Enter your password...' />
            {formErrors.password ? <div className="error">{formErrors.password}</div>: ''}
        </label>
        <button disabled={isSubmit}>Register</button>
      </form>
    </div>
  )
}

export default Login;