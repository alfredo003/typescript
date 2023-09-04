
class People {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  myData() {
    return (`
    Name:${this.name}
    Age:${this.age}
    Gender:${this.gender}
    `)
  }

}
export default People;