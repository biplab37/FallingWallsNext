import { Card, SectionHeader } from "../components";

const listPhotos2022 = [
  {
    id: 2,
    alttext: "Group Photo",
    url: "./PreviousPhotos/2022/fwl_2022_2.jpg",
    props: "col-span-6 md:col-span-3",
  },
  {
    id: 1,
    alttext: "Falling Walls Lab Wrocław 2022 Winners",
    url: "./PreviousPhotos/2022/fwl_2022_1.jpg",
    props: "col-span-3 md:col-span-3 ",
  },
  {
    id: 3,
    alttext: "Audience Listening to Presentation",
    url: "./PreviousPhotos/2022/fwl_2022_3.jpg",
    props: "col-span-3 md:col-span-2 ",
  },
  {
    id: 4,
    alttext: "Participant giving presentation",
    url: "./PreviousPhotos/2022/fwl_2022_4.jpg",
    props: "col-span-3 md:col-span-2",
  },
  {
    id: 5,
    alttext: "Discussion after presentation",
    url: "./PreviousPhotos/2022/fwl_2022_5.jpg",
    props: "col-span-3 md:col-span-2 ",
  },
];

const listPhotos2021 = [
  {
    id: 1,
    url: "./PreviousPhotos/2021/fwl_2021_6.jpg",
    alttext: "Group Photo 2021",
    props: "col-span-12 lg:row-span-2 lg:col-span-8",
  },
  {
    id: 2,
    url: "./PreviousPhotos/2021/fwl_2021_4.jpg",
    alttext: "Participant giving presentation",
    props: "col-span-7 row-span-3 lg:row-span-2 lg:col-span-4 ",
  },
  {
    id: 3,
    url: "./PreviousPhotos/2021/fwl_2021_2.jpg",
    alttext: "Audience Asking Question",
    props: "col-span-5 lg:col-span-4",
  },
  {
    id: 4,
    url: "./PreviousPhotos/2021/fwl_2021_1.jpg",
    alttext: "Participant giving presentation",
    props: "col-span-5 lg:col-span-4",
  },
  {
    id: 5,
    url: "./PreviousPhotos/2021/fwl_2021_3.jpg",
    alttext: "Participant giving presentation",
    props: "col-span-5 lg:col-span-4",
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
      </div>
    </div>
  );
}
