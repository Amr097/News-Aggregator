const normalizeNewsArticle = (article) => {
  // Check if it's a Guardian article (has webTitle)
  if (article.webTitle) {
    return {
      id: article.id,
      title: article.webTitle,
      image: null,
      sourceName: "The Guardian",
      publishedAt: article.webPublicationDate,
      type: article.type,
      content: null,
      url: article.webUrl,
    };
  }

  return {
    id: generateId(article.url),
    title: article.title,
    image: article.urlToImage,
    sourceName: article.source.name,
    publishedAt: article.publishedAt,
    type: "article",
    content: article.content,
    url: article.url,
  };
};

// Generate simple ID from URL
function generateId(url) {
  return (
    url
      .split("/")
      .pop()
      .replace(/\.(html|php)$/, "") || Math.random().toString(36)
  );
}

export function normalizeArticles(articles) {
  return articles
    .map((article) => normalizeNewsArticle(article))
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}
