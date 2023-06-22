import React, { createContext, JSX, useContext, useState } from 'react';

import { ContextProps, LocalizeParams, ProviderProps } from '../types';
import { formatLocale } from '../utils/formatLocale';

const Context = createContext<ContextProps>({} as ContextProps);

export const useLocalizer = (): ContextProps => useContext(Context);

export const LocalizerContext = Context;

export const LocalizerProvider = ({
  children,
  currentLanguage,
  defaultLanguage,
  locales,
}: ProviderProps): JSX.Element => {
  if (!currentLanguage) {
    throw new Error('You did\'nt declare the "currentLanguage"');
  }

  const [language, setLanguage] = useState(currentLanguage);

  const getLocalized = (localeId: string, params?: LocalizeParams): string => {
    const locale = locales[localeId];

    if (locale === undefined) {
      throw new Error(`Phrase "${localeId}" is not defined at locales`);
    }

    return formatLocale(
      locale[language] || locale[defaultLanguage] || localeId,
      params
    );
  };

  const localize = (localeId: string, params?: LocalizeParams): string =>
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
