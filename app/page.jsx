import Image from "next/image";
import Header from "./fonts/_components/Header";
import Footer from "./fonts/_components/Footer";
import PersonalCard from "./fonts/_components/PersonalCard";

export default function Home() {
  return (
    <div className="text-black">
      <Header/>
      <main className="flex flex-col items-center justify-center mx-auto max-w-full my-8">
    <PersonalCard />
    </main>

      <Footer/>
    </div>
  );
}
