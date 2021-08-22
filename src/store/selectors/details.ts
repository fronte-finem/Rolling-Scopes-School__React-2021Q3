import { RootState } from '../store';

export const selectMedia = (state: RootState) => state.details.data?.Media;
