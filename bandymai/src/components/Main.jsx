import React, { useState } from 'react';
import './Main.css';
import LoginForm from './LoginForm'; 

const Main = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = (provider) => {
    console.log(`Prisijungimas per ${provider}`);
    
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  return (
    <main className="main">
      <h1>Get Started</h1>
      <p>Already have no account?</p>
      <ul>
        <li>Login</li>
      </ul>
      <div className='SocialButton'>
        <button className='Google' onClick={() => handleLogin('Google')}>sign up Google</button>
        <button className='Facebook' onClick={() => handleLogin('Facebook')}>sign up Facebook</button>
      </div>
      <h3>Or</h3>
    </main>
  );
};

export default Main;
