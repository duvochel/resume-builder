import Experience from "./components/experience";
import Header from "./components/header";
import PROFILE from "./linkedIn-toJSON_fr.json";

export default function Home() {
  const experiences = PROFILE.work;
  return (
    <>
      <Header />
      <main className="flex min-h-screen max-w-6xl mx-auto flex-col gap-8 items-center justify-between p-10">
        <h2 className="text-4xl my-16">EXPERIENCE</h2>
        {experiences.map((exp, index) => (
          <Experience key={index} experience={exp} />
        ))}
      </main>
    </>
  );
}
