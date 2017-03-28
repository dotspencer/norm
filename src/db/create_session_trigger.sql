DELIMITER $$

CREATE TRIGGER expire_sessions
BEFORE INSERT ON Session
FOR EACH ROW
BEGIN
SELECT COUNT(*) INTO @total
FROM Session
WHERE user_id = NEW.user_id;

IF @total > 4 THEN
  DELETE FROM Session
  WHERE created_on IS NOT NULL
  AND user_id = NEW.user_id
  ORDER BY created_on DESC
  LIMIT 1;
END IF;
END;
$$

DELIMITER ;
