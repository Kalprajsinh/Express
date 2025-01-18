import { Client } from 'pg';

// Connection configuration
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Mydatabase', // Default database name in Docker
  password: 'admin', // Your PostgreSQL password
  port: 5432,
});

// Connect to PostgreSQL
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

// Function to create user table
async function createUserTable() {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS usersdatatable (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('User table created successfully');
  } catch (err) {
    console.error('Error creating user table', err);
  } finally {
    await client.end(); // Close the connection
    console.log('Disconnected from PostgreSQL');
  }
}

// Call the function to create the user table
// createUserTable();

export { client };