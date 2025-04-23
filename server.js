const express = require('express');
const dotenv = require('dotenv');
const chatbotRoutes = require('./routes/chatbotRoutes');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors({}))
app.use(express.json());

app.use('/api', chatbotRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
