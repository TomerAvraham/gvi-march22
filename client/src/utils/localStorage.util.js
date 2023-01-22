export const getLocalStorageValue = (name) => {
  return localStorage.getItem(name);
};

export const setLocalStorageValue = (key, value) => {
  return localStorage.setItem(key, value);
};
export const deleteLocalStorageValue = (name) => {
  return localStorage.removeItem(name);
};
