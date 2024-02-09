import React from 'react';
import Header from './Header.js';
import About from './About';
import ArticleList from './ArticleList';
// import blogData from '../data/blog';

const App = () => {
  const { blogName, aboutImage, aboutText, articles } = blogData;

  return (
    <div>
      <Header blogName={blogName} />
      <About image={aboutImage} aboutText={aboutText} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
