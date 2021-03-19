import {damage, Dragon, freshDragon} from "./dragons";


let dragon900 = {hitpoints: 900, alive: true}
let dragon100 = {hitpoints: 900, alive: true}

describe("Dragon", () => {
    it("should start with 1000 hp and alive", () => {
        expect(freshDragon.alive).toBe(true);
        expect(freshDragon.health).toBe(1000);
    })

    it("should take damage and not die if the accumulated damage < 1000", () => {
        expect(damage(freshDragon, 100)).toEqual(dragon900)
        expect(damage(freshDragon, 900)).toEqual(dragon100)
    })



})

