export async function register() {
  // Node.js 25+ exposes a global `localStorage` object, but without a valid
  // --localstorage-file path it's non-functional (getItem/setItem are not
  // functions). Libraries like Supabase check `typeof localStorage` to detect
  // a browser environment and crash when they call getItem(). Removing the
  // broken global prevents this.
  if (
    typeof localStorage !== 'undefined' &&
    typeof localStorage.getItem !== 'function'
  ) {
    (globalThis as any).localStorage = undefined;
  }
}
