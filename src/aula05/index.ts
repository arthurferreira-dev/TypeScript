// Interfaces

interface UserWallet {
    coins?: number;
    credits?: number;
}
interface User {
    name: string,
    createdAt: Date,
    wallet?: UserWallet
}
interface User {
    talk(): void
}

//quando você coloca a '?' ela fica opcional

function createUser(name: string): User {
    return {
         name, createdAt: new Date(),
         talk() {
            console.log('Eu sou', name)
         }
    }
}

function UpdateWallet(user: User, wallet: UserWallet) {
    user.wallet = { ...user.wallet, ...wallet }
}

const me = createUser("Arthur");

UpdateWallet(me, { credits: 10 })