CREATE TABLE IF NOT EXISTS Users (
  id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(120) NOT NULL UNIQUE,
  name VARCHAR(60) NOT NULL,
  hash VARCHAR(60) NOT NULL,
  token VARCHAR(60) NOT NULL,
  verified BOOL NOT NULL DEFAULT 0,
  admin BOOL NOT NULL DEFAULT 0,
  google_place_id VARCHAR(60)
);
