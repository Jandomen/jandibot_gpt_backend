const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const chat = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    console.error('Mensaje no proporcionado');
    return res.status(400).send('El mensaje es requerido');
  }

  try {
    const response = await axios.post('https://api-inference.huggingface.co/models/google/flan-t5-base', {
      inputs: message,
    }, {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      },
    });
    console.log('Respuesta de Hugging Face:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error al interactuar con la API de Hugging Face:', error);
    res.status(500).send('Error al comunicar con Hugging Face');
  }
};

module.exports = { chat };
