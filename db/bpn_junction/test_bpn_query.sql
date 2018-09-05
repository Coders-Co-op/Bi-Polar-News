-- Query junction table for all articles, topics and subtopics GRAB_ALL Almost
select articles.*, subtopic_name, topic_name from bpn_junction
join articles on article_id = articles.id
join subtopics on subtopic_id = subtopics.subtopics_id
join topics on topic_id = topics.topics_id
