import React from 'react';
import Article from './Article';
import ArticleList from './ArticleList'
function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
}

export default ArticleList;
