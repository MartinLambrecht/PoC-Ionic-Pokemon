import { BasePokemon } from "./base-pokemon.model"

export default class PokemonListResponse {
    count!:number
    next?:string
    previous?:string
    results!:BasePokemon[]
}
