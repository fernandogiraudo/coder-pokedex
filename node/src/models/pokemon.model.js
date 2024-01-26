import mongoose from "mongoose";

const pokemonCollection = 'pokemons';

const pokemonSchema = mongoose.Schema({
    pokemonId: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    abilities: [],
    types: [],
    frontImg: {
        type: String,
        required: true
    }
});

export const pokemonModel = mongoose.model(pokemonCollection, pokemonSchema);