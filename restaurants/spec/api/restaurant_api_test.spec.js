var Restaurant = require("../../models/restaurant");
var request = require("request");
var server = require("../../bin/www")

describe("GET Restaurant API", () => {
    describe("GET Restaurants /", () => {
        it("Status 204", () => {
            expect(Restaurant.allRest.length).toBe(0);
            var a = new Restaurant(2, 'Tacos don sucio', 'Disfruta de los mejore s tacos', [19.29940, -99.22254]);

            Restaurant.add(a);
            request.get("http://localhost:3000/api/restaurants", function (error, response, body) {
                expect(response.statusCode).toBe(200);
            })
        })
    })
    describe("GET Restaurants /", () => {
        it('Status 200', (done) => {
            var headers = { 'content-type': 'application/json' };
            var a = '{"id": 2, "name": "Tacos don sucio", "description": "Disfruta de los mejores tacos", "lat": 19.29940, "lng": -99.22254}';
            request.post({
                headers: headers,
                url: 'http://localhost:3000/api/restaurants/create',
                body: a
            }, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                expect(Restaurant.findById(2).name).toBe('Tacos don sucio');
                done();
            });
        });
    })
})


