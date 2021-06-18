create table mentors (
id serial primary key,
name VARCHAR(30) not NULL,
years_living_in_glasgow INT default 0 not null,
address VARCHAR(50) not null,
favorite_programming_language VARCHAR(10)
);

select * from mentors;

insert into mentors (name, address) values ('Maria Lopez', '12 Calle Valencia, Sitges' );
insert into mentors (name, address, favorite_programming_language) values ('Mihai George', '12 Strada Soarelui, Romania', 'JavaScript' );
insert into mentors (name, address,years_living_in_glasgow, favorite_programming_language) values ('Helen Smith', '10 Harrow, London',3, 'JavaScript' );
insert into mentors (name, address,years_living_in_glasgow) values ('Adria Sanchez', '30 Mildred, Spain',1 );
insert into mentors (name, address,favorite_programming_language) values ('Lola Vendetta','5 East Clement, USA' ,'React' );


create table students (
id serial primary key,
name VARCHAR(30) not null,
address VARCHAR(50) not null,
graduation_date DATE
);

insert into students (name, address) values ('Andrea Malpense ', '6 Via Fiorentino, Italy' );
insert into students (name, address, graduation_date) values ('Priscilla Ono ', '23 Minsk Street, Valetta', Now() );
insert into students (name, address, graduation_date) values ('Sofia Loren ', '23 Sunset Boulevard, Italy', '1973-10-01' );
insert into students (name, address) values ('Mihaela Glavan ', '1 Dorobanti, Bucharest' );
insert into students (name, address, graduation_date) values ('Nicole Cretescu ', '18 Florilor, Bucharest', '1993-10-01' );
insert into students (name, address) values ('Richard Mare', '9 North Street, USA' );
insert into students (name, address, graduation_date) values ('Anna Panait', '1 Rue Enchante,France', '2000-08-01' );
insert into students (name, address, graduation_date) values ('Camelia Rupescu', '17 Strada Neinteleasa,Romania', '1970-07-01' );
insert into students (name, address) values ('Charles Bukowski', '89 Prussia Street, USA' );
insert into students (name, address) values ('Anais Nin', '79 Berkeley Street, USA' );

select * from students;


create table subjects(
id serial primary key,
name VARCHAR(30) not null 
);

insert into subjects (name) values ('JavaScript'), ('NodeJS'), ('Databases'), ('React');

create table classes(
id serial primary key,
mentor serial references mentors(id),
subject serial references subjects(id),
date DATE not null,
location VARCHAR(30) not NULL
);

insert into classes (mentor, subject, date, location) values (1, 3, '2021-06-01', 'Valetta' );
insert into classes (mentor, subject, date, location) values (1, 3, '2021-04-01', 'Italy' );
insert into classes (mentor, subject, date, location) values (1, 3, '2021-07-01', 'Bucharest' );