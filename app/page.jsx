
import PersonalCard from "./_components/PersonalCard";
import AboutCard from "./_components/AboutCard";
import SkillsCard from "./_components/SkillsCard";
import ExperienceCard from "./_components/ExperienceCard";

export default function Home() {
  return (
    <div className="text-black">
      
      <main className="items-center justify-center mx-auto max-w-full my-0 md:mt-8">
        <div className="">
        <PersonalCard />
        </div>
        <div className="">
        <AboutCard/>
        </div>
        <div>
          <SkillsCard/>
        </div>
        <div>
          <ExperienceCard/>
        </div>
        
      </main>

      {/* <Footer/> */}
    </div>
  );
}
