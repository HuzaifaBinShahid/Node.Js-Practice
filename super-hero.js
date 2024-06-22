
// Creating class for understanding caching in modules in js

class SuperHero {
    constructor(name){
        return this.name = name;
    }

    getName(name){
        return this.name
    }

    setName(name){
        return this.name = name;
    }
}

module.exports = SuperHero;