import customDateFormats from '../solution/js/customDateFormats';

describe('customDateFormats ', () => {
  test('should return an object which return an object with short, and long date properties', () => {
    const date = new Date(2021, 0, 1, 10, 10, 40);

    expect(customDateFormats(date)).toEqual({
      long: '2021. január 1. 10:10:40',
      short: '2021. jan. 1. 10:10',
    });
  });
});
