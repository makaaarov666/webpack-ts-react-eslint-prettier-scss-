import { TGeometryProps, TSegmentGeometry } from './types';

const getSegmentCoordinate = ({
  angleInDegrees,
  radius,
  centerX,
  centerY,
}: TGeometryProps): TSegmentGeometry => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  const coordinateX = centerX + radius * Math.cos(angleInRadians);
  const coordinateY = centerY + radius * Math.sin(angleInRadians);

  return {
    x: coordinateX,
    y: coordinateY,
  };
};

export { getSegmentCoordinate };
