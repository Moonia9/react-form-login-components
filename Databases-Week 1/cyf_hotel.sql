DROP TABLE IF EXISTS bank_details;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS hotels;
DROP TABLE IF EXISTS bookings;


CREATE TABLE customers (
  id        SERIAL PRIMARY KEY,
  name      VARCHAR(30) NOT NULL,
  email     VARCHAR(120) NOT NULL,
  address   VARCHAR(120),
  city      VARCHAR(30),
  postcode  VARCHAR(12),
  country   VARCHAR(20)
);


select * from customers;
SELECT name,address FROM customers WHERE id = 1;


create table bank_details (
id     SERIAL primary key,
customer_id INT references customers(id),
bank_name VARCHAR(30),
iban_code VARCHAR(20) not null 
);



create table hotels (
id    SERIAL primary key,
name  VARCHAR(30) not NULL,
street VARCHAR(30) not null,
country VARCHAR(30) not null,
postcode VARCHAR(12) not null,
city VARCHAR(20) not null,
number_of_rooms INT not null
)


select * from hotels;


create table rooms (
id   SERIAL primary key,
hotel_id INT references hotels(id),
is_available boolean not null,
price_per_night INT not null
)


 CREATE TABLE bank_details (
  id        SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(id),
  bank_name  VARCHAR(30) NOT null,
  iban_code  VARCHAR(30) NOT null
);


CREATE TABLE bookings (
  id               SERIAL PRIMARY KEY,
  customer_id      INT REFERENCES customers(id),
  hotel_id         INT REFERENCES hotels(id),
  checkin_date     DATE NOT NULL,
  nights           INT NOT NULL
);

select * from bookings;


INSERT INTO customers (name, email, address, city, postcode, country) VALUES ('John Smith','j.smith@johnsmith.org','11 New Road','Liverpool','L10 2AB','UK');
INSERT into customers (name, email, address, city, postcode, country) values ('Enia Munteanu', 'mooniae@gmail.com', '3 Liberty Street', 'Paradise City', 'G10 3BG', 'United States');
INSERT into customers (name, email, address, city, postcode, country) values ('Marilyn Monroe', 'diamonds_are_a_girls_bf@gmail.com', 'Sunset Blvd', 'Atlanta', 'K11 3RI', 'United States');
INSERT into customers (name, email, address, city, postcode, country) values ('Vladimir Nabokov', 'lolita@gmail.com', 'Books Street', 'Kiev', 'K34 3UI', 'Russia');
INSERT into customers (name, email, address, city, postcode, country) values ('Laurence Lebihan', 'laurence_of_arabia@gmail.com', 'Filmset', 'Destino', 'L34 4JU', 'UK');
INSERT into customers (name, email, address, city, postcode, country) values ('Melinda Marsh', 'melinda_melinda@gmail.com', 'Apple Street', 'Manchester', 'L39 6GN', 'UK');

SELECT * FROM customers where name = 'Laurence Lebihan';
SELECT * FROM customers WHERE country = 'UK';
SELECT address,city,postcode FROM customers WHERE name = 'Melinda Marsh';


INSERT INTO hotels (name, street,country, postcode, city, number_of_rooms) VALUES ('Triple Point Hotel', 'Pelai','Romania', 'CM194JS','Cluj', '20');
INSERT INTO hotels (name, street,country, postcode, city, number_of_rooms) VALUES ('Royal Cosmos Hotel', 'Mara','Spain', 'TR209AX','Girona', '5');
INSERT INTO hotels (name, street,country, postcode, city, number_of_rooms) VALUES ('Pacific Petal Motel', 'Besos','Spain', 'BN180TG','Barcelona', '15');
INSERT INTO hotels (name, street,country, postcode, city, number_of_rooms) VALUES ('Petonets Hotel', 'Servet','Spain', 'LU150TG','Barcelona', '10');
INSERT INTO hotels (name, street,country, postcode, city, number_of_rooms) VALUES ('Vladimir Hotel', 'Mantuleasa','Romania', 'DGQ127','Brasov', '7');
INSERT INTO hotels (name, street,country, postcode, city, number_of_rooms) VALUES ('Nabucco Hotel', ' Via Opera','Italy', 'PO130YN','Milano', '3');

SELECT * FROM hotels WHERE postcode = 'CM194JS' OR postcode = 'TR209AX';
SELECT * FROM hotels WHERE postcode = 'DGQ127';
SELECT * FROM hotels WHERE number_of_rooms > 11;
SELECT * FROM hotels WHERE number_of_rooms > 6 AND number_of_rooms < 15;
SELECT * FROM hotels WHERE number_of_rooms = 10 OR number_of_rooms = 20;


INSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 1, '2019-10-01', 2);
INSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 3, '2021-07-01', 4);
INSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 5, '2021-08-15', 9);
INSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 4, '2021-08-24', 2);
INSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 6, '2021-06-24', 1);
INSERT INTO bookings (customer_id, hotel_id, checkin_date, nights) VALUES (1, 2, '2020-06-24', 1);

SELECT * FROM bookings WHERE checkin_date > '2019/10/01';
SELECT * FROM bookings WHERE checkin_date > '2019/10/01' AND nights >= 2;
SELECT * FROM bookings WHERE customer_id = 1;
SELECT * FROM bookings WHERE nights > 4;
SELECT * FROM bookings WHERE checkin_date = '2020-06-24';
