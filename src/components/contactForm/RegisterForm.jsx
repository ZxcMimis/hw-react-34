import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/thunk/authThunk';
import './contactForm.scss';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = { name: '', email: '', password: '' };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Имя обязательно';
    if (!values.email) errors.email = 'Почта обязательна';
    if (!values.password) errors.password = 'Пароль обязателен';
    else if (values.password.length < 7) errors.password = 'Пароль от 7 символов';
    return errors;
  };

const handleSubmit = (values, { resetForm }) => {
  dispatch(register(values))
    .unwrap()
    .then(() => {
      resetForm();
      navigate('/contacts');
    })
    .catch((error) => {
      alert('Ошибка! Попробуй другую почту.');
    });
};

  return (
    <div className="auth-wrapper">
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="auth-form dark-panel neon-border">
            <h2 className="form-title text-purple">Регистрация</h2>
            
            <label className="form-label">
              Имя пользователя
              <Field type="text" name="name" className="form-input neon-focus" />
              <ErrorMessage name="name" component="div" className="error-text" />
            </label>
            
            <label className="form-label">
              Email
              <Field type="email" name="email" className="form-input neon-focus" />
              <ErrorMessage name="email" component="div" className="error-text" />
            </label>
            
            <label className="form-label">
              Пароль
              <Field type="password" name="password" className="form-input neon-focus" />
              <ErrorMessage name="password" component="div" className="error-text" />
            </label>
            
            <button type="submit" className="btn-primary purple-glow" disabled={isSubmitting}>
              Зарегистрироваться
            </button>

            <p className="auth-switch-text">
              Уже есть аккаунт? <Link to="/login" className="auth-switch-link">Войти</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};