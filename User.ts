import People from "./People";

class User extends People {
  id:number;
  username: string;
  password: string;

  constructor(
    name: string, age: number, gender: string,
    username: string, password: string
  ) {
    super(name, age, gender);  
    this.id = (Math.random()*100)
    this.username = username;
    this.password = password;
  }

  profile(){
    return (`
      id:${this.id}
      Username:${this.username}
      Age:${this.age}
      Password:${this.password}
    `)
  }
}
export default User;