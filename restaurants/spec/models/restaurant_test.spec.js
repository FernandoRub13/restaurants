var Restaurant = require("../../models/restaurant");

beforeEach(()=> { Restaurant.allRest= [] }) ;

describe("Restaurant.allRest", () => {
    it("Comienza vacío", () => {
        expect(Restaurant.allRest.length).toBe(0);
    })
})
describe("Restaurant.add", () => {
    it("Agregamos un restaurante", () => {
        expect(Restaurant.allRest.length).toBe(0);

        var a = new Restaurant(1, 'Los comalitos', 'Ven y diviertete en familia', [19.29788, -99.22555]);
        Restaurant.add(a);

        expect(Restaurant.allRest.length).toBe(1);
        expect(Restaurant.allRest[0]).toBe(a);
    })
})
describe("Restaurant.findById", () => {
    it("Buscamos un restaurante por id", () => {
        expect(Restaurant.allRest.length).toBe(0);

        var a = new Restaurant(1, 'Los comalitos', 'Ven y diviertete en familia', [19.29788, -99.22555]);
        var b = new Restaurant(2, 'Tacos don sucio', 'Disfruta de los mejore s tacos', [19.29940, -99.22254]);
        Restaurant.add(a);
        Restaurant.add(b);

        var target = Restaurant.findById(1);
    
        expect(target.id).toBe(a.id);
        expect(target.name).toBe(a.name);
        expect(target.description).toBe(a.description);
    })
})