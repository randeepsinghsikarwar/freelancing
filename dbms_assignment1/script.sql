use comp2009assignment1;

insert into fuel values 
('f1', 'gas'),
('f2', 'electric'),
('f3', 'hybrid');

insert into transmission values 
('t1', 'manual'),
('t2', 'automatic');

insert into manufacturer values
('M1', 'Toyota Motor Corporation', '123 Main Street', 123123, 'ACCT123'),
('M2', 'Ford Motor Company', '456 Oak Street', 234234, 'ACCT456');

insert into brand values
('B1', 'Camry', 'Premium', 'M1'),
('B2', 'F-150', 'Luxury', 'M2'),
('B3', 'Corolla', 'Economy', 'M1');

insert into model values 
(1, 4, 200, 2500, 2100, 15, 2, '2003-01-03', 't1', 'f3', 'B1'),
(2, 4, 300, 2100, 2000, 12, 6, '2004-02-04', 't2', 'f1', 'B2');


-- q1  - Create a view to list all large-capacity vehicles that can seat 5 or more people. Display brand name, model number, retail price, and seating capacity

create view largeCapacity as 
select b.BrandName, m.ModelNumber, m.SeatingCapacity
from brand b
join model m on b.BrandId = m.brand_BrandId
where m.SeatingCapacity >=5;

-- q2  - Create a view to hybrid cars and their retail price
create view HybridCars as 
select b.BrandName, m.ModelNumber, m.StoreRetailPrice
from brand b
join model m on b.BrandId = m.brand_BrandId
join Fuel f on m.fuelID = f.fuelId
where f.fuelType = 'Hybrid';

-- q3  - Generate a list of manufacturers and the number of brands each have
create view ManufacturerBrandCount as
select m.MCompanyName, COUNT(b.BrandId) as NumberOfBrands
from manufacturer m
left join brand b on m.MCode = b.manufacturer_MCode
group by m.MCompanyName;

-- q4  - Generate a list of manufacturers (company name), their brand names, and brand model names, and power source. Sort alphabetically by company name, brand name, and model name
select m.MCompanyName as manufacturer, b.BrandName as Brand, a.ModelNumber as Model, f.FuelType as PowerSource
from Manufacturer m
join brand b on m.MCode = b.Manufacturer_MCode
join model a on b.BrandId = a.brand_BrandId
join Fuel f on a.fuelId = f.fuelId
order by m.MCompanyName, b.BrandName, a.ModelNumber;

-- q5  - Create a view to display model number, retail price and the store's actual retail price for models that are $35,000 or less
create view q5 as
select ModelNumber, SuggRetailPrice as RetailPrice, StoreRetailPrice as ActualPrice
from model
where StoreRetailPrice <=35000;

-- q6  - Update retail prices of cars that are $35,000 or less. Due to shortages in manufacturer’s shipping routes, retail price will increase by 20% for all retail prices $35,000 or less. Use the view you created in previous step
update model
set StoreRetailPrice = StoreRetailPrice * 1.20
where StoreRetailPrice <=35000;