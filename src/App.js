import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import { ContactsPage } from './components/ContactsPage/ContactsPage'; 

import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';

export const App = () => {
  return (
    <div className="app-container background-dark">
      <header className="app-header neon-bottom-line">
        <h1 className="logo text-purple">Phonebook</h1>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route 
            path="/register" 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />
            } 
          />
          <Route 
            path="/login" 
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
            } 
          />

          <Route 
            path="/contacts" 
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            } 
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;