import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GitHubCallback = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      axios
        .post('http://localhost:5000/api/auth/github', { code })
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data));
          setUser(res.data);
          navigate('/');
        })
        .catch((err) => {
          alert('GitHub login failed');
          navigate('/');
        });
    }
  }, [navigate, setUser]);

  return <p>Logging in with GitHub...</p>;
};

export default GitHubCallback;
