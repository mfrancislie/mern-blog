const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/User');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://mern-blog-user:mern-blog-user@myblog.obdi4n0.mongodb.net/?retryWrites=true&w=majority'
);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

const port = 5000;
app.listen(port, () => console.log(`serve at localhost:${port}!`));
