import { Banner, Poster, SectionHeader2, Tabs } from "../components";
import Carousel from "../components/caousel";

export default function Information() {
  const tabList = [
    {
      title: "2023",
      winners: [
        { name: "Anna Siekierna", photo: "" },
        { name: "Joanna Sadowska", photo: "" },
      ],
      poster: {
        url: "./poster/poster-2023.png",
        desc: "Winners of FWL 2023",
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
      },
    },
    {
      title: "2021",
      winners: [
        { name: "Andrzej Zak", photo: "./winners/lab21_wroclaw_winner.jpeg" },
      ],
      poster: {
        url: "./poster/poster-2021.png",
        desc: "Winners of FWL 2022",
      },
    },
    {
      title: "2020",
      winners: [],
      poster: {
        url: "./poster/poster-2020.png",
        desc: "Winners of FWL 2022",
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
            <div>
              <SectionHeader2 title="Eligibility Criteria" />
              <div className="text-lg">
                <ul>
                  <li>1. Applicant must be older than 18.</li>
                  <li>
                    2. Applicant should not have prior participation in any
                    Falling Walls Lab event.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <SectionHeader2 title="Prizes" />
              <div className="text-lg">
                <ul>
                  <li>
                    Winner will get to participate in the Falling Walls Lab
                    finale in Berlin (7th November 2024)
                  </li>
                  <li>Winner gets a ticket to Falling Walls Science Summit.</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div>
              <SectionHeader2 title="Important Dates" />

              <div className="max-container overflow-x-auto sm:rounded-lg pb-20">
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
          </div>
          <div className="flex justify-end lg:w-2/5 rounded-md shadow-lg">
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
