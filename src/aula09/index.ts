// Type intersections ou '&'

import { error } from "console";

interface Robot {
    material: string,
    fuel: string
}

interface Human {
    name: string,
    age: number | string
}

type Cyborg = Robot & Human; // um type intersections

const cyborg: Cyborg = {
    name: "José",
    age: 27 + "anos",
    fuel: "Esgotado",
    material: "Ferro e Aço"
}

//

interface MyFecthConfig {
    printInput?: boolean,
    printTime: boolean
}

type RequestOpt = MyFecthConfig & RequestInit
export function myFecth(input: string, options?: RequestOpt) {
    if (options?.printInput) {
        console.log("Input", input)
    }
    if (options?.printTime) {
        console.log("Tempo", new Date().toDateString)
    }
    return fetch(input, options)
}

myFecth("htpp://localhost/PHP-Moderno", {
    printTime: true
})

//

type Errors = string & number & boolean

// --!-- const errorBesta: Errors = void --!--