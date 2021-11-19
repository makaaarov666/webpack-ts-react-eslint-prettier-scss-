import { getAngleHours, getAngleMinutes } from '../helpers/getAngleArrow';

describe('test getTime function', () => {
  it('should return angle arrow clock for getTime', () => {
    expect(getAngleHours(15000)).toEqual(120);
  });
  it('should return coordinate for getTime', () => {
    expect(getAngleMinutes(36000)).toEqual(0);
  });
});
