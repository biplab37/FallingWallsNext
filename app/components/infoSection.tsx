import InfoQ from "./infoQ";

export default function InfoSection() {
  return (
    <>
      <div className=" pt-10"></div>
      <InfoQ
        question="What is Falling Walls Lab?"
        answer="Falling Walls Lab is an international forum for the next generation of early-career
  innovators, trailblazers, creators, and visionaries. Its aim is to promote exceptional
  ideas and connect promising scientists and entrepreneurs from all fields on a global
  level. Participants are given the opportunity to present their research, business model,
  or initiative to peers, a high-calibre jury of experts from academia and business, and the
  general public – in just 3 minutes."
      />
      <InfoQ
        question="Who is it for?"
        answer="If you are a young innovator and visionary in science or business, this is a big chance for you
  to become world famous!"
      />
      <InfoQ
        question="What is the application deadline?"
        answer="The application deadline is 14th August 2024."
      />
      <InfoQ
        question="When will the event take place?"
        answer="The event will take place on 14th September 2024."
      />
      <InfoQ
        question="How can you apply?"
        answer="Fill in the form by clicking the big red 'Apply Now' button. Check out the Information section for more details."
      />
    </>
  );
}
