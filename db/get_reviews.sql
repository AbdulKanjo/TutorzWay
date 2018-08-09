SELECT DISTINCT review, username, id
FROM tutorreview tr JOIN tutor t ON tr.tutor_id = $1;