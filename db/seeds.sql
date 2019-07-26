CREATE TABLE inventory (
    id SERIAL PRIMARY KEY NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    product_price INTEGER NOT NULL,
    product_image TEXT NOT NULL
);

INSERT INTO inventory (product_name, product_price, product_image)
VALUES ('KTM 300', 9999, 'https://cdp.azureedge.net/products/USA/KT/2020/MC/OR/300_XC-W_TPI/50/TBD/2000000001.jpg'),
('KTM RC 390', 12999, 'https://auto.ndtvimg.com/bike-images/colors/ktm/rc-390/ktm-rc-390-black.jpg?v=1'),
('KTM 790 DUKE', 14999, 'https://static3.car.gr/13514871_0_z.jpg');