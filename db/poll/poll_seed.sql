CREATE TABLE poll (
    poll_id SERIAL PRIMARY KEY,
    art1_id INTEGER REFERENCES articles(id),
    art2_id INTEGER REFERENCES articles(id),
    art1_res INTEGER,
    art2_res INTEGER,
    surprised BOOLEAN,
    date TIMESTAMPTZ
);