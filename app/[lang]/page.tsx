import Profile from '@/components/profile';
import { getProfile } from '@/getProfileForLocale';

export default async function Home({ params }: { params: { lang: string } }) {
  const profile = await getProfile(params.lang);

  return <Profile profile={profile} />;
}
