import { LocalizeParams } from './types';

export const formatLocale = (phrase: string, params?: LocalizeParams) => {
  if (params) {
    phrase = phrase.replace(/%([\s\S]+?)%/g, (match) => {
      return params[match.slice(1, -1)] as string;
    });
  }

  return phrase;
};
