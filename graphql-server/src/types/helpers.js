export function tryNumberResolver(key) {
  return obj => {
    const value = obj[key];
    try {
      return Number(value);
    } catch(e) {
      return null;
    }
  }
}
