const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    // list of pokémon that have names that start with the letter "B" by using the following code.
    const Bpokemon=pokemon.filter(p=>p.name[0]=="B")
    console.log(Bpokemon);
    // return an array of just the ids
    const ids=pokemon.map(p=>p.id)
    console.log(ids)
    //an array of pokémon objects where the id is evenly divisible by 3
    const divThree=pokemon.filter(p=>p.id %3===0)
    console.log(divThree)
    //an array of pokémon objects that are "fire" type
    const fire=pokemon.filter(p=>p.types.includes("fire"))
    console.log(fire)
    //an array of pokémon objects that have more than one type
    const moreThanMoreType=pokemon.filter(p=>p.types.length>1)
    console.log(moreThanMoreType)
    //an array with just the names of pokémon with an id greater than 99
    const names=pokemon.filter(p=>p.id>99).map(p=>p.name)
    console.log(names);
    //An array with just the names of the Pokémon whose only type is poison:
    const typeFish=pokemon.filter(p=>p.types.length===1 && p.types.includes("poison")).map(p=>p.name)
    console.log(typeFish)
    //an array containing just the first type of all the pokémon whose second type is "flying"
    const secondType=pokemon.filter(p=>p.types[1]==="flying").map(p=>p.types[0])
    console.log(secondType)
    //a count of the number of pokémon that are "normal" type
    const normal=pokemon.filter(p=>p.types.includes("normal"))
    console.log(normal.length)