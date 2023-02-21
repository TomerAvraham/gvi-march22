export const getLocalStorageValue = (key, isNeedParse = false) => {
  const item = localStorage.getItem(key);
  if (!item) console.log(new Error(`No item with key - ${key}`));
  return isNeedParse ? JSON.parse(item) : item;
};

export const setLocalStorageValue = (key, value) => {
  value = typeof value !== "string" ? JSON.stringify(value) : value;
  return localStorage.setItem(key, value);
};
export const deleteLocalStorageValue = (name) => {
  return localStorage.removeItem(name);
};
