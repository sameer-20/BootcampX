SELECT teachers.name, COUNT(assistance_requests.*) as total_assistances
FROM teachers
JOIN assistance_requests
ON teachers.id = assistance_requests.teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;