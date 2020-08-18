DROP database if exists business;


create database business;
use business;

create table info
(
    id int NOT NULL
    AUTO_INCREMENT, name varchar
    (255) DEFAULT NULL, location varchar
    (255) DEFAULT NULL, link varchar
    (255) DEFAULT NULL, review varchar (255) DEFAULT NULL, PRIMARY KEY
    (id));

    insert into info
        (id, name, location, link, review)
    values('3', 'Skrimp Shack', 'Charlotte', 'skrimpshack.com', 'Amazing skrimps');








--DROP database if exists staff;
--
--create database staff;
--use staff;
--
--create table tb_emp
--(
--    id int NOT NULL
--    AUTO_INCREMENT, name varchar
--    (255) DEFAULT NULL,gender varchar
--    (255) DEFAULT NULL, department varchar
--    (255) DEFAULT NULL, dob varchar DEFAULT NULL, PRIMARY KEY
--    (id));
--
--    insert into tb_emp
--        (id, name, gender, department, dob)
--    values('3', 'Mukund Madhav', 'Male', 'React', '1998-04-02');
--    insert into tb_emp
--        (id, name, gender, department, dob)
--    values('4', 'd', 'a', 'a', '1998-04-02');
