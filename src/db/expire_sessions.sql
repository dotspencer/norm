DELETE FROM Session
WHERE sid NOT IN (
  SELECT sid
  FROM (
    SELECT sid
    FROM Session
    WHERE user_id = ?
    ORDER BY created_on DESC
    LIMIT 4
  ) t
) AND user_id = ?;
