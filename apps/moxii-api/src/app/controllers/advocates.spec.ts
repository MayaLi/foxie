import {getAdvocateById} from "./advocates";

describe('advocates', () => {
  describe('getAdvocateById', () => {
    it('should work', () => {
      const id = '1';
      const adv = getAdvocateById(id);
      expect(adv).toMatchObject({
        id: id,
        firstName: 'michael',
        lastName: 'gregory'
      });
    });
  })
});
