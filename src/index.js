import React, { useCallback, useState, useContext, createContext } from 'react';

export class Localizer {
    static locales = {};
    static defaultLanguage = '';

    static mount(obj) {
        Localizer.locales = obj;
    }

    static localize(lang, toLocalize, params) {
        const phrase = Localizer.locales[toLocalize];

        if (!phrase) {
            throw new Error(`Phrase "${toLocalize}" is not defined at locales`);
        }

        return Localizer.format(phrase[lang] || toLocalize, params);
    }

    static format(phrase, params) {
        if (params) {
            phrase = phrase.replace(/%([\s\S]+?)%/g, (match) => {
                return params[match.slice(1, -1)];
            });
        }

        return phrase;
    }
}

const Context = createContext();

export const useLocalizer = () => useContext(Context);

export const LocaleProvider = ({ children }) => {
    if (!Localizer.defaultLanguage) {
        throw new Error('You are not declare the defaultLanguage');
    }

    const [language, setLanguage] = useState(Localizer.defaultLanguage);

    const localize = useCallback(
        (toLocalize, params) => {
            return Localizer.localize(language, toLocalize, params);
        },
        [language]
    );

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
