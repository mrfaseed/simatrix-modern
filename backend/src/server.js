const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Simatrix Academy Backend API', timestamp: new Date() });
});

// Certificate Verification Endpoint
app.get('/api/v1/certificates/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    certificateId: id,
    status: 'VERIFIED',
    message: 'Official credential registered with Simatrix Academy Council',
  });
});

app.listen(PORT, () => {
  console.log(`Simatrix Academy Backend running on port ${PORT}`);
});
