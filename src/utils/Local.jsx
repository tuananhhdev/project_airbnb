export let userLocalStorage = {
  get: () => {
    let dataJson = localStorage.getItem("USER-INFO");
    return JSON.parse(dataJson);
  },
  set: (user) => {
    let dataJson = JSON.stringify(user);
    localStorage.setItem("USER-INFO", dataJson);
  },
  remove: () => {
    localStorage.removeItem("USER-INFO");
  },
};
