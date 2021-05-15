export class User {
    user_id: number;
    user_name: string;
    email: string;
    gender:string;
    location:string;

    constructor(user_id: number, user_name: string, email: string,gender:string,location:string) {
      this.user_id = user_id;
      this.user_name = user_name;
      this.email = email;
      this.gender=gender;
      this.location=location;

    }
  
   
  }
  