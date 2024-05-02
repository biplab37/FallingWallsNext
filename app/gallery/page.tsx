import { Card, SectionHeader } from "../components";

const listPhotos2022 = [
  {
    id: 2,
    alttext: "Group Photo",
    url: "./previousPhotos/2022/fwl_2022_2.webp",
    props: "col-span-6 md:col-span-3",
  },
  {
    id: 1,
    alttext: "Falling Walls Lab Wrocław 2022 Winners",
    url: "./previousPhotos/2022/fwl_2022_1.webp",
    props: "col-span-3 md:col-span-3 ",
  },
  {
    id: 3,
    alttext: "Audience Listening to Presentation",
    url: "./previousPhotos/2022/fwl_2022_3.webp",
    props: "col-span-3 md:col-span-2 ",
  },
  {
    id: 4,
    alttext: "Participant giving presentation",
    url: "./previousPhotos/2022/fwl_2022_4.webp",
    props: "col-span-3 md:col-span-2",
  },
  {
    id: 5,
    alttext: "Discussion after presentation",
    url: "./previousPhotos/2022/fwl_2022_5.webp",
    props: "col-span-3 md:col-span-2 ",
  },
];

const listPhotos2021 = [
  {
    id: 1,
    url: "./previousPhotos/2021/fwl_2021_6.webp",
    alttext: "Group Photo 2021",
    props: "col-span-12 lg:row-span-2 lg:col-span-8",
  },
  {
    id: 2,
    url: "./previousPhotos/2021/fwl_2021_4.webp",
    alttext: "Participant giving presentation",
    props: "col-span-7 row-span-3 lg:row-span-2 lg:col-span-4 ",
  },
  {
    id: 3,
    url: "./previousPhotos/2021/fwl_2021_2.webp",
    alttext: "Audience Asking Question",
    props: "col-span-5 lg:col-span-4",
  },
  {
    id: 4,
    url: "./previousPhotos/2021/fwl_2021_1.webp",
    alttext: "Participant giving presentation",
    props: "col-span-5 lg:col-span-4",
  },
  {
    id: 5,
    url: "./previousPhotos/2021/fwl_2021_3.webp",
    alttext: "Participant giving presentation",
    props: "col-span-5 lg:col-span-4",
  },
];

const listPhotos2019 = [
  {
    id: 1,
    url: "./previousPhotos/2019/fwl2019_1.webp",
    alttext: "Participant accepting award",
    props: "col-span-12 md:col-span-4",
  },
  {
    id: 2,
    url: "./previousPhotos/2019/fwl2019_2.webp",
    alttext: "Participant accepting award",
    props: "col-span-12 md:col-span-4 ",
  },
  {
    id: 3,
    url: "./previousPhotos/2019/fwl2019_3.webp",
    alttext: "Participant accepting award",
    props: "col-span-12 md:col-span-4",
  },
  {
    id: 4,
    url: "./previousPhotos/2019/fwl2019_4.webp",
    alttext: "Participant accepting award",
    props: "col-span-12 md:col-span-4",
  },
  {
    id: 5,
    url: "./previousPhotos/2019/fwl2019_5.webp",
    alttext: "Participant accepting award",
    props: "col-span-12 md:col-span-4",
  },
  {
    id: 6,
    url: "./previousPhotos/2019/fwl2019_6.webp",
    alttext: "Participant accepting award",
    props: "col-span-12 md:col-span-4",
  },
];

interface Photo {
  id: number;
  alttext: string;
  url: string;
  props: string;
}

export default function Gallery() {
  return (
    <div>
      <div>
        <SectionHeader title="2022" />
        <div className="max-container">
          <div className="grid grid-cols-6 gap-4">
            {listPhotos2022.map((photo: Photo) => (
              <div key={photo.id} className={` ${photo.props}`}>
                <Card imageurl={photo.url} description={photo.alttext} />
              </div>
            ))}
          </div>
        </div>
        <SectionHeader title="2021" />
        <div className="max-container">
          <div className="grid grid-cols-12 gap-4">
            {listPhotos2021.map((photo: Photo) => (
              <div key={photo.id} className={` ${photo.props}`}>
                <Card imageurl={photo.url} description={photo.alttext} />
              </div>
            ))}
          </div>
        </div>
        <SectionHeader title="2019" />
        <div className="max-container">
          <div className="grid grid-cols-12 gap-4">
            {listPhotos2019.map((photo: Photo) => (
              <div key={photo.id} className={` ${photo.props}`}>
                <Card imageurl={photo.url} description={photo.alttext} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
