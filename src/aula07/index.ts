// Tuplas

type Listinha = string[] // Isso é um array

type Calendario = [day: number, mounth: number, year: number] // Isso é uma tupla

const lista: Listinha = []
lista.push("R")

const data: Calendario = [21, 10, 2025]

function criadorData(...data: Calendario) {
    const [day, month, year] = data
}

criadorData(30, 12, 2025)