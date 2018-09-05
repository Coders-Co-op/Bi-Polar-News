CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title TEXT,
    article_body TEXT,
    description TEXT,
    author TEXT,
    date TIMESTAMPTZ,
    source TEXT
);