import express from 'express';
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('🔷 Trainya App 🔷');
});

app.listen(PORT, () => console.log('🔥 Server Running! 🔥'));
