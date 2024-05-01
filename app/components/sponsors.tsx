import { SectionHeader } from ".";
interface SponsorProps {
  name: string;
  logo: string;
}

const Sponsor = ({ name, logo }: SponsorProps) => {
  return (
    <div className="p-4">
      <img src={logo} alt={name} className="h-10 md:h-16 lg:h-20" />
    </div>
  );
};
const listSponsors = [
  {
    name: "Embassy",
    logo: "./Logo/logo-embassy.png",
  },
];

const listPartners = [
  {
    name: "WCA",
    logo: "./Logo/logo-wca.png",
  },
  {
    name: "DFN",
    logo: "./Logo/logo-dfn.png",
  },
  {
    name: "SUT",
    logo: "./Logo/logo-sut.png",
  },
  {
    name: "WUE",
    logo: "./Logo/logo-wr-econ.png",
  },
  {
    name: "WMU",
    logo: "./Logo/logo-wr-mu.png",
  },
  {
    name: "WUST",
    logo: "./Logo/logo-wust.jpg",
  },
  {
    name: "RU",
    logo: "./Logo/logo-re-un.jpg",
  },
  {
    name: "UWr",
    logo: "./Logo/logo-uniwroc.jpg",
  },
  {
    name: "WUELS",
    logo: "./Logo/logo-wr-env.png",
  },

  // {
  //   name: "UE",
  //   logo: "/Logo/logo-UE_pl.jpg",
  // },
];

export default function SponsorSection() {
  return (
    <section id="sponsors" className="md:max-w-screen-xl mx-auto my-8">
      <SectionHeader title="Sponsors" />
      <ul className="flex content-center justify-center my-2">
        <li>
          <img
            src="./Logo/logo-embassy.png"
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
