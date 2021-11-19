type TSetTimeProps = {
  newHours: number;
  newMinutes: number;
  newSecond: number;
  allSecond: number;
};

type TInnerProps = {
  setTime: (props: TSetTimeProps) => void;
  differenceTime: number;
};

export { TSetTimeProps, TInnerProps };
