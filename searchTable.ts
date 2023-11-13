import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://todo-app-jcuadrado101.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTExLTExVDAyOjQ4OjMxLjExOTg1MzQ1N1oiLCJpZCI6IjM2ZWYyZjg0LTgwMzktMTFlZS1hODU3LTdhMzYyOTEzNjhlMiJ9.koz_M6aBvde8eaSBysvK8AGuNAMROo-QkACuvMclZhCLrhELSLyH75F82PCWebFekF_O7tCSIHzKfAXYnw-GBg"
});

async function fetchData() {
    try {
        const searched = await client.execute(`
            SELECT * FROM Users
        `);

        console.log(searched);

        await client.sync();
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the fetchData function
fetchData();