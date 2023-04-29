INSERT INTO department (dep_name)
VALUES 
('Marketing'),
       ('TechOps'),
       ('Human Resources'),
       ('C-Suite');

INSERT INTO roles (title, salary, department_id)
VALUES
('Marketing Lead', 75000.00, 1),
('Marketing Manager', 115000.00, 1),
('SWE', 120000.00, 2),
('Sr SWE', 120000.00, 2),
('Recruiter', 75000.00, 3),
('Sr Recruiter', 100000.00, 3),
('CTO', 300000.00, 4),
('CFO', 300000.00, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Ruth', 4, 4),
       ('Jane', 'Doe', 4, 4),
       ('Will', 'Smith', 3, 3),
       ('Al', 'Pacino', 3, 3),
       ('Juan', 'ToThree', 2, 2),
       ('Bob', 'DaBuilder', 2, 2),
        ('Boba', 'Fett', 2, 2),
       ('Prison', 'Mike', 2, 2);