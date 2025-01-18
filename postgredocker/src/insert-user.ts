import { client } from ".";

async function insertData() {
    try {
      // Insert queries
      await client.query('INSERT INTO usersdatatable (username, email, password) VALUES ($1, $2, $3)', ['john_doe', 'john.doe@example.com','123']);
      await client.query('INSERT INTO usersdatatable (username, email, password) VALUES ($1, $2, $3)', ['jane_smith', 'jane.smith@example.com','abc']);
  
      console.log('Data inserted successfully');
    } catch (err) {
      console.error('Error inserting data', err);
    } finally {
      // Close the client connection
      await client.end();
      console.log('Disconnected from PostgreSQL');
    }
  }
  
  // Call the insertData function to execute the insert queries
  insertData();