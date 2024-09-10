import { Banner, Poster, SectionHeader2, Tabs } from "../components";
import Carousel from "../components/caousel";

export default function Information() {
  const tabList = [
    {
      title: "2023",
      winners: [
        {
          name: "Anna Siekierna & Joanna Sadowska",
          photo: "./winners/lab23_wroclaw_winner.jpg",
        },
      ],
      poster: {
        url: "./poster/poster-2023.png",
        desc: "Winners of FWL 2023",
        pdf: "./poster/poster-2023.pdf",
      },
    },
    {
      title: "2022",
      winners: [
        {
          name: "Dr. Enrico Patrano",
          photo: "./winners/lab22_wroclaw_winner.jpg",
        },
      ],
      poster: {
        url: "./poster/poster-2022.png",
        desc: "Winners of FWL 2022",
        pdf: "./poster/poster-2022.pdf",
      },
    },
    {
      title: "2021",
      winners: [
        { name: "Andrzej Zak", photo: "./winners/lab21_wroclaw_winner.jpeg" },
      ],
      poster: {
        url: "./poster/poster-2021.png",
        desc: "Winners of FWL 2021",
        pdf: "./poster/poster-2021.pdf",
      },
    },
    {
      title: "2020",
      winners: [],
      poster: {
        url: "./poster/poster-2020.png",
        desc: "Winners of FWL 2022",
        pdf: "./poster/poster-2020.pdf",
      },
    },
    {
      title: "Older",
      winners: [
        {
          name: "2019: Daniel Kopkane",
          photo: "./winners/lab19_wroclaw_winner.JPG",
        },
        {
          name: "2018: Taiana Mui",
          photo: "./winners/lab18_wroclaw_winner.jpg",
        },
        {
          name: "2017: Tatevik Chalyan",
          photo: "./winners/lab17_wroclaw_winner.JPG",
        },
        {
          name: "2016: Mateusz Szatkowski",
          photo: "./winners/lab16_wroclaw_winner.JPG",
        },
      ],
      poster: {
        url: "",
        desc: "",
        pdf: "",
      },
    },
  ];

  const listPoster = [
    "./poster/lab24_poster_1.webp",
    "./poster/lab24_poster_2.webp",
    "./poster/lab24_poster_3.webp",
    "./poster/lab24_poster_4.webp",
  ];
  return (
    <>
      <Banner imageurl="uwr.webp" text="Information" />
      <div className="py-4 mx-auto max-container">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="pb-6">
              <SectionHeader2 title="Eligibility Criteria" />
              <div className="text-lg ps-6">
                <p>
                  Bachelor and Master students, PhD candidates, postdocs, and
                  early-career professionals
                </p>
                <p>from all disciplines are encouraged to apply.</p>
                <p>
                  Applicants must meet at least one of the following formal
                  requirements:
                </p>
                <ul className="p-4">
                  <li>
                    {" "}
                    o They must be currently enrolled in a university and/or are
                    currently a postdoc;
                  </li>
                  <li>
                    {" "}
                    o They must have received a Bachelor’s degree no more than
                    10 years ago;
                  </li>
                  <li>
                    {" "}
                    o They must have received a Master’s degree no more than 7
                    years ago;
                  </li>
                  <li>
                    {" "}
                    o They must have received a PhD no more than 5 years ago.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="pb-10">
              <SectionHeader2 title="Prizes" />
              <div className="text-lg ps-6">
                <ul>
                  <li>
                    Winner will get to participate in the Falling Walls Lab
                    finale in Berlin
                  </li>
                  <li>Winner gets a ticket to Falling Walls Science Summit.</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div>
              <SectionHeader2 title="Important Dates" />

              <div className="max-container overflow-x-auto sm:rounded-lg pb-10">
                <table className="text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-md text-gray-600 uppercase bg-gray-200 text-center">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Event
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base">
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Application Deadline
                      </th>
                      <td className="px-6 py-4">13th Aug 2024</td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <th
                        scope="row"
                        className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Falling Walls Lab in Wrocław
                      </th>
                      <td className="px-6 py-4">14th Sep 2024</td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50 ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Falling Walls Lab Finale
                      </th>
                      <td className="px-6 py-4">7th Nov 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pb-8">
              <SectionHeader2 title="Download Section" />
              <div className="text-lg ps-10">
                <ul className="list-disc">
                  <li>
                    <a
                      href="./downloads/lab24-wroclaw-press-release_final.pdf"
                      download
                      className="text-blue-500 hover:underline"
                    >
                      Download the Press Release
                    </a>
                  </li>
                  <li>
                    <a
                      href="./downloads/timetable.png"
                      download
                      className="text-blue-500 hover:underline"
                    >
                      Download the Time Table
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center lg:w-2/5  h-auto">
            <Carousel autoSlideInterval={6000}>
              {[
                ...listPoster.map((s: string) => (
                  <img src={s} key={s} className="h-auto rounded-lg" />
                )),
              ]}
            </Carousel>
          </div>
        </div>
        <div>
          <SectionHeader2 title="Previous Editions" />
          <div>
            <Tabs tabs={tabList} />
          </div>
        </div>
      </div>
    </>
  );
}
