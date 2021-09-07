var Restaurant = function (id, name, description, location) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
}

Restaurant.prototype.toString = function(){
    return `id: ${this.id} name: ${this.name} location: ${this.location} `; 
}

Restaurant.allRest = [];
Restaurant.add = function (aRest) {
    Restaurant.allRest.push(aRest);
}

Restaurant.findById = function (aRestId) {
    var aRest = Restaurant.allRest.find(x => x.id == aRestId);
    if (aRest) {
        return aRest    
    } else {
        throw new Error(`No exite una bicicleta con el id ${aRestId}`);
    }
}

Restaurant.removeById = function (aRestId) {
    for (var i = 0; i < Restaurant.allRest.length; i++) {
        if (Restaurant.allRest[i].id == aRestId) {
            Restaurant.allRest.splice(i,1);
            break;
        }
    }
}

var a = new Restaurant (1, 'Los comalitos', 'Ven y diviertete en familia', [19.29788,-99.22555]);
var b = new Restaurant (2, 'Tacos don sucio', 'Disfruta de los mejore s tacos', [19.29940,-99.22254]);

Restaurant.add(a);
Restaurant.add(b);

module.exports = Restaurant;