const localStorage = {
  get: item => JSON.parse(window.localStorage.getItem(item)),
  set: (item, value) =>
    window.localStorage.setItem(item, JSON.stringify(value)),
};

export default localStorage;
