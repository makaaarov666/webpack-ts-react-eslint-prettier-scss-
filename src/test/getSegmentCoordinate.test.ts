import { getSegmentCoordinate } from '../helpers/getSegmentCoordinate';

describe('test getSegmentCoordinate function', () => {
  it('should return coordinate for getSegmentCoordinate', () => {
    expect(
      getSegmentCoordinate({
        centerX: 30,
        centerY: 200,
        radius: 200,
        angleInDegrees: 145,
      }),
    ).toEqual({ x: 144.71528727020922, y: 363.8304088577984 });
  });
  it('should return coordinate for getSegmentCoordinate', () => {
    expect(
      getSegmentCoordinate({
        centerX: 276,
        centerY: 200,
        radius: 200,
        angleInDegrees: 175,
      }),
    ).toEqual({ x: 293.4311485495316, y: 399.23893961834915 });
  });
});
