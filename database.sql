CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    interest VARCHAR(50) NOT NULL,
    schedule VARCHAR(20) NOT NULL,
    suggestions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for promotional ads
CREATE TABLE IF NOT EXISTS ads (
    id VARCHAR(255) PRIMARY KEY,
    image MEDIUMTEXT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    ctaText VARCHAR(255),
    ctaLink VARCHAR(255),
    isActive BOOLEAN DEFAULT TRUE,
    createdAt BIGINT NOT NULL
);
