import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authOperations'; // Проверь правильность пути к санкам!

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', email: '', password: '' };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Имя обязательно';
    if (!values.email) errors.email = 'Почта обязательна';
    if (!values.password) errors.password = 'Пароль обязателен';
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div className="auth-wrapper">
      <Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="auth-form dark-panel neon-border">
            <h2 className="form-title text-purple">Регистрация</h2>
            <label className="form-label">Имя <Field type="text" name="name" className="form-input neon-focus" /></label>
            <label className="form-label">Email <Field type="email" name="email" className="form-input neon-focus" /></label>
            <label className="form-label">Пароль <Field type="password" name="password" className="form-input neon-focus" /></label>
            <button type="submit" className="btn-primary purple-glow" disabled={isSubmitting}>Регистрация</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};