import React, { useState } from 'react';
import './Login.css';
const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login Submitted', { email, password });
    } else {
      console.log('Signup Submitted', { name, email, password });
    }
  };

  
  return (
    <div className={`login-signup-wrapper ${isLogin ? 'login-page' : ''}`}>
      <div className="heading">
        <h1>{isLogin ? 'LOGIN' : 'SIGNUP'}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
       <div className="input-group">
  <label>Email: </label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
</div>
<div className="input-group">
  <label>Password: </label>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
</div>
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={handleToggle}
            style={{
              color: 'purple',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              textDecorationLine:'underline',
              fontWeight:'bold',
            }}
          >
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </div>
      
    </div>
    
  );
};

export default LoginSignup;
















