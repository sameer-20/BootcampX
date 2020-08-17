##

We will be executing sql files from this directory against the database, so to make things easy, only start a psql command from within this BootcampX directory.

## Entities

The main entities for this application will be:

    students
    cohorts
    assignments
    assignment_submissions
    teachers
    assistance_requests

## Cohort Entity

A cohort will have the following attributes:

    id: A unique identifier
    name: The name of the cohort
    start_date: The cohorts' start date
    end_date: The cohorts' end date

## Student Entity


    id: A unique identifier
    name: The full name of the student
    email: The students' email address
    phone: The students' phone number
    github: The students' github profile url
    start_date: The students' start date of the Bootcamp
    end_date: The students' end date of the Bootcamp
    cohort_id: The id of the cohort that the student is enrolled in


