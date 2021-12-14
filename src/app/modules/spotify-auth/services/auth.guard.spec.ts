import { AuthGuard } from './auth.guard';

describe('Auth', () => {
  it('should create an instance', () => {
    expect(new AuthGuard()).toBeTruthy();
  });
});
