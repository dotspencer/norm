CREATE TABLE IF NOT EXISTS user (
  id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(120) NOT NULL UNIQUE,
  name VARCHAR(60) NOT NULL,
  hash VARCHAR(60) NOT NULL,
  verified BOOL NOT NULL DEFAULT 0,
  admin BOOL NOT NULL DEFAULT 0);
