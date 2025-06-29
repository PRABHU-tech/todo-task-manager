const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/github', async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: { Accept: 'application/json' },
      }
    );

    const accessToken = response.data.access_token;

    const userData = await axios.get(`https://api.github.com/user`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    res.json({
      name: userData.data.name || userData.data.login,
      email: userData.data.email,
      avatar: userData.data.avatar_url,
    });
  } catch (error) {
    res.status(500).json({ message: 'GitHub Login Failed', error: error.message });
  }
});

module.exports = router;
