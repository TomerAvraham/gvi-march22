export const getLocalStorageValue = (name) => {
  return localStorage.getItem(name);
  // ss
};

export const setLocalStorageValue = (key, value) => {
  value = typeof value !== "string" ? JSON.stringify(value) : value;
  return localStorage.setItem(key, value);
};
export const deleteLocalStorageValue = (name) => {
  return localStorage.removeItem(name);
};
