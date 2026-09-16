const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db.js');
app.use(express.json());
app.use(cors());

app.get('/api/jobs', async (req, res) => {
    const result = await pool.query('SELECT * FROM jobs');
    res.json(result.rows)
})

app.post('/api/jobs', async (req, res) => {
    const { id, title, company, exactLocation, location, salary, url } = req.body;

    await pool.query(
        `INSERT INTO jobs (id, title, company, exact_location, location, salary, url) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id) DO UPDATE SET 
        exact_location = COALESCE(EXCLUDED.exact_location, jobs.exact_location)`,
        [id, title, company, exactLocation, location, salary, url]
    );
    res.sendStatus(200);
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});