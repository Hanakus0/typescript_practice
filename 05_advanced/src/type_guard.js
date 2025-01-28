"use strict";
function toUpperCase(x) {
    if (typeof x === 'string') {
        x.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
    }
    return '';
}
function describeNomadWorkerProfile(nomadWorker) {
    console.log(nomadWorker.name);
    // console.log(nomadWorker.role);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
/////////////////////////////////////////////
class Dog {
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
