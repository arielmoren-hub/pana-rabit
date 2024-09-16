export interface Alpargata {
    id?: string
    size: number
    colors: {
        red: number
        green: number
        black: number
        white: number
        blackRed: number
        hawaiana: number
        love: number
    }
}


export const defaultAlpargata: Alpargata = {
    size: 40,
    colors: {
        red: 0,
        green: 0,
        black: 0,
        white: 0,
        blackRed: 0,
        hawaiana: 0,
        love: 0,
    }
};
