export const localStorageGetItem = item => {
 const contactsList = JSON.parse(localStorage.getItem(item));
  return contactsList;
};

export const localStorageSetItem = (key, item) => {
   localStorage.setItem(key, JSON.stringify(item));
  return;
};