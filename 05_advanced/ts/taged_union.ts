class Cat {
  kind: 'cat' = 'cat';
  meow() {
    console.log('meow');
  }
}

class Wolf {
  kind: 'wolf' = 'wolf';
  bark() {
    console.log('bark');
  }
}

type Animal = Cat | Wolf;

function describeProfile(animal: Animal) {
  switch (animal.kind) {
    case 'cat':
      return animal.meow();
    case 'wolf':
      return animal.bark();
  }
}
