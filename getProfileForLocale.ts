import 'server-only';

const profiles: any = {
  en: () =>
    import('@/data/PROFILE_en.json').then((module) => module.default),
  fr: () =>
    import('@/data/PROFILE_fr.json').then((module) => module.default),
};

export const getProfile = async (locale: string) => profiles[locale]?.() ?? profiles.en();
