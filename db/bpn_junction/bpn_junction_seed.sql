CREATE TABLE bpn_junction (
    bpn_juction_id SERIAL PRIMARY KEY,
    article_id INTEGER REFERENCES articles(id),
    topic_id INTEGER REFERENCES topics(topics_id),
    subtopic_id INTEGER REFERENCES subtopics(subtopics_id)
);