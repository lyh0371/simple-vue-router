import History from "./base";

function getHash() {
  return window.location.hash.slice(1);
}

function ensureSlash() {
  if (window.location.hash) {
    return;
  }
  window.location.hash = "/";
}

export default class HashHistory extends History {
  constructor(router) {
    super(router);
    // 确保有/
    ensureSlash();
  }
  getCurrentLocation() {
    return getHash();
  }

  setupListener() {
    window.addEventListener("hashchange", () => {
      this.transitionTo(getHash());
    });
  }
}
