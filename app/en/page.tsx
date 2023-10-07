import PROFILE from '@/data/PROFILE_JSON_en.json';
import Profile from '@/components/profile';

export default function Home() {
  return <Profile profile={PROFILE} />;
}
