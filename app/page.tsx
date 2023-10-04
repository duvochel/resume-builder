import Experience from "./components/experience";
import Header from "./components/header";
import PROFILE from "./linkedIn-toJSON_fr.json";

export default function Home() {
  const experiences = PROFILE.work;
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </main>
    </>
  );
}
