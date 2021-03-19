export interface Dragon {
    health: number
    alive: boolean
}

export let freshDragon: Dragon = {health: 1000, alive: true}
export function damage(dragon: Dragon, hp: number): Dragon {
    //your code goes here
    return dragon
}


