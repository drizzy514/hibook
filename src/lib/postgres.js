const { Pool } = require("pg");
const { DB_LINK } = require("../assets/config");
const poll = new Pool({
  connectionString: DB_LINK,
});

module.exports ={
  pg: async (SQL, ...values) => {
    const client = await poll.connect();
    try {
      const data = await client.query(SQL, values);
      return data.rows;
    } catch (error) {
      console.log(error);
    } finally {
      client.release();
    }
  }
} 

