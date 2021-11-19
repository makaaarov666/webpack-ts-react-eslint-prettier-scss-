const getAngleHours = (allSeconds: number): number => {
  const newHours = allSeconds / 3600;
  const angleHours = ((newHours > 12 ? newHours - 12 : newHours) / 12) * 360;

  return angleHours;
};

const getAngleMinutes = (allSeconds: number): number => {
  const newMinutes = (allSeconds % 3600) / 60;
  const angleMinutes = (newMinutes / 60) * 360;

  return angleMinutes;
};

const getAngleSeconds = (allSeconds: number): number => {
  const newSecond = (allSeconds % 3600) % 60;
  const angleSeconds = (newSecond / 60) * 360;

  return angleSeconds;
};

export { getAngleHours, getAngleMinutes, getAngleSeconds };
