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
        console.log("get coords called")
        const encodedLocation = encodeURIComponent(location);
        const res = await fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${encodedLocation}&access_token=${process.env.MAPBOX_TOKEN}`);
        const data = await res.json();

        if (!data || data.length === 0) return null;

        const [lon, lat] = data.features[0].geometry.coordinates;
        return [lat, lon];
    } catch (error) {
        console.log("Getcoords failed.", error)
        return null
    }
}

app.post('/api/jobs', async (req, res) => {
    const { id, title, company, exactLocation, location, salary, url } = req.body;
    let lat = null;
    let lon = null;

    if (exactLocation) {
        const coords = await getCoords(exactLocation);
        if (coords) {
            lat = coords[0];
            lon = coords[1];
        }
    }

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