INSERT INTO products (name, category_id, biller_id, created_at) VALUES( "JAMB", 76, 12, now()), ("JAMB", 76, 6, now()), ("REMITA", 81, 12, now()), ("REMITA", 81, 6, now()), ("BET", 80, 12, now()), ("CARDLESS", 79, 12, now()), ("INSURANCE", 78, 12, now());

INSERT INTO product_categories (name, status, type, created_at) VALUES, ("JAMB", 0, "JAMB", now()), ("LCC", 0, "LCC", now()), ("CARDLESS", 0, "CARDLESS", now()), ("BET", 0, "BET", now()), ("REMITA", 0, "JAMB", now());

INSERT INTO switchers (category_id, biller_id, created_at, name) VALUES (76, 6, NOW(), "JAMB"), (76, 12, NOW(), "JAMB"), (81, 12, NOW(), "REMITA"), (81, 6, NOW(), "REMITA"), (80, 12, now(), "BET"), (79, 12, now(), "CARDLESS"), ( 78, 12, now(), "INSURANCE");