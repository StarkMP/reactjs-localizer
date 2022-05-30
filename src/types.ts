import { Dispatch, SetStateAction } from 'react';

export type Locales = {
  [localeId: string]: { [language: string]: string };
};

export type LocalizeParams = Record<string, string | number>;

export type ProviderProps = {
  currentLanguage: string;
  defaultLanguage: string;
  locales: Locales;
};

export type ContextProps = {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  localize: (localeId: string, params?: LocalizeParams) => string;
};
