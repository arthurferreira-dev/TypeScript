// Types

// || no Javascript é 'ou'
// | no TypeScript é 'ou'
// && no Javascript é o 'e'
// & np TypeScript é o 'e'

// [] é uma array

interface Dog {
    name: string,
    especie: string,
    bark(): string
}

interface Cat {
    name: string,
    especie: string,
    meow(): string
}

type Animal = Dog | Cat | { // Sheep
    name: string,
    especie: string,
    beep(): string
}

function createAnimal(animal: Animal) {
}

createAnimal({
    name: "Gregorio",
    especie: "Husky Suberiano",
    meow() {
        return "Miado"
    },
})

//

type UserWallet = {
    grana?: number,
    creditos?: number
}

type User = {
    nome: string,
    createdAt: Date,
    wallet?: UserWallet
}

type ADM = User & {
    ban(user: User): void,
    kick(user: User): void
}