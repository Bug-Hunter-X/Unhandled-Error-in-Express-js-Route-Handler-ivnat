const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  // ... code to fetch user data ...
  res.json({ id: userId, name: 'John Doe' });
});
app.listen(3000, () => console.log('Server started on port 3000'));