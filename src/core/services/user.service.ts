import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUser(): IUser {
    return {
      name: 'John Doe',
      role: 'Admin',
      email: 'abc@gmail.com',
    };
  }
}
