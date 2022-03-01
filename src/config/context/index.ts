import { createContext } from 'react';

const navbarAppState: [string, React.Dispatch<React.SetStateAction<string>>] = [
  '',
  (state: any) => state
];
const charactersAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = [
  [],
  (state: any) => state
];
const locationsAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = [
  [],
  (state: any) => state
];
const episodesAppState: [[], React.Dispatch<React.SetStateAction<[]>>] = [
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
