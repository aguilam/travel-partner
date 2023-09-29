import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Импортируем пакет cors

const app = express();
const port = 3001;

// Используем cors в качестве промежуточного программного обеспечения
app.use(cors());
app.use('/airport', async (req, res) => {
  try {
    const responses = await fetch('https://api.travelpayouts.com/data/en/airports.json?_gl=1*194196u*_ga*OTg4MDYwMDM1LjE2OTM5MzIyODY.*_ga_1WLL0NEBEH*MTY5NTY0ODMyNC4yMy4xLjE2OTU2NDg3ODUuMTguMC4w');
    const data = await responses.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.use('/city', async (req, res) => {
  try {
    const responses = await fetch('https://api.travelpayouts.com/data/en/cities.json?_gl=1*15htavc*_ga*OTg4MDYwMDM1LjE2OTM5MzIyODY.*_ga_1WLL0NEBEH*MTY5NTgxMTc1Ni4yNC4xLjE2OTU4MTIxODguNTIuMC4w');
    const data = await responses.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.use('/', async (req, res) => {
  try {
    const response = await fetch('https://api.travelpayouts.com/v1/prices/calendar?departure_date=2023-10&origin=MOW&destination=BCN&calendar_type=departure_date&token=b6504ed905463961a565613fecd058df');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

