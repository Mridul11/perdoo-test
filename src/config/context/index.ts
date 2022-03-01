import { createContext } from 'react';

export const navbarAppState: [string, React.Dispatch<React.SetStateAction<string>>] = [
  '',
  (state: any) => state
];
export const charactersAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = [
  [],
  (state: any) => state
];
export const locationsAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = [
  [],
  (state: any) => state
];
export const episodesAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = [
  [],
  (state: any) => state
];

const appState = {
  navbarAppState,
  charactersAppState,
  locationsAppState,
  episodesAppState
};

const AppContext = createContext(appState);

export default AppContext;
