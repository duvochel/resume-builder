import PROFILE from '@/data/linkedIn-toJSON_en.json';
import Profile from '@/components/profile';

export default function Home() {
  return <Profile profile={PROFILE} />;
}
