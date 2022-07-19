export type RemoveAllOptionalProps<T> = {
  [key in keyof T]-?: T[key];
};
