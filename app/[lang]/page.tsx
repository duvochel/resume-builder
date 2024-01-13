import Profile from '@/components/profile';
import { Locale } from '@/i18n-config';
import { getDictionary, getProfile } from '@/utils/loadData';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const profile = await getProfile(locale);
  const dictionary = await getDictionary(locale);

  return (
    <div className="dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 from-6% via-slate-900 via-30% to-slate-950 to-90% text-slate-800 dark:text-slate-400">
      <Profile profile={profile} dictionary={dictionary} locale={locale} />;
    </div>
  );
}
