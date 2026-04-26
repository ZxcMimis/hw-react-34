import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './contactForm.scss';

export const contactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validate = (values) => {
    const errors = {};
    
    if (!values.name) {
      errors.name = 'Имя обязательно';
    }
    
    if (!values.email) {
      errors.email = 'Почта обязательна';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Неверный формат почты';
    }
    
    if (!values.password) {
      errors.password = 'Пароль обязателен';
    } else if (values.password.length < 7) {
      errors.password = 'Пароль должен быть не короче 7 символов';
    }
    
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Данные регистрации для отправки:", values);
    resetForm();
  };

  return (
    <div className="auth-wrapper">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="auth-form dark-panel neon-border">
            <h2 className="form-title text-purple">Регистрация</h2>

            <label className="form-label">
              Имя пользователя
              <Field 
                type="text" 
                name="name" 
                className="form-input neon-focus" 
                placeholder="Твое имя" 
              />
              <ErrorMessage name="name" component="div" className="error-text" />
            </label>

            <label className="form-label">
              Email
              <Field 
                type="email" 
                name="email" 
                className="form-input neon-focus" 
                placeholder="tvoy@email.com" 
              />
              <ErrorMessage name="email" component="div" className="error-text" />
            </label>

            <label className="form-label">
              Пароль
              <Field 
                type="password" 
                name="password" 
                className="form-input neon-focus" 
                placeholder="Минимум 7 символов" 
              />
              <ErrorMessage name="password" component="div" className="error-text" />
            </label>

            <button 
              type="submit" 
              className="btn-primary purple-glow" 
              disabled={isSubmitting}
            >
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default contactForm;