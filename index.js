export const createMemoSelector = (fn, props) => {
  let last;
  return (...args) => {
    const next = fn(...args);
    const shouldUpdate = !!props.find(prop => next?.[prop] !== last?.[prop]);
    if (!shouldUpdate) return last;
    last = next;
    return next;
  };
};

export const createIdentitySelector = fn => {
  let result;
  return (...args) => {
    if (reslut) return result;
    return (result = fn(...args));
  };
};

const hasDepsChanged = (a, b) => {
  return (
    !a ||
    !b ||
    a.length !== b.length ||
    a.some((dep, index) => dep !== b[index])
  );
};

export const createArraySelector = fn => {
  let last = [];
  return (...args) => {
    const next = fn(...args);
    const shouldUpdate = hasDepsChanged(next, last);
    if (!shouldUpdate) return last;
    last = next;
    return next;
  };
};
