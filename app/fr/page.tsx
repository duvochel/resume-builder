import PROFILE from '@/data/PROFILE_JSON_fr.json';
import Profile from '@/components/profile';

export default function Home() {
  return <Profile profile={PROFILE} />;
}
