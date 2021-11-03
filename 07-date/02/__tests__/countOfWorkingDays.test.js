import countOfWorkingDays from '../solution/js/countOfWorkingDays';

describe('countOfWorkingDays ', () => {
    test('should return the number of working days between two date', () => {
      const from = new Date(2021, 0, 1)
      const to = new Date(2021, 9, 28)
      
      expect(countOfWorkingDays(from, to)).toBe(215);
    });
});
