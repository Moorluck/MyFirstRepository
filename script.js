function multiplierPar2(x) {
    return x * 2
}

const multiplierPar3 = x => x * 3

const salameche = {
    nom: "Salameche", 
    type: "Feu",
    level: 12
}

// Destructuring

// Objet

// const nom = salameche.nom
// const type = salameche.type
// const level = salameche.level
const { type, nom } = salameche

console.log(nom)

// Tableau

const tab = [1, 2, 3, 4]

const copyTab = [...tab]

// const a = 1
// const b = 2
// const c = 3
const [a, b, c] = tab

// Rest

const additionner = (...nbrs) => {
    console.log(nbrs)
    let result = 0
    for (nb of nbrs) {
        result += nb
    }
    return result
}

console.log(additionner(4, 5,8, 1))

// Filter
// 1, 2, 3, 4

const tabFilter = tab.filter(
    (elem) => elem % 2 === 1 && elem % 3 !== 0
)

console.log(tabFilter)

// Map

const pokemons = ["Salameche", "Bulbizarre", "Carapuce"]

const pokemonsMap = pokemons.map(
    (pokemon, indice) => {
        if (indice !== 0) {
            return "Pokemon " + pokemon
        }
        return pokemon
    }
)

console.log(pokemonsMap)