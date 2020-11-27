export interface UsersState {
  users: User[];
}

export interface User {
  id?: number;
  name?: string;
  password?: string;

  
}

export class UserImpl implements User {
  name?: string;

  constructor() {
    this.name = undefined;
  }
}