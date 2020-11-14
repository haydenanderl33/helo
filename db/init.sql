CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic TEXT
)

INSERT INTO users
(username, password, profile_pic)
VALUES
('Joji345', 'joj123', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVTSvE-z-w1NeqcyaGvPi_TaTLsHAVk30CYg&usqp=CAU' )