-- Crayon Factory Database Schema
-- This is a sample database for demonstrating the Schema Stumper application

-- Create the database schema
CREATE SCHEMA IF NOT EXISTS crayon_factory;
SET search_path TO crayon_factory, public;

-- Colors table - stores all available colors
CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    hex_code CHAR(7) NOT NULL,
    rgb_red INTEGER CHECK (rgb_red >= 0 AND rgb_red <= 255),
    rgb_green INTEGER CHECK (rgb_green >= 0 AND rgb_green <= 255),
    rgb_blue INTEGER CHECK (rgb_blue >= 0 AND rgb_blue <= 255),
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Suppliers table - wax and pigment suppliers
CREATE TABLE suppliers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_email VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    country VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Raw materials table
CREATE TABLE raw_materials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('wax', 'pigment', 'additive')),
    supplier_id INTEGER REFERENCES suppliers(id),
    unit_price DECIMAL(10,2),
    stock_quantity INTEGER DEFAULT 0,
    minimum_stock INTEGER DEFAULT 10,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crayon products table
CREATE TABLE crayon_products (
    id SERIAL PRIMARY KEY,
    product_code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    color_id INTEGER REFERENCES colors(id),
    size VARCHAR(20) CHECK (size IN ('small', 'regular', 'jumbo')),
    price DECIMAL(8,2) NOT NULL,
    production_cost DECIMAL(8,2),
    is_discontinued BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Production batches table
CREATE TABLE production_batches (
    id SERIAL PRIMARY KEY,
    batch_number VARCHAR(50) UNIQUE NOT NULL,
    product_id INTEGER REFERENCES crayon_products(id),
    quantity_produced INTEGER NOT NULL,
    production_date DATE NOT NULL,
    quality_grade CHAR(1) CHECK (quality_grade IN ('A', 'B', 'C')),
    supervisor_name VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Material usage table - tracks which materials are used in which batches
CREATE TABLE batch_material_usage (
    id SERIAL PRIMARY KEY,
    batch_id INTEGER REFERENCES production_batches(id),
    material_id INTEGER REFERENCES raw_materials(id),
    quantity_used DECIMAL(10,3) NOT NULL,
    cost DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    customer_type VARCHAR(20) CHECK (customer_type IN ('retail', 'wholesale', 'educational')),
    credit_limit DECIMAL(12,2) DEFAULT 0,
    address TEXT,
    city VARCHAR(50),
    state VARCHAR(50),
    zip_code VARCHAR(10),
    country VARCHAR(50) DEFAULT 'USA',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    customer_id INTEGER REFERENCES customers(id),
    order_date DATE NOT NULL,
    ship_date DATE,
    status VARCHAR(20) CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
    total_amount DECIMAL(12,2),
    discount_percent DECIMAL(5,2) DEFAULT 0,
    shipping_cost DECIMAL(8,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES crayon_products(id),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(8,2) NOT NULL,
    discount_amount DECIMAL(8,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Quality control tests table
CREATE TABLE quality_tests (
    id SERIAL PRIMARY KEY,
    batch_id INTEGER REFERENCES production_batches(id),
    test_type VARCHAR(50) NOT NULL,
    test_date DATE NOT NULL,
    result VARCHAR(20) CHECK (result IN ('pass', 'fail', 'conditional')),
    score DECIMAL(5,2),
    notes TEXT,
    tester_name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data

-- Colors
INSERT INTO colors (name, hex_code, rgb_red, rgb_green, rgb_blue, is_primary) VALUES
('Red', '#FF0000', 255, 0, 0, TRUE),
('Blue', '#0000FF', 0, 0, 255, TRUE),
('Yellow', '#FFFF00', 255, 255, 0, TRUE),
('Green', '#00FF00', 0, 255, 0, FALSE),
('Orange', '#FFA500', 255, 165, 0, FALSE),
('Purple', '#800080', 128, 0, 128, FALSE),
('Pink', '#FFC0CB', 255, 192, 203, FALSE),
('Brown', '#A52A2A', 165, 42, 42, FALSE),
('Black', '#000000', 0, 0, 0, FALSE),
('White', '#FFFFFF', 255, 255, 255, FALSE),
('Turquoise', '#40E0D0', 64, 224, 208, FALSE),
('Magenta', '#FF00FF', 255, 0, 255, FALSE);

-- Suppliers
INSERT INTO suppliers (name, contact_email, phone, address, country) VALUES
('Premium Wax Co.', 'orders@premiumwax.com', '555-0101', '123 Industrial Blvd, Houston, TX', 'USA'),
('ColorTech Pigments', 'sales@colortech.com', '555-0102', '456 Chemical Way, Newark, NJ', 'USA'),
('Natural Wax Solutions', 'info@naturalwax.com', '555-0103', '789 Eco Drive, Portland, OR', 'USA'),
('Global Pigment Supply', 'contact@globalpigment.com', '555-0104', '321 Trade Street, Los Angeles, CA', 'USA');

-- Raw materials
INSERT INTO raw_materials (name, type, supplier_id, unit_price, stock_quantity, minimum_stock) VALUES
('Paraffin Wax', 'wax', 1, 2.50, 500, 50),
('Beeswax', 'wax', 3, 8.75, 200, 25),
('Red Pigment', 'pigment', 2, 15.00, 100, 10),
('Blue Pigment', 'pigment', 2, 12.00, 150, 15),
('Yellow Pigment', 'pigment', 4, 10.00, 120, 12),
('Stearic Acid', 'additive', 1, 3.25, 75, 10),
('Titanium Dioxide', 'pigment', 4, 25.00, 80, 8);

-- Crayon products
INSERT INTO crayon_products (product_code, name, color_id, size, price, production_cost) VALUES
('CR-RED-REG', 'Classic Red Crayon', 1, 'regular', 0.75, 0.35),
('CR-BLU-REG', 'Ocean Blue Crayon', 2, 'regular', 0.75, 0.35),
('CR-YEL-REG', 'Sunshine Yellow Crayon', 3, 'regular', 0.75, 0.35),
('CR-GRN-REG', 'Forest Green Crayon', 4, 'regular', 0.75, 0.35),
('CR-ORG-REG', 'Bright Orange Crayon', 5, 'regular', 0.75, 0.35),
('CR-RED-JUM', 'Jumbo Red Crayon', 1, 'jumbo', 1.25, 0.65),
('CR-BLU-JUM', 'Jumbo Blue Crayon', 2, 'jumbo', 1.25, 0.65),
('CR-PNK-REG', 'Pretty Pink Crayon', 7, 'regular', 0.85, 0.40);

-- Production batches
INSERT INTO production_batches (batch_number, product_id, quantity_produced, production_date, quality_grade, supervisor_name) VALUES
('B2024-001', 1, 1000, '2024-01-15', 'A', 'Sarah Johnson'),
('B2024-002', 2, 1500, '2024-01-16', 'A', 'Mike Chen'),
('B2024-003', 3, 1200, '2024-01-17', 'B', 'Sarah Johnson'),
('B2024-004', 6, 800, '2024-01-18', 'A', 'Lisa Rodriguez'),
('B2024-005', 1, 2000, '2024-01-20', 'A', 'Mike Chen');

-- Customers
INSERT INTO customers (name, email, customer_type, credit_limit, address, city, state, zip_code) VALUES
('ABC School District', 'purchasing@abcschools.edu', 'educational', 10000.00, '100 Education Way', 'Springfield', 'IL', '62701'),
('Creative Kids Store', 'orders@creativekids.com', 'retail', 5000.00, '200 Main Street', 'Anytown', 'CA', '90210'),
('Art Supply Warehouse', 'buyer@artsupply.com', 'wholesale', 25000.00, '300 Commerce Blvd', 'Dallas', 'TX', '75201'),
('Little Learners Academy', 'admin@littlelearners.edu', 'educational', 3000.00, '400 School Lane', 'Boston', 'MA', '02101');

-- Orders
INSERT INTO orders (order_number, customer_id, order_date, status, total_amount, discount_percent) VALUES
('ORD-2024-001', 1, '2024-01-25', 'delivered', 750.00, 10.0),
('ORD-2024-002', 2, '2024-01-26', 'shipped', 450.00, 5.0),
('ORD-2024-003', 3, '2024-01-27', 'processing', 1200.00, 15.0),
('ORD-2024-004', 4, '2024-01-28', 'pending', 300.00, 0.0);

-- Order items
INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES
(1, 1, 500, 0.75),
(1, 2, 300, 0.75),
(1, 3, 200, 0.75),
(2, 6, 200, 1.25),
(2, 7, 150, 1.25),
(3, 1, 800, 0.70),
(3, 2, 600, 0.70),
(4, 8, 200, 0.85);

-- Quality tests
INSERT INTO quality_tests (batch_id, test_type, test_date, result, score, tester_name) VALUES
(1, 'Color Consistency', '2024-01-15', 'pass', 95.5, 'Quality Team A'),
(1, 'Hardness Test', '2024-01-15', 'pass', 92.0, 'Quality Team A'),
(2, 'Color Consistency', '2024-01-16', 'pass', 97.2, 'Quality Team B'),
(3, 'Color Consistency', '2024-01-17', 'conditional', 88.5, 'Quality Team A'),
(4, 'Hardness Test', '2024-01-18', 'pass', 94.8, 'Quality Team B');

-- Create some indexes for better performance
CREATE INDEX idx_colors_name ON colors(name);
CREATE INDEX idx_products_color ON crayon_products(color_id);
CREATE INDEX idx_batches_product ON production_batches(product_id);
CREATE INDEX idx_orders_customer ON orders(customer_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);
CREATE INDEX idx_quality_tests_batch ON quality_tests(batch_id);

-- Create some views for common queries
CREATE VIEW product_inventory AS
SELECT 
    cp.product_code,
    cp.name,
    c.name as color_name,
    cp.size,
    cp.price,
    COALESCE(SUM(pb.quantity_produced), 0) as total_produced,
    COALESCE(SUM(oi.quantity), 0) as total_sold,
    COALESCE(SUM(pb.quantity_produced), 0) - COALESCE(SUM(oi.quantity), 0) as current_stock
FROM crayon_products cp
LEFT JOIN colors c ON cp.color_id = c.id
LEFT JOIN production_batches pb ON cp.id = pb.product_id
LEFT JOIN order_items oi ON cp.id = oi.product_id
GROUP BY cp.id, cp.product_code, cp.name, c.name, cp.size, cp.price;

CREATE VIEW customer_summary AS
SELECT 
    c.name,
    c.customer_type,
    COUNT(o.id) as total_orders,
    COALESCE(SUM(o.total_amount), 0) as total_spent,
    MAX(o.order_date) as last_order_date
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name, c.customer_type; 