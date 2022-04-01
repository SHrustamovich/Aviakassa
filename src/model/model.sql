CREATE TABLE avia_cashbox(
    id serial PRIMARY KEY,
    address text not null
);

CREATE TABLE ticket(
    id serial PRIMARY KEY,
    name text not null,
    time text not null,
    price text not null,
    avia_id int REFERENCES avia_cashbox(id)
);

INSERT INTO avia_cashbox(address) values    
('Yunusobod'),
('Xadra'),
('Toshmi');

INSERT INTO ticket(name,time,price,avia_id) values
('toshkent-buxoro','30-mart 12.00','250 000',1),
('toshkent-sanarqand','30-mart 15.00','350 000',2),
('toshkent-xorazm','30-mart 19.00','450 000',3);