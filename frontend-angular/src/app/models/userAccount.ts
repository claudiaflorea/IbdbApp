import { Role } from './role';

export class UserAccount {
    id: string;
    email: string;
    lastName: string;
    firstName: string;
    gender: string;
    username: string;
    password: string;
    birthDate: Date;
    role: Role;

    /*constructor(
        id: string,
        email: string,
        lastName: string,
        firstName: string,
        gender: string,
        username: string,
        password: string,
        birthDate: Date,
        role: Role
    ) { 
        this.id = id; 
        this.email= email;
        this.lastName= lastName;
        this.firstName= firstName;
        this.gender= gender;
        this.username= username;
        this.password= password;
        this.birthDate= birthDate;
        this.role= role;
    }*/
}
