import express from 'express';
import mongoose from 'mongoose';
import pokemonRoutes from './routes/pokemon.routes.js';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/pokemon', pokemonRoutes);

mongoose.connect('mongodb+srv://fergiraudo91:Luna.2024@coder.3hytpje.mongodb.net/coder');

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});