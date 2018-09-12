-- SELECT count(*)
-- FROM poll
-- WHERE art1_id = $1 AND art2_id = $2 AND surprised = true;
SELECT count(*)
FROM poll
WHERE art1_id in ($1,$2) AND art2_id in ($1,$2) AND surprised = true;
