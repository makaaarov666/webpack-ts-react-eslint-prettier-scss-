type TClockState = {
  isStopwatch: boolean;
  circleStopwatch: number;
  currentStopwatch: number;
  currentHours: number;
  currentMinutes: number;
  currentSeconds: number;
  currentAllSeconds: number;
  differenceTime: number;
};

type TTimePayload = {
  payload: number;
};

export { TClockState, TTimePayload };
