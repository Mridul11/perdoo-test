import { createContext } from 'react';

export const navbarAppState: [string, React.Dispatch<React.SetStateAction<string>>] = [
  '',
  (state: any) => state
];

const appState = {
  navbarAppState
};

const AppContext = createContext(appState);

export default AppContext;
