const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/github', async (req, res) => {
  const { code } = req.body;

  try {
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    res.json({
      name: userResponse.data.name || userResponse.data.login,
      email: userResponse.data.email,
      avatar: userResponse.data.avatar_url,
    });
  } catch (error) {
    console.error('GitHub OAuth error:', error.message);
    res.status(500).json({ message: 'GitHub login failed' });
  }
});

module.exports = router;
