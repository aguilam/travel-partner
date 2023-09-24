import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Импортируем пакет cors

const app = express();
const port = 3001;

// Используем cors в качестве промежуточного программного обеспечения
app.use(cors());

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

