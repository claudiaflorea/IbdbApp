import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { RoleService } from './role.service';
import { UserAccount } from '../models/userAccount';

@Injectable({
    providedIn: 'root'
  })

export class AuthService {

    loggedIn: any;
    isAdmin: boolean;
    allUsers: any;
    allRoles: any;
    loggedInUser: UserAccount;
    
    constructor() { }

    ngOnInit() {
      
    }

}