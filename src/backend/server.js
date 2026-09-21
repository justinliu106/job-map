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

async function getCoords(location) {
    try {
        const encodedLocation = encodeURIComponent(location);
        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodedLocation}`);
        const data = await res.json();

        const lat = data[0].lat;
        const lon = data[0].lon;
        const coord = [];
        coord.push(lat, lon);
        return coord
    } catch (error) {
        console.log("Getcoords failed.", error)
    }
}

app.post('/api/jobs', async (req, res) => {
    const { id, title, company, exactLocation, location, salary, url } = req.body;
    const coords = await getCoords(exactLocation);
    const lat = coords[0];
    const lon = coords[1];

    await pool.query(
        `INSERT INTO jobs (id, title, company, exact_location, location, salary, url, latitude, longitude) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (id) DO UPDATE SET 
        exact_location = COALESCE(EXCLUDED.exact_location, jobs.exact_location),
        latitude = COALESCE(EXCLUDED.latitude, jobs.latitude),
        longitude = COALESCE(EXCLUDED.longitude, jobs.longitude)`,
        [id, title, company, exactLocation, location, salary, url, lat, lon]
    );
    res.sendStatus(200);
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});