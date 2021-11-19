import { TRootState } from '../store';

const selectors = {
  getCircleTimes: (state: TRootState) => state.tableReducer.circleTimes,
};

export default selectors;
