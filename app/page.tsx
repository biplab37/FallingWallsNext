import { InfoSection, SponsorSection } from "./components";

export default function Home() {
  return (
    <main className="">
      <div className=" relative overflow-hidden h-auto lg:h-[50vh]">
        <img src="./uwr.jpg" alt="UWR" className="md:blur-sm" />
        <div className="max-container md:absolute md:inset-0 flex justify-center flex-col">
          <span className="text-3xl md:text-6xl uppercase text-red-600 font-bold">
            Falling Walls Lab
          </span>
          <span className="text-2xl text-slate-600 md:text-slate-200 uppercase">
            is coming to
          </span>
          <span className="text-3xl md:text-6xl uppercase text-red-600 font-bold">
            Wrocław
          </span>
        </div>
      </div>
      <InfoSection />
      <SponsorSection />
    </main>
  );
}
