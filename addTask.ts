import { createClient } from "@libsql/client";
import { fetchData } from './random';

const client = createClient({
    url: "libsql://todo-app-jcuadrado101.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTExLTExVDAyOjQ4OjMxLjExOTg1MzQ1N1oiLCJpZCI6IjM2ZWYyZjg0LTgwMzktMTFlZS1hODU3LTdhMzYyOTEzNjhlMiJ9.koz_M6aBvde8eaSBysvK8AGuNAMROo-QkACuvMclZhCLrhELSLyH75F82PCWebFekF_O7tCSIHzKfAXYnw-GBg"
});

try {
    const uniqueRow = await fetchData();
    
    const result = await client.execute(`
        INSERT INTO Tasks (user_id, title, description, due_date, completed)
        VALUES (${uniqueRow.rows[0].rowid}, "This is a Title", "This is a description", "11/11/2022", false)
    `);

    // Sync the changes
    await client.sync();

    // Log the result after both execute and sync operations
    console.log(result);
} catch (error) {
    // Handle any errors that occurred during execution or sync
    console.error("Error:", error);
}
