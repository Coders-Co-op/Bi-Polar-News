INSERT INTO poll(art1_id,art2_id,art1_res,art2_res,surprised,date)
VALUES($1,$2,$3,$4,$5,$6)
RETURNING *
