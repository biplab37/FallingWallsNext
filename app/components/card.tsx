interface CardProps {
    imageurl: string;
    description: string;
    props: string;
  }

export default function Card({ imageurl, description, props }: CardProps) {
    return (
      <>
        <div
          className={`p-2 border border-gray-200 rounded-lg overflow-hidden shadow bg-white ${props}`}
        >
          <div className="">
            <img src={imageurl} alt="description" className="" loading="lazy" />
          </div>
          <div className="px-5 py-3 text-gray-700">
            <p>{description}</p>
          </div>
        </div>
      </>
    );
  }