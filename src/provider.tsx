import React, { createContext, useContext, useState } from 'react';

import { ContextProps, LocalizeParams, ProviderProps } from './types';
import { formatLocale } from './utils';

const Context = createContext<ContextProps | null>(null);

export const useLocalizer = () => useContext(Context);

export const LocalizerProvider: React.FC<ProviderProps> = ({
  children,
  currentLanguage,
  defaultLanguage,
  locales,
}) => {
  if (!currentLanguage) {
    throw new Error('You did\'nt declare the "currentLanguage"');
  }

  const [language, setLanguage] = useState(currentLanguage);

  const getLocalized = (localeId: string, params?: LocalizeParams) => {
    const locale = locales[localeId];

    if (locale === undefined) {
      throw new Error(`Phrase "${localeId}" is not defined at locales`);
    }

    return formatLocale(
      locale[language] || locale[defaultLanguage] || localeId,
      params
    );
  };

  const localize = (localeId: string, params?: LocalizeParams) =>
    getLocalized(localeId, params);

  return (
    <Context.Provider
      value={{
        language,
        localize,
        setLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
