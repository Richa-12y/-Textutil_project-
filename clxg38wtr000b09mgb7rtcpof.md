---
title: "SQL Simplified: Quick Reference Guide for Coding and Interviews"
seoDescription: "Check out my latest blog post on richak.hashnode.dev! It's an essential SQL Cheat Sheet covering all the basics, perfect for beginners and interview prep."
datePublished: Sat Jun 15 2024 12:22:56 GMT+0000 (Coordinated Universal Time)
cuid: clxg38wtr000b09mgb7rtcpof
slug: sql-simplified-quick-reference-guide-for-coding-and-interviews
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1718453827603/0f9f8a06-91da-47e6-a11b-c0b5504251a8.jpeg
tags: sql-server, web-development, databases, webdev, sql, learning-journey, sqltutorial

---

**Hi Coders!🐱‍💻**

![Marsai Martin Heyyy GIF by BET Awards](https://media1.giphy.com/media/6yG9sQwdsGVxZ3bgMw/200.gif?cid=790b7611yaame7fm4t41dw6l9p1tpt9vf9vhxyvhg77ryxzh&ep=v1_gifs_search&rid=200.gif&ct=g align="left")

**Richa** here again, coming with a new topic to learn - **<mark>SQL</mark>**! **Whether you're just starting out or prepping for an interview, this SQL cheat sheet will be your best friend.** It doesn't delve into the nitty-gritty details, but it covers essential SQL commands you need to know. For more in-depth learning and practice, check out these great resources:

* [W3Schools SQL Tutorial](https://www.w3schools.com/sql/default.asp)
    
* [SQLZoo](https://sqlzoo.net/wiki/SQL_Tutorial)
    

Now, let's dive into the basics!

![Meme gif. The "Pointing Rick Dalton" meme. In a scene from Once Upon a Time in Hollywood, Leonardo DiCaprio as Rick Dalton sits up from an armchair and points intently out of frame.](https://media4.giphy.com/media/kd9BlRovbPOykLBMqX/giphy.gif?cid=ecf05e4744jcm3vo3tu5tn5gvqgn1mdombbjfk2f5hn6hib2&ep=v1_gifs_search&rid=giphy.gif&ct=g align="center")

---

# Basic Queries & Operators

### **<mark>Selecting Data</mark>**

```sql
SELECT column1, column2 FROM table;
-- Query data in columns column1, column2 from a table.
```

```sql
SELECT * FROM table;
-- Query all rows and columns from a table.
```

```sql
SELECT column1, column2 FROM table WHERE condition;
-- Query data and filter rows using a boolean condition: =, <, <=, >, >=, <>.
```

```sql
SELECT column1, column2 FROM table1 WHERE column1 [NOT] LIKE pattern;
-- Query rows using pattern matching. Use with % or _.
```

```sql
SELECT column1, column2 FROM table WHERE column1 [NOT] IN (value1, value2, ...);
-- Filters rows with values equal to those in the value_list.
```

```sql
SELECT column1, column2 FROM table WHERE column1 BETWEEN limit1 AND limit2;
-- Filters rows with values between the two limits.
```

```sql
SELECT column1, column2 FROM table WHERE column1 IS [NOT] NULL;
-- Filters NULL values.
```

```sql
SELECT DISTINCT column1 FROM table WHERE condition;
-- Returns distinct rows from a table.
```

```sql
SELECT column1, column2 FROM table WHERE rownum < n;
-- Returns the first n rows.
```

![Panchayat Season 3 | Amazon Prime Web Series Panchayat 3 Release Update |  पंचायत वेबसीरीज का सीजन 3 रिलीज हुआ: जानें कौन बन सकता है पंचायत सचिव;  जरूरी एलिजिबिलिटी, एग्‍जाम और ...](https://images.bhaskarassets.com/web2images/521/2024/05/28/educare1_1716898060.gif align="center")

---

# JOINs

```sql
SELECT column1, column2 FROM table1 INNER JOIN table2 ON condition;
-- Inner join table1 and table2.
```

```sql
SELECT column1, column2 FROM table1 LEFT JOIN table2 ON condition;
-- Left join table1 and table2.
```

```sql
SELECT column1, column2 FROM table1 RIGHT JOIN table2 ON condition;
-- Right join table1 and table2.
```

```sql
SELECT column1, column2 FROM table1 FULL OUTER JOIN table2 ON condition;
-- Full outer join table1 and table2.
```

```sql
SELECT column1, column2 FROM table1 CROSS JOIN table2;
-- Cross join table1 and table2 (Cartesian product).
```

```sql
SELECT column1, column2 FROM table1 A INNER JOIN table1 B ON condition;
-- Self join table1 to itself using INNER JOIN.
```

![role playing yes GIF by Hyper RPG](https://media2.giphy.com/media/2uxrhDygFo5cdUalEJ/200w.gif?cid=ecf05e47vld7wnp92d88ekyg7kys8ye8ex0pla5vlewditn1&ep=v1_gifs_related&rid=200w.gif&ct=g align="center")

---

# Order, Group, Aggregate

```sql
SELECT column1, column2 FROM table ORDER BY column1 [ASC|DESC];
-- Sorts the results in ascending or descending order.
```

```sql
SELECT column1, aggregate_function(column2) FROM table GROUP BY column1;
-- Groups rows using an aggregate function.
```

```sql
SELECT column1, aggregate_function(column2) FROM table GROUP BY column1 HAVING condition;
-- Filter groups using HAVING operator.
```

![Schitts Creek Comedy GIF by CBC](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVzZG0wbDZtc3VvZHlsdndtZTdmNTd0bWJteWt0em5wejVwM3FibiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SRNznqRpllRby1xeLa/giphy.gif align="center")

### <mark>Aggregate Functions:</mark>

* `AVG(column)` - Returns the average of a list.
    
* `COUNT(column)` - Returns the number of elements.
    
* `SUM(column)` - Returns the total.
    
* `MAX(column)` - Returns the maximum value.
    
* `MIN(column)` - Returns the minimum value.
    

---

# Data Definition Language (DDL)

```sql
CREATE TABLE table_name(
 id NUMBER PRIMARY KEY,
 column_name1 VARCHAR2 NOT NULL,
 column_name2 DATE
);
-- Creates a new table with three columns.
```

```sql
DROP TABLE table_name;
-- Deletes table from the database.
```

```sql
ALTER TABLE table_name ADD column_name datatype;
-- Adds a new column to the table.
```

```sql
ALTER TABLE table_name RENAME column_name1 TO column_name2;
-- Renames column column_name1 to column_name2.
```

```sql
ALTER TABLE table_name DROP COLUMN column_name;
-- Removes column from the table.
```

```sql
ALTER TABLE old_table_name RENAME TO new_table_name;
-- Renames a table.
```

```sql
TRUNCATE TABLE table_name;
-- Removes all data in a table.
```

![GIF by Alia Bhatt](https://media4.giphy.com/media/TdRvFZg5fVm5J84W5D/giphy.webp align="center")

---

# Data Manipulation Language (DML)

```sql
INSERT INTO table_name (column_list) VALUES (value_list);
-- Inserts one record into a table.
```

```sql
INSERT INTO table1 (column_list) SELECT column_list FROM table2;
-- Inserts rows from table2 into table1. Columns types must match!
```

```sql
UPDATE table SET column1 = new_value, column2 = new_value;
-- Updates values in columns for all rows.
```

```sql
UPDATE table SET column1 = new_value, column2 = new_value WHERE condition;
-- Updates values in columns that match the condition.
```

```sql
DELETE FROM table_name;
-- Deletes all data in a table.
```

```sql
DELETE FROM table_name WHERE condition;
-- Deletes rows that match the condition.
```

![Binod GIF by The Viral Fever](https://media2.giphy.com/media/ftejgUpV7vr4q8Y5uz/200.gif?cid=6c09b952lchkhbt8eqq49gnsu5g8jtg9jt7afnb4x87cnlma&ep=v1_internal_gif_by_id&rid=200.gif&ct=g align="center")

---

# Constraints, Views, Triggers

### **<mark>Constraints</mark>**

```sql
CREATE TABLE table1 (
 col1 NUMBER PRIMARY KEY,
 col2 NUMBER NOT NULL,
 FOREIGN KEY (col2) REFERENCES table2(col2),
 col3 NUMBER,
 UNIQUE (col3),
 CHECK (col3 > 0 AND col3 >= col2)
);
-- Defines various constraints on table columns.
```

### **<mark>Views</mark>**

```sql
CREATE [TEMPORARY] VIEW view_name (col1, col2) AS
SELECT col1, col2 FROM table;
-- Creates a new view consisting of two columns from a table.
```

```sql
DROP VIEW view_name;
-- Deletes the view.
```

### <mark>Triggers</mark>

```sql
CREATE [OR ALTER] TRIGGER trigger_name
BEFORE [OR AFTER] EVENT
ON table_name FOR EACH ROW [OR STATEMENT]
BEGIN
 -- Trigger logic here
END;
-- Creates or modifies a trigger.
-- EVENT values: INSERT, UPDATE, DELETE
```

```sql
DROP TRIGGER trigger_name;
-- Deletes a trigger.
```

![25 Viral Meme Templates From Panchayat Season 2 on Amazon Prime](https://www.scrolldroll.com/wp-content/uploads/2022/05/bharosa-rakhiye-purane-khiladi-hai-Panchayat-meme-templates.jpeg align="center")

---

# **🎯 Wrap Up!!**

**Remember, this is just a cheat sheet to get you started**. For detailed explanations and more examples, make sure to check the resources mentioned above. **Happy coding!**

**If you have any questions or suggestions, please leave a comment below.**

![Korean Drama Fighting GIF by The Swoon](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3N5aTRiaHAzODFqZmQ0bTc3OW91OGw4bzJtNDB2YTVpZDduN28zYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Uk7kn3MJXuAyOGpLAu/giphy.gif align="center")