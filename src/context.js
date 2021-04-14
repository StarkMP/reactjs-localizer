import { useCallback, useState, useContext, createContext } from 'react';

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