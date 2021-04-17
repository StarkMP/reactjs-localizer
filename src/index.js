import React, { useCallback, useState, useContext, createContext } from 'react';

export class Localizer {
    static locales = {};
    static defaultLanguage = 'EN';

    static mount(obj) {
        Localizer.locales = obj;
    }

    static localize(lang, toLocalize) {
        const phrase = Localizer.locales[toLocalize];

        if (!phrase) {
            throw new Error(`Phrase "${toLocalize}" is not defined at locales`);
        }

        return phrase[lang] || toLocalize;
    }
}

const Context = createContext();

export const useLocalizer = () => useContext(Context);

export const LocaleProvider = ({ children }) => {
    const [language, setLanguage] = useState(Localizer.defaultLanguage);

    const localize = useCallback(
        (toLocalize) => {
            return Localizer.localize(language, toLocalize);
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