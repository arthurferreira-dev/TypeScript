// Enums | Enumaration que é Enumaração

/*
        N(1)
    O(3)    L(4)
        S(2)
*/

enum Direc {
    Norte=1,
    Sul,
    Oeste,
    Leste
}

const pos = {
    x: 530,
    y: 125,
    direction: Direc.Sul
}

//

enum TamanhoCamisa {
    ExtraPequeno = "Tamanho PP",
    Pequenho = "Tamanho P",
    Medio = "Tamanho M",
    Largo = "Tamanho G",
    Extralargo = "Tamanho GG"
}

enum CoresCamisa {
    Verde = "verde",
    Amarelo = "amarelo",
    Vermelho = "vermelho",
    Azul = "azul"
}

const camisetaConfig = {
    cor: CoresCamisa.Verde,
    tamanho: TamanhoCamisa.Largo
}

//

enum EstiloBotao {
    Verde,
    Azul,
    Vermelho,
    Cinza
}
interface Botao {
    label: string,
    emoji: string,
    style: EstiloBotao
}

const botao: Botao = {
    label: "Clique em mim!",
    emoji: "💡",
    style: EstiloBotao.Vermelho
}