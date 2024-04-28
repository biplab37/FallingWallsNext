import { Banner, SectionHeader2, Tabs } from "../components";

export default function Information() {
  const tabList = [
    {
      title: "2023",
      winners: ["Anna Siekierna", "Joanna Sadowska", "El Sayed Ali"],
      poster: {
        url: "/Poster/poster-2023.png",
        desc: "Winners of FWL 2023",
      },
    },
    {
      title: "2022",
      winners: ["Dr. Enrico Patrano", "Veronicka Cervenkova", "Erik Sonntag"],
      poster: {
        url: "/Poster/poster-2022.png",
        desc: "Winners of FWL 2022",
      },
    },
    {
      title: "2021",
      winners: ["Andrzej Zak"],
      poster: {
        url: "/Poster/poster-2021.png",
        desc: "Winners of FWL 2022",
      },
    },
    {
      title: "2020",
      winners: [],
      poster: {
        url: "/Poster/poster-2020.png",
        desc: "Winners of FWL 2022",
      },
    },
  ];
  return (
    <>
      <Banner imageurl="uwr.jpg" text="Information" />
      <div className="py-4 mx-auto container">
        <div>
          <SectionHeader2 title="Selection Criteria" />
          <div>
            <ul>
              <li></li>
              <li>2</li>
            </ul>
          </div>
        </div>
        <div>
          <SectionHeader2 title="Assesment Criteria" />
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
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Application Deadline
                  </th>
                  <td className="px-6 py-4">13th Aug 2024</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className=" px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Falling Walls Lab in Wrocław
                  </th>
                  <td className="px-6 py-4">14th Sep 2024</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Falling Walls Lab Finale
                  </th>
                  <td className="px-6 py-4">7th Nov 2024</td>
                </tr>
              </tbody>
            </table>
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
