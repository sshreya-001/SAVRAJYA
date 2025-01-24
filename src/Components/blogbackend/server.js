const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to blogDB for blogs
mongoose
  .connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to blogDB'))
  .catch(err => console.error('blogDB Connection Error:', err));

// Create a separate connection for storiesDB
const storiesDBConnection = mongoose.createConnection('mongodb://localhost:27017/storiesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log the storiesDB connection status
storiesDBConnection.on('connected', () => console.log('Connected to storiesDB'));
storiesDBConnection.on('error', (err) => console.error('storiesDB Connection Error:', err));

// Blog Schema and Model (blogDB)
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

// Story Schema and Model (storiesDB)
const storySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }, // Serialized chapters
  createdAt: { type: Date, default: Date.now },
});

const Story = storiesDBConnection.model('Story', storySchema);

// Blog Routes
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newBlog = new Blog({ title, content });
    await newBlog.save();
    console.log('New Blog Saved:', newBlog);
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (err) {
    res.status(400).json({ message: 'Error creating blog', error: err });
  }
});

app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blogs', error: err });
  }
});
// Blog Routes
app.get('/api/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blog', error: err });
  }
});

// Story Routes
app.post('/api/stories', async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newStory = new Story({ title, content });
    await newStory.save();
    res.status(201).json({ message: 'Story created successfully', story: newStory });
  } catch (err) {
    res.status(400).json({ message: 'Error creating story', error: err });
  }
});

app.get('/api/stories', async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stories', error: err });
  }
});
// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));