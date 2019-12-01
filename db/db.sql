CREATE TABLE jobs 
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descriptions TEXT NOT NULL,
    salary VARCHAR(255) NOT NULL
);

INSERT INTO jobs (title, descriptions, salary) VALUES
(
    'Electrical Engineer', 'Need 2+ years of job experience,
    a Degree in Electrical Engineering or Computer Engineering, 
    teamwork is important to work on 3 man teams and being a self
    starter to suggest and get things done', '$3500 a month'
),
(
    'Baker', 'Need a year of job experience,
    a certificate in food preparation', '$1500 a month'
),
(
    'Software Engineer', 'Need 4+ years of job experience,
    a Degree in Computer Science or Related Study, 
    teamwork is important and being a self
    starter to be able to work without supervision', '$3000 a month'
),
(
    'Cashier', 'Honest person and Police Records', '$800 a month'
);