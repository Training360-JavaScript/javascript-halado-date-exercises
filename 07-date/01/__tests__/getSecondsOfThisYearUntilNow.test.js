import { jest } from '@jest/globals';
import getSecondsOfThisYearUntilNow from '../solution/js/getSecondsOfThisYearUntilNow';

describe('getSecondsOfThisYearUntilNow ', () => {
  test('should return seconds of this year until now', () => {
    const mockDate = new Date(1635864660027);
    global.Date = jest.fn().mockImplementation(() => mockDate);
    Date.now = jest.fn(() => mockDate);
    expect(getSecondsOfThisYearUntilNow()).toBe(0);
  });
});
