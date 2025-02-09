CREATE TABLE leads (
    id INT IDENTITY(1,1) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    date_created DATETIME NOT NULL,
    suburb VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    price FLOAT NOT NULL,
    status VARCHAR(20) DEFAULT 'invited' CHECK (status IN ('invited', 'accepted', 'rejected')),
    contact_full_name VARCHAR(100),
    contact_phone_number VARCHAR(100),
    contact_email VARCHAR(100)
);
