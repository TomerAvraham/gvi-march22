export const getLocalStorageValue = (name) => {
  return localStorage.getItem(name);
};

export const deleteLocalStorageValue = (name) => {
  return localStorage.removeItem(name);
};
