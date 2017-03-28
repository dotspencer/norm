DELETE FROM Session
WHERE sid NOT IN (
  SELECT sid
  FROM (
    SELECT sid
    FROM Session
    WHERE sid = ?
    ORDER BY created_on DESC
    LIMIT 4

  ) t
);
