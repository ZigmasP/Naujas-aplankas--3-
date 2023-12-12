import React, { useState } from 'react';
import './Main.css';
import LoginForm from './LoginForm'; 

const Main = () => {
  const [showLoginForm, setLoginForm] = useState(false);

  const handleLogin = (provider) => {
    console.log(`Login from ${provider}`);
  };

  const handleLoginForm = () => {
    setLoginForm(true);
  };

  return (
    <main className="main">
      <h1>Get Started</h1>
      <p>Already have no account?</p>
      <ul>
        <li onClick={handleLoginForm}>Login</li>
      </ul>
      <div className='SocialButton'>
        <button className='Google' onClick={() => handleLogin('Google')}>sign up Google</button>
        <button className='Facebook' onClick={() => handleLogin('Facebook')}>sign up Facebook</button>
      </div>
      <h3>Or</h3>
      
      {showLoginForm && <LoginForm />}
    </main>
  );
};

export default Main;
