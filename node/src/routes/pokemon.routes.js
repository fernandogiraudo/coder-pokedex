import { Router } from "express";
import { pokemonModel } from "../models/pokemon.model.js";

const pokemonRoutes = Router();

pokemonRoutes.get('/all', async (req, res) => {
    try {
        const pokemons = await pokemonModel.find();
        return res.send(pokemons);
    } catch (error) {
        return res.status(400).send({error});
    }
});

pokemonRoutes.get('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const pokemon = await pokemonModel.findOne({pokemonId: id});
        if(!pokemon){
            return res.status(404).send({message: 'Pokemon not found'});
        }
        res.send({pokemon});
    } catch (error) {
        return res.status(400).send({error});
    }
});

export default pokemonRoutes;