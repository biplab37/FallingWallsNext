import Image from "next/image";
import Banner from "./components/banner";
import { InfoSection } from "./components";

export default function Home() {
  return (
    <main className="">
      <div className="relative overflow-hidden h-auto lg:h-[50vh]">
        <img src="uwr.jpg" alt="UWR" className="blur-sm" />
        <div className="absolute inset-0 flex justify-center flex-col p-10">
          <span className="text-4xl md:text-6xl uppercase text-red-600 font-bold">
            Falling Walls Lab
          </span>
          <span className="text-3xl  text-slate-800 uppercase">
            is coming to
          </span>
          <span className="text-4xl md:text-6xl uppercase text-red-600 font-bold">
            Wrocław
          </span>
        </div>
      </div>
      <InfoSection />
    </main>
  );
}
