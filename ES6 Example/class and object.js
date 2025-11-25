// Create a Car class with brand and year. Create an object of it.

class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}

const myCar = new Car('Honda', 2020);
console.log(myCar);

// Example 2:

class Bike {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

const myBike = new Bike('Hero', 2025);
console.log(myBike);

// Example 3:

class Collage {
    constructor(id, name, department, marks) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.marks = marks;
    }
}


const myCollage = new Collage(1, 'Vikas', 'BCA', 85);
console.log(myCollage);

// Example 4:

class Company {
    constructor(empid, empname, department, salary) {
        this.empid = empid;
        this.empname = empname;
        this.department = department;
        this.salary = salary;
    }
}

const EmpInfo = new Company(1, 'Sahil', 'IT', 50000);
console.log(EmpInfo);


// Example 5:

class Bank {
    constructor(accountowner, accounttype, accountno, amount) {
        this.accountowner = accountowner;
        this.accounttype = accounttype;
        this.accountno = accountno;
        this.amount = amount;
    }
}

const BankInfo = new Bank('Suhas Shinde', 'Current', 123456789, 120000);
console.log(BankInfo);


// Example 6:
class product {
    constructor(productname, manufacturing_year, model, net_quantity, country_of_origin, mrp, customercare, email) {
        this.productname = productname;
        this.manufacturing_year = manufacturing_year;
        this.model = model;
        this.net_quantity = net_quantity;
        this.country_of_origin = country_of_origin;
        this.mrp = mrp;
        this.customercare = customercare;
        this.email = email;
    }
}

const productinfo = new product('tuzer 8-in-1 Professional Cleaning Kit', 'AUG-2025', 'TZ-CK-119', 1, 'Hong Kong', 999.00, 7718831111, 'Support@tukzer.com');
console.log(productinfo);


// Example 7:
class DairyProduct {
    constructor(productname, brand, price, quantity, mfgDate, expireDate) {
        this.productname = productname;
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
        this.mfgDate = mfgDate;
        this.expireDate = expireDate;
    }
}

const milk = new DairyProduct('cheese ', 'Gokul', 29, 50, '2025-01-10', '2025-01-18');
console.log(milk);



// Example 8:
class person {
    constructor(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }
}

const info = new person('Vikas', 2003);
console.log(info);