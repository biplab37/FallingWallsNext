import { Banner } from "../components";

export default function About() {
  return (
    <>
      <Banner imageurl="./uwr.webp" text="About Falling Walls Lab" />
      <div>
        <div className="max-container p-4 mx-auto lg:py-4">
          <p className="p-6 text-slate-700 text-xl">
            Falling Walls Lab is an international forum for the next generation
            of early-career innovators, trailblazers, creators, and visionaries.
            Its aim is to promote exceptional ideas and connect promising
            scientists and entrepreneurs from all fields on a global level.
            Participants are given the opportunity to present their research,
            business model, or initiative to peers, a high-calibre jury of
            experts from academia and business, and the general public – in just
            three minutes.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mx-auto h-auto pb-6">
          <div className="flex justify-center aspect-video bg-slate-300">
            <iframe
              // width="560"
              // height="315"
              width="100%"
              src="https://www.youtube.com/embed/129SjKM9bvw?si=iFb9Npj3uYKHnd7g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
