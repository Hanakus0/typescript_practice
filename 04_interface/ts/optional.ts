type OptionalNameable = {
  name: string;
  nickName?: string;
}

const obj: OptionalNameable = { 
  name: 'Jack',
  nickName: 'Jacky',
}

const namable: OptionalNameable = {
  name: 'Jack',
  // nickName: 'JJJ',
}

interface NamableInterface extends OptionalNameable {
  // name: string; がある
  age: number,
  greet?(message: string): void;
}

const namableObj: NamableInterface  = {
  name: 'Jack',
  age: 25,
  greet(message: string = 'Hello!!') {
    console.log(message);
  }
}

class OptionalDeveloper implements NamableInterface {
  constructor(public name: string, public age: number, public experience: number, public initName?: string) {
  }

  greet(message: string = 'Hello!!') {
    console.log(message);
  }
}

////////////////////////////////////////////
interface AndInterface {
  name: string | undefined;
  nickname?: string | undefined;
} 

const sampleObj: AndInterface = {
  // name: undefined,   //=> エラー
  // nickname: 'Jacky', //=> OK
}
