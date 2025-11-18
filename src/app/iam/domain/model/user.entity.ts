import {BaseEntity} from '../../../shared/domain/model/base-entity';

export class User implements BaseEntity {
  set username(value: string) {
    this._username = value;
  }
  set id(value: number) {
    this._id = value;
  }
  get username(): string {
    return this._username;
  }
  get id(): number {
    return this._id;
  }
  private _id: number;
  private _username: string;

  constructor(user:{id: number, username: string}) {
    this._id = user.id;
    this._username = user.username;
  }
}
