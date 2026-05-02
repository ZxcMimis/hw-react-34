import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/thunk/authThunk';
import './contactForm.scss';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap() 
      .then(() => {
        resetForm();
        navigate('/contacts');
      })
      .catch((error) => {
        alert('Ошибка входа! Неверная почта или пароль.');
        console.error('Детали ошибки:', error);
      });
  };

  return (
    <div className="auth-wrapper">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="auth-form dark-panel neon-border">
            <h2 className="form-title text-purple">Вход</h2>
            
            <label className="form-label">
              Email
              <Field type="email" name="email" className="form-input neon-focus" required />
            </label>
            
            <label className="form-label">
              Пароль
              <Field type="password" name="password" className="form-input neon-focus" required />
            </label>
            
            <button type="submit" className="btn-primary purple-glow" disabled={isSubmitting}>
              Войти
            </button>

            <p className="auth-switch-text">
              Нет аккаунта? <Link to="/register" className="auth-switch-link">Создать</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};