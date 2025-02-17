import { useState } from 'react';

export default function useStateWithStorage<T>(key: string, defaultValue: T) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : null;

  const [state, setState] = useState<T>(parsedValue || defaultValue);

  const setStoredState = (newState: T) => {
    setState(newState);
    localStorage.setItem(key, JSON.stringify(newState));
  };

  return [state, setStoredState] as const;
}
