import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/authOperations'; // Проверь путь!

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div className="auth-wrapper">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="auth-form dark-panel neon-border">
            <h2 className="form-title text-purple">Вход</h2>
            <label className="form-label">Email <Field type="email" name="email" className="form-input neon-focus" /></label>
            <label className="form-label">Пароль <Field type="password" name="password" className="form-input neon-focus" /></label>
            <button type="submit" className="btn-primary purple-glow" disabled={isSubmitting}>Войти</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};