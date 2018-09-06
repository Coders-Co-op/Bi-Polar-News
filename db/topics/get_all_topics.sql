
select topic_name, subtopic_name from subtopics 
join topics ON subtopics.topics_id = topics.topics_id
Order by topic_name