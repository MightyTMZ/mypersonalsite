// src/components/ArticlesPage.tsx

import React from "react";

const articles = [
  {
    id: 1,
    title: "First Article",
    platform: "Substack",
    url: "https://example.com/article1",
    thumbnail: "/thumbnails/article1.jpg",
  },
  {
    id: 2,
    title: "Second Article",
    platform: "Medium",
    url: "https://example.com/article2",
    thumbnail: "/thumbnails/article2.jpg",
  },
  // Add more articles as needed
];

const ArticlesPage: React.FC = () => {
  return (
    <div className="articles-page">
      <div className="article-list">
        {articles.map((article) => (
          <a key={article.id} href={article.url} className="article">
            <div className="article-thumbnail">
              <img src={article.thumbnail} alt={article.title} />
            </div>
            <div className="article-details">
              <h2>{article.title}</h2>
              <p>{article.platform}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
