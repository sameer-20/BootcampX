SELECT distinct teachers.name as teacher, cohorts.name as cohort
from assistance_requests
JOIN teachers ON teacher_id = teachers.id 
JOIN students ON student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;