export const MBTI_TYPES = {
  i: 'i',
  e: 'e',
  s: 's',
  n: 'n',
  t: 't',
  f: 'f',
  j: 'j',
  p: 'p',
};

export type MbtiType = keyof typeof MBTI_TYPES;

export type SelectedAnswer = Record<keyof typeof MBTI_TYPES, number>;
