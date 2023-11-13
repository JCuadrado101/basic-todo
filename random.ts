import { createClient } from "@libsql/client";

const client = createClient({
    url: "libsql://todo-app-jcuadrado101.turso.io",
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTExLTExVDAyOjQ4OjMxLjExOTg1MzQ1N1oiLCJpZCI6IjM2ZWYyZjg0LTgwMzktMTFlZS1hODU3LTdhMzYyOTEzNjhlMiJ9.koz_M6aBvde8eaSBysvK8AGuNAMROo-QkACuvMclZhCLrhELSLyH75F82PCWebFekF_O7tCSIHzKfAXYnw-GBg"
});

async function fetchData() {
    try {
        const result = await client.execute(`
            SELECT rowid from Users
        `);

        await client.sync();
        return result;
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}

export { fetchData };
