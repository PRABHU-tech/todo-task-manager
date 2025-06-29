import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = ({ setUser }) => {
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    localStorage.setItem('user', JSON.stringify(decoded));
    setUser(decoded);
  };

  return (
    <div className="login-container">
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => alert('Login Failed')}
      />
    </div>
  );
};

export default Login;
