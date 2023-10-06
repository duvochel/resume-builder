import PROFILE from '@/data/linkedIn-toJSON_fr.json';
import Profile from '@/components/profile';

export default function Home() {
  return <Profile profile={PROFILE} />;
}
