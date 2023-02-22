import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    return 'Hello World!';
  }

  signin() {
    return { msg: 'I have signed in' };
  }

  signup() {
    return { msg: 'I have signed up' };
  }
}
