import Profile from '@/components/profile';
import { Locale } from '@/i18n-config';
import { getDictionary, getProfile } from '@/utils/loadData';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const profile = await getProfile(locale);
  const dictionary = await getDictionary(locale);

  return (
    <div className='dark:bg-slate-900 dark:text-slate-400'>
      <Profile profile={profile} dictionary={dictionary} locale={locale} />;
    </div>
  );
}
