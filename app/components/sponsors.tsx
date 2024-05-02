import { SectionHeader } from ".";
interface SponsorProps {
  name: string;
  logo: string;
}

function Sponsor({ name, logo }: SponsorProps) {
  return (
    <div className="p-4">
      <img src={logo} alt={name} className="h-10 md:h-16 lg:h-20" />
    </div>
  );
}
const listSponsors = [
  {
    name: "Embassy",
    logo: "./logo/logo-embassy.png",
  },
];

const listPartners = [
  {
    name: "WCA",
    logo: "./logo/logo-wca.png",
  },
  {
    name: "DFN",
    logo: "./logo/logo-dfn.png",
  },
  {
    name: "SUT",
    logo: "./logo/logo-sut.png",
  },
  {
    name: "WUE",
    logo: "./logo/logo-wr-econ.png",
  },
  {
    name: "WMU",
    logo: "./logo/logo-wr-mu.png",
  },
  {
    name: "WUST",
    logo: "./logo/logo-wust.jpg",
  },
  {
    name: "RU",
    logo: "./logo/logo-re-un.jpg",
  },
  {
    name: "UWr",
    logo: "./logo/logo-uniwroc.jpg",
  },
  {
    name: "WUELS",
    logo: "./logo/logo-wr-env.png",
  },

  // {
  //   name: "UE",
  //   logo: "/logo/logo-UE_pl.jpg",
  // },
];

export default function SponsorSection() {
  return (
    <section id="sponsors" className="md:max-w-screen-xl mx-auto my-8">
      <SectionHeader title="Sponsors" />
      <ul className="flex content-center justify-center my-2">
        <li>
          <img
            src="./logo/logo-embassy.png"
            alt="German Embassy"
            className="h-[12rem]"
          />
        </li>
      </ul>
      <SectionHeader title="Partners" />
      <ul className="flex flex-wrap content-center justify-center mt-2">
        {listPartners.map((item) => (
          <li key={item.name}>
            <Sponsor name={item.name} logo={item.logo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
