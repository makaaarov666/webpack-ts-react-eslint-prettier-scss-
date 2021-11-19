import { createAction } from '@reduxjs/toolkit';

const addCircleTime = createAction<number>('addCircleTime');
const clearCircleTimes = createAction<number>('clearCircleTimes');

export { addCircleTime, clearCircleTimes };
