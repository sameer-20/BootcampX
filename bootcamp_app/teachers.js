const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


// Parameterized query to prevent SQL injection

// Query to get the names of all teachers who assisted. Accept the cohort name as input from the user.


const queryString = `
  SELECT distinct teachers.name as teacher, cohorts.name as cohort
  from assistance_requests
  JOIN teachers ON teacher_id = teachers.id 
  JOIN students ON student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  ORDER BY teacher;
`;

const cohortName = process.argv[2];

// Store all potentially malicious values in an array. 
const values = [`%${cohortName}%`];


pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
});
