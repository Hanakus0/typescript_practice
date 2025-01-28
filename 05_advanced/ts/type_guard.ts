function toUpperCase(x: string | number){
  if (typeof x === 'string') {
    x.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number'.
  }
  return '';
}

/////////////////////////////////////////////
interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

type NomadWorker = Engineer | Blogger;

function describeNomadWorkerProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  // console.log(nomadWorker.role);
  if('role' in nomadWorker){
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

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if(pet instanceof Bird){
    pet.fly();
  }
}
