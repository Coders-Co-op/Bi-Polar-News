CREATE TABLE subtopics (
    subtopics_id SERIAL PRIMARY KEY,
    subtopic_name TEXT,
    topics_id INTEGER REFERENCES topics(topics_id)
);