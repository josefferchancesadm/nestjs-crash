import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/CreateUserTypes';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'joseffer', email: 'joseffer@email.com' }];
  fethUsers() {
    return this.fakeUsers;
  }
  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return;
  }
  fethUserById(id: number) {
    // let userId = this.fakeUsers.find((value) => {
    //   return value.
    // })
    return null;
  }
}
