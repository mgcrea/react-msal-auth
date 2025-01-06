type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

export const pick = <T extends object, K extends keyof T>(obj: T, keys: K[]): Simplify<Pick<T, K>> =>
  keys.reduce<Partial<Pick<T, K>>>((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {}) as Pick<T, K>;
