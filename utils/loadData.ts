import 'server-only';

const profiles: any = {
  en: () =>
    import('@/data/PROFILE_en.json').then((module) => module.default),
  fr: () =>
    import('@/data/PROFILE_fr.json').then((module) => module.default),
};

export const getProfile = async (locale: string) => profiles[locale]?.() ?? profiles.en();

const dictionaries: any = {
  en: () =>
    import('@/dictionaries/en.json').then((module) => module.default),
  fr: () =>
    import('@/dictionaries/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]?.() ?? dictionaries.en();


