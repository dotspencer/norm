CREATE TABLE Session (
  sid VARCHAR(80) NOT NULL PRIMARY KEY,
  user_id MEDIUMINT UNSIGNED NOT NULL,
  created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE ON UPDATE CASCADE
);
