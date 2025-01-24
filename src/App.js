import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar/NavBar';
import INTRO from './Components/INTRO/Intro';
import Works from './Components/Works/works';
import STORY from './Components/STORY/story';
import FOOTER from './Components/FOOTER/footer';
import LOGIN from './Components/LOGIN/LoginSignup';
import KNOWUS from './Components/KNOWUS/knowus';
import READERS from './Components/READERS/reader';
import CreateBlog from './Components/CreateBlog/CreateBlog';
import BlogList from './Components/CreateBlog/BlogList';
import StoryEditor from './Components/STORY/StoryEditor';
import BlogDetails from './Components/CreateBlog/BlogDetails';
import StoriesPage from './Components/STORY/StoriesPage';
import StoryDetails from './Components/STORY/StoryDetails';
import Reader from './Components/READERS/reader';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Route for Home page with multiple components */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <INTRO />
                <Works />
                <STORY />
                <READERS />
                <FOOTER />
              </>
            }
          />
          <Route path="/login" element={<LOGIN />} />
          <Route path="/knowus" element={<KNOWUS />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/story-editor" element={<StoryEditor />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/:id" element={<StoryDetails />} />
          <Route path="/reads" element={<Reader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
