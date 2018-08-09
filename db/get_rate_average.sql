SELECT avg(rating)
from tutorrating Join tutor t ON tutorrating.tutor_id = $1;