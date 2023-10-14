export class BasePokemon {
    name!: string;
    url!: string;

    getImageUrl():string{
        const splittedUrl = this.url.split("/");
        const id = splittedUrl[-1];
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
}
