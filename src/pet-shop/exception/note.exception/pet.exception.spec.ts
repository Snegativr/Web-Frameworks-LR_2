import { PetsException } from './pet.exception';

describe('PetsException', () => {
  it('should be defined', () => {
    expect(new PetsException()).toBeDefined();
  });
});
