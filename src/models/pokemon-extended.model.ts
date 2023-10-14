export class PokemonExtended {
    id!: number;
    name!: string;
    height!: number;
    weight!: number;
    sprites!: {
        back_default: string, 
        front_default: string
    }
    types!: { 
        type: { 
            name: string, 
            url: string 
        },
        slot:number
    }[]
    abilities!:{ability:{name:string, url:string}}[]

    constructor() { }
}
