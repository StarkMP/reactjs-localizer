import { useLocalizer, LocaleProvider } from './context';

class Localizer {
    static locales = {};
    static defaultLanguage = 'EN';
    static mounted = false;

    static mount(obj) {
        if (Localizer.mounted) {
            throw new Error('Localizer was mounted');
        }

        Localizer.locales = obj;
        Localizer.mounted = true;
    }

    static localize(lang, toLocalize) {
        const phrase = Localizer.locales[toLocalize];

        if (!phrase) {
            throw new Error(`Phrase ${toLocalize} is not defined at locales`);
        }

        return phrase[lang] || toLocalize;
    }
}

export default {
    Localizer, useLocalizer, LocaleProvider
};
