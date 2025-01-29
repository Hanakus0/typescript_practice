"use strict";
class Cat {
    constructor() {
        this.kind = 'cat';
    }
    meow() {
        console.log('meow');
    }
}
class Wolf {
    constructor() {
        this.kind = 'wolf';
    }
    bark() {
        console.log('bark');
    }
}
function describeProfile(animal) {
    switch (animal.kind) {
        case 'cat':
            return animal.meow();
        case 'wolf':
            return animal.bark();
    }
}
