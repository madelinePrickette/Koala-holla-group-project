CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (255) NOT NULL,
	"age" INTEGER,
	"gender" VARCHAR (1),
	"transferStatus" BOOLEAN,
	"notes" VARCHAR (500)
);

INSERT INTO "koalas"
("name", "age", "gender", "transferStatus", "notes")
VALUES
('Scotty', 4, 'M', true, 'Born in Guatemala'),
('Jean', 5, 'F', true, 'Allergic to lots of lava'),
('Ororo', 7, 'F', false, 'Loves listening to Paula (Abdul)'),
('Logan', 15, 'M', false, 'Loves the sauna'),
('Charlie', 9, 'M', true, 'Favorite band is Nirvana'),
('Betsy', 4, 'F', true, 'Has a pet iguana');