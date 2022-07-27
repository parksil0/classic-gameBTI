import { MBTI_TYPES } from './index.constants';

export type MbtiType = keyof typeof MBTI_TYPES;

export type SelectedAnswer = Record<keyof typeof MBTI_TYPES, number>;
