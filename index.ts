import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://todo-app-jcuadrado101.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTExLTExVDAyOjQ4OjMxLjExOTg1MzQ1N1oiLCJpZCI6IjM2ZWYyZjg0LTgwMzktMTFlZS1hODU3LTdhMzYyOTEzNjhlMiJ9.koz_M6aBvde8eaSBysvK8AGuNAMROo-QkACuvMclZhCLrhELSLyH75F82PCWebFekF_O7tCSIHzKfAXYnw-GBg"
});

    client.execute(`
        CREATE TABLE Users (
             user_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
             username VARCHAR(255) NOT NULL,
             password VARCHAR(255) NOT NULL
        );
    `)

    client.execute(`
        CREATE TABLE Tasks (
            task_id INT PRIMARY KEY,
            user_id INT,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            due_date DATE,
            completed BOOLEAN DEFAULT false,
            FOREIGN KEY (user_id) REFERENCES Users(user_id)
        );
    `)


await client.sync();
