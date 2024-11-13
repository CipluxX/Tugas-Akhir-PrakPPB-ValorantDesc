export type Loader = boolean;

export const reference = function (callback: () => void) {
  return callback();
};
