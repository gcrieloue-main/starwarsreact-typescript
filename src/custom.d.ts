declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.json';
declare module '*.svg';
declare module '*.md';

declare module '.*';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (middleware: any) => any;
}
