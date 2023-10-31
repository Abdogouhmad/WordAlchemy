import { writable } from 'svelte/store';

// Function to create a writable store with local storage support
const createWritableStore = (key, startValue) => {
  const { subscribe, set } = writable(startValue);

  return {
    subscribe,
    set,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }

      subscribe((current) => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    },
  };
};

// Theme and Color store
export const themeStore = createWritableStore('theme', { mode: 'dark', color: 'blue' });
