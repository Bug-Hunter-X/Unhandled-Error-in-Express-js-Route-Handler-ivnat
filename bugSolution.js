const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Add error handling for invalid userId
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... code to fetch user data ...
  // Example: Simulate fetching user data
  const user = { id: userId, name: 'John Doe' };
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});
app.listen(3000, () => console.log('Server started on port 3000'));