class RickAndMortyChar {
    constructor(name, image, id, status, species, gender, origin, location) {
        this.name = name,
        this.image = image,
        this.id = id,
        this.status = status,
        this.species = species,
        this.gender = gender,
        this.origin = origin,
        this.location = location
    };
};

export const getCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {return response.json()})
    .then((showChars) => {return showChars.results.map(({name, image, id}) => new RickAndMortyChar(name, image, id))})
};

export const getCharCard = (id) => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {return response.json()})
    .then((char) => {return new RickAndMortyChar(
        char.name,
        char.image,
        char.id,
        char.status,
        char.species,
        char.gender,
        char.origin.name,
        char.location.name
    );
    });
};