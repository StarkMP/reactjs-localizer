export type Locales = {
  [localeId: string]: { [language: string]: string };
};

export type LocalizeParams = Record<string, string>;

export type ProviderProps = {
  currentLanguage: string;
  defaultLanguage: string;
  locales: Locales;
};

export type ContextProps = {
  language: string;
  setLanguage: (language: string) => void;
  localize: (localeId: string, params?: LocalizeParams) => string;
};
